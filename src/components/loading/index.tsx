import React, { forwardRef, memo, useContext, useEffect, useState } from 'react';
import { View, ActivityIndicator, Animated } from 'react-native';
import { ThemeContext } from 'styled-components/native';
import { ITheme } from '../../styles/colors/types';
import { IndicatorWrapper } from './styles';
import { IProps } from './types';


const Loading = forwardRef<ActivityIndicator, IProps>((props, ref) => {
  const { isLoading, size = 'large' } = props
  const theme = useContext<ITheme>(ThemeContext)
  const [opacity] = useState(new Animated.Value(1))


  useEffect(() => {
    Animated.timing(opacity, {
      toValue: isLoading ? 1 : 0,
      useNativeDriver: false,
      duration: 1000
    }).start()
  }, [isLoading])

  return (
    <IndicatorWrapper
      backgroundColor={theme[props.backgroundColor]}
      style={{ opacity }}>
      <ActivityIndicator
        size={size}
        color={theme[props.color]} />
    </IndicatorWrapper>
  )
})

export default memo(Loading);
