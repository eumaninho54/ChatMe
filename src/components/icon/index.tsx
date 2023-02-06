import React, { forwardRef, memo, useContext } from 'react';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { ThemeContext } from 'styled-components';
import { IColor } from '../../styles/colors/types';
import { buildIcon } from './library';
import { IProps } from './types';

const Icon = forwardRef<IconIonicons, IProps>((props, ref) => {
  const { solid = false } = props
  const theme = useContext<Record<IColor, string>>(ThemeContext)
  const icon = buildIcon(theme, props)


  return (
    <>
      {
        props.family == 'FontAwesome5'
          ? <IconFontAwesome5
            solid={solid}
            ref={ref}
            key={props.key}
            name={icon.name}
            size={icon.size}
            color={icon.color} />
          : null
      }

      {
        props.family == 'Ionicons'
          ? <IconIonicons
            ref={ref}
            key={props.key}
            name={icon.name}
            size={icon.size}
            color={icon.color} />
          : null
      }
    </>
  )
})

export default memo(Icon);
