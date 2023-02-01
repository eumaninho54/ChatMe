import React, { useContext, forwardRef, memo } from 'react';
import { buildText } from './library';
import { Title } from './styles';
import { IProps } from './types';
import { ITheme } from '../../styles/colors/types';
import { ThemeContext } from 'styled-components/native';
import { Text as TextReact } from 'react-native';


const Text = forwardRef<TextReact, IProps>((props, ref) => {
  const { align = 'left' } = props
  const theme = useContext<ITheme>(ThemeContext)
  const text = buildText(theme, props.color, props.size, props.weight)

  return (
    <Title 
      align={align}
      style={{fontSize: text.size}}
      key={props.key}
      ref={ref} 
      color={text.color}
      font={text.font}>
      {props.text}
    </Title>
  )
})

export default memo(Text);
