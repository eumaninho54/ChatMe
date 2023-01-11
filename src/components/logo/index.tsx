import React, { forwardRef, memo } from 'react';
import { buildImage } from './library';
import { Image } from './styles';
import { IProps } from './types';
import { Image as ImageComponent } from 'react-native';


const Logo = forwardRef<ImageComponent, IProps>((props, ref) => {
  const image = buildImage(props)

  return (
    <Image 
      resizeMode={props.resizeMode}
      key={props.key}
      ref={ref}
      source={props.source}
      size={image.size}/>
  )
})

export default memo(Logo);
