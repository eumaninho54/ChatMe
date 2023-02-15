import { IAvatarSizeKey } from './../types/index';
import { IProps } from "../types";


const avatarSize: Record<IAvatarSizeKey, string> = {
  small: '40px',
  normal: '60px'
}

export const buildAvatar = (props: IProps) => {
  const { size = 'normal', resizeMode = 'cover' } = props
  
  return {
    size: avatarSize[size],
    resizeMode: resizeMode,
    source: props.source
  }
}
