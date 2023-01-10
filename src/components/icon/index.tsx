import React, { forwardRef, memo, useContext } from 'react';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from 'styled-components';
import { IColor } from '../../styles/colors/types';
import { buildIcon } from './library';
import { IProps } from './types';

const Icon = forwardRef<IconIonicons, IProps>((props, ref) => {
  const theme = useContext<Record<IColor, string>>(ThemeContext)
  const icon = buildIcon(theme, props)

  return (
    <IconIonicons 
      ref={ref}
      key={props.key}
      name={icon.name} 
      size={icon.size}
      color={icon.color}/>
  )
})

export default memo(Icon);
