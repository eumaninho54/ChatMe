import React, { forwardRef, memo } from 'react';
import { Image } from 'react-native';
import { buildAvatar } from './library';
import { IProps } from './types';
import defaultAvatar from '../../assets/avatar/Default-Avatar.png'
import { Img } from './styles';


const Avatar = forwardRef<Image, IProps>((props, ref) => {
  const avatar = buildAvatar(props)

  return (
    <Img
      ref={ref}
      size={avatar.size}
      resizeMode={avatar.resizeMode}
      source={avatar.source}
      defaultSource={defaultAvatar}/>
  )
})

export default memo(Avatar);
