import React, { forwardRef, memo, useContext } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { ITheme } from '../../styles/colors/types';
import Text from '../text';
import { buildButton } from './library';
import { ButtonPress } from './styles';
import { IProps } from './types';


const Button = forwardRef<TouchableOpacity, IProps>((props, ref) => {
  const theme = useContext<ITheme>(ThemeContext)
  const button = buildButton(theme, props)

  return (
    <ButtonPress
      onPress={() => props.onPress()}
      background={button.background} 
      ref={ref}>
      <Text
        color={button.color}
        text={props.text}
        size={'normal_16'}
        weight={'semibold'}
        />
    </ButtonPress>
  )
})

export default memo(Button);
