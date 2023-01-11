import React, { forwardRef, memo, PropsWithChildren } from 'react';
import { SafeAreaView as SafeAreaType } from 'react-native';
import { SafeAreaView } from './styles';
import { IProps } from './types';


const SafeArea = forwardRef<SafeAreaType, PropsWithChildren<IProps>>((props, ref) => {
  return (
    <SafeAreaView
      color={props.color}
      edges={props.edges}
      ref={ref}
    >
      {props.children}
    </SafeAreaView>
  )
})

export default memo(SafeArea);
