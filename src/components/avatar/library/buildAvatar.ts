import { IAvatarSizeKey } from './../types/index';
import { IProps } from "../types";
import { ImageURISource } from 'react-native';
import defaultAvatar from '../../../assets/avatar/Default-Avatar.png'

const avatarSize: Record<IAvatarSizeKey, string> = {
  small: '40px',
  normal: '60px'
}

const avatarSource = (source: ImageURISource): ImageURISource => {
  return source.uri
    ? source
    : defaultAvatar
}

export const buildAvatar = (props: IProps) => {
  const { size = 'normal', resizeMode = 'cover' } = props
  
  return {
    size: avatarSize[size],
    resizeMode: resizeMode,
    source: avatarSource(props.source)
  }
}
