import React, { forwardRef, memo, useContext, useRef, useState } from 'react';
import { TextInput } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { useCombinedRefs } from '../../../hooks/useCombineRefs';
import { ITheme } from '../../../styles/colors/types';
import Icon from '../../icon';
import { IconWrapper, InputField, InputWrapper } from './styles';
import { IProps } from './types';


const BaseInput = forwardRef<TextInput, IProps>((props, ref) => {
  const { autoCapitalize = 'none', autoCorrect = false, multiline = false } = props
  const refInput = useRef<TextInput>()
  const combinedRef = useCombinedRefs<TextInput>(ref, refInput)
  const theme = useContext<ITheme>(ThemeContext)
  const [borderFocused, setBorderFocused] = useState(theme.primaryBackground)


  return (
    <InputWrapper
      color={props.color}
      outline={props.outline}
      borderColor={borderFocused}>
      {
        props.hasLeftIcon
          ?
          <IconWrapper>
            <Icon
              name='search'
              size='normal_20'
              color='secundaryFont'
              family='Ionicons' />
          </IconWrapper>

          : null
      }

      <InputField
        ref={combinedRef}
        key={props.key}
        value={props.value}
        onChangeText={props.onChangeValue}
        onFocus={() => setBorderFocused(theme.focused)}
        onBlur={() => setBorderFocused(theme.primaryBackground)}
        placeholder={props.placeholder}
        placeholderTextColor={theme.secundaryFont}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        multiline={multiline}
        scrollEnabled
      />
    </InputWrapper>
  )
})

export default memo(BaseInput);
