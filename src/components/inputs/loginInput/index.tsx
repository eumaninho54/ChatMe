import React, { forwardRef, memo, useContext, useEffect, useRef, useState } from 'react';
import { Animated, TextInput, View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { useCombinedRefs } from '../../../hooks/useCombineRefs';
import { ITheme } from '../../../styles/colors/types';
import Icon from '../../icon';
import Text from '../../text';
import { buildText } from '../../text/library';
import { buildInput } from './library';
import { IconWrapper, InputField, InputWrapper, Placeholder, Wrapper } from './styles';
import { IProps } from './types';


const LoginInput = forwardRef<TextInput, IProps>((props, ref) => {
  const { isLogin = false } = props
  const [secureText, setSecureText] = useState(props.type == 'password' ? true : false)
  const input = buildInput(props, secureText)
  const [valueTop] = useState(new Animated.Value(props.value ? -12 : -1))
  const theme = useContext<ITheme>(ThemeContext)
  const refInput = useRef<TextInput>()
  const combinedRef = useCombinedRefs<TextInput>(ref, refInput)
  const [borderFocused, setBorderFocused] = useState(props.isLogin ? theme.secundaryBackground : theme.primaryBackground)

  const setValueTop = (focus: boolean) => {
    Animated.spring(valueTop, {
      useNativeDriver: false,
      toValue: focus ? -13 : props.value ? -13 : -1
    }).start()

    focus
      ? setBorderFocused(theme.focused)
      : setBorderFocused(props.isLogin ? theme.secundaryBackground : theme.primaryBackground)
  }

  const fontSize = valueTop.interpolate({
    inputRange: [-13, -1],
    outputRange: [
      Number(buildText(theme, 'primaryFont', 'tiny_12', 'regular').size),
      Number(buildText(theme, 'primaryFont', 'normal_16', 'regular').size)
    ]
  })

  useEffect(() => {
    Animated.spring(valueTop, {
      useNativeDriver: false,
      toValue: combinedRef.current?.isFocused() ? -13 : props.value ? -13 : -1
    }).start()
  }, [props.value])


  return (
    <Wrapper
      isLogin={isLogin}
      borderColor={borderFocused}
      activeOpacity={1}
      onPress={() => combinedRef.current?.focus()}>
      {props.iconLeft
        ? <Icon
          name={props.iconLeft}
          size='normal_20'
          color='secundaryFont'
          family='Ionicons' />
        : null}
      <InputWrapper>
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
          autoCorrect={input.autoCorrect}
          secureTextEntry={secureText}
          keyboardType={input.keyboardType}
        />
      </InputWrapper>

      {input.iconRight
        ?
        <IconWrapper onPress={() => input.onPressIcon?.(setSecureText)}>
          <Icon
            name={input.iconRight}
            size='normal_20'
            color='secundaryFont'
            family='Ionicons' />
        </IconWrapper>
        : null
      }
    </Wrapper>
  )
})

export default memo(LoginInput);
