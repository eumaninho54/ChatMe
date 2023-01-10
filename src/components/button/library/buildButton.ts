import {IColor, ITheme} from '../../../styles/colors/types';
import {IProps} from '../types';

export const buildButton = (theme: ITheme, props: IProps): { background: IColor | null, color: IColor } => {
  return props.type == 'solid'
    ? {
        background: 'primaryColor',
        color: 'white',
      }
    : {
        background: null,
        color: 'primaryFont'
      };
};
