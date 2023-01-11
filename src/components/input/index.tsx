import React, { forwardRef, memo, useContext, useEffect, useRef, useState } from 'react';
import { Animated, TextInput } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { useCombinedRefs } from '../../hooks/useCombineRefs';
import { ITheme } from '../../styles/colors/types';
import Icon from '../icon';
import Text from '../text';
import { buildText } from '../text/library';
import { buildInput } from './library';
import { IconWrapper, InputField, Placeholder, Wrapper } from './styles';
import { IProps } from './types';


const Input = forwardRef<TextInput, IProps>((props, ref) => {
  const [secureText, setSecureText] = useState(props.type == 'password' ? true : false)
  const input = buildInput(props, secureText)
  const [valueTop] = useState(new Animated.Value(props.value ? 4 : 16))
  const theme = useContext<ITheme>(ThemeContext)
  const refInput = useRef<TextInput>()
  const combinedRef = useCombinedRefs<TextInput>(ref, refInput)
  const [borderFocused, setBorderFocused] = useState(theme.secundaryBackground)

  const setValueTop = (focus: boolean) => {
    Animated.spring(valueTop, {
      useNativeDriver: false,
      toValue: focus ? 4 : props.value ? 4 : 16
    }).start()

    focus 
    ? setBorderFocused(theme.focused)
    : setBorderFocused(theme.secundaryBackground)
  }

  const fontSize = valueTop.interpolate({
    inputRange: [-8, 16],
    outputRange: [
      Number(buildText(theme, 'primaryFont', 'tiny_12', 'regular').size),
      Number(buildText(theme, 'primaryFont', 'normal_16', 'regular').size)
    ]
  })

  useEffect(() => {
    Animated.spring(valueTop, {
      useNativeDriver: false,
      toValue: combinedRef.current?.isFocused() ? 4 : props.value ? 4 : 16
    }).start()
  }, [props.value])
  

  return (
    <Wrapper
      borderColor={borderFocused}
      activeOpacity={1}
      onPress={() => combinedRef.current?.focus()}>
      <Placeholder
        style={{ top: valueTop }}>
        <Text
          text={props.placeholder}
          color={'primaryFont'}
          size={fontSize}
          weight='regular' />
      </Placeholder>

      <InputField
        onFocus={() => setValueTop(true)}
        onBlur={() => setValueTop(false)}
        ref={combinedRef}
        key={props.key}
        textContentType={'oneTimeCode'}
        value={props.value}
        onChangeText={props.onChangeValue}
        placeholderTextColor={theme.secundaryFont}
        autoCapitalize={input.autoCapitalize}
        secureTextEntry={secureText}
        keyboardType={input.keyboardType}

      />

      {input.iconName
        ?
        <IconWrapper onPress={() => input.onPressIcon?.(setSecureText)}>
          <Icon
            name={input.iconName}
            size='normal_20'
            color='primaryFont' 
            family='Ionicons'/>
        </IconWrapper>
        : null
      }
    </Wrapper>
  )
})

export default memo(Input);
