import {KeyboardTypeOptions} from 'react-native';
import {IInputTypeKey, IProps} from '../types';


const autoCorrect: Record<IInputTypeKey, boolean> = {
  email: false,
  password: false,
  text: true,
  number: false
};

const autoCapitalize: Record<IInputTypeKey, 'none' | 'sentences'> = {
  email: 'none',
  password: 'none',
  text: 'sentences',
  number: 'none'
};

const keyboardType: Record<IInputTypeKey, KeyboardTypeOptions> = {
  email: 'email-address',
  number: 'number-pad',
  password: 'default',
  text: 'default',
};

const onPressIcon = (type: IInputTypeKey, secureText: boolean) => {
  if(type == 'password'){
    return (func: React.Dispatch<React.SetStateAction<boolean>>) => func(!secureText)
  }
};

const iconRight = (type: IInputTypeKey, secureText: boolean): string => {
  switch (type) {
    case 'email':
      return '';
    case 'number':
      return '';
    case 'password':
      return secureText ? 'eye-outline' : 'eye-off-outline';
    case 'text':
      return '';
  }
};

export const buildInput = (props: IProps, secureText: boolean) => {
  const {type = 'text', disabled = false, multiline = false} = props;

  return {
    autoCorrect: autoCorrect[type],
    autoCapitalize: autoCapitalize[type],
    keyboardType: keyboardType[type],
    disabled: disabled,
    multiline: multiline,
    secureTextEntry: secureText,
    onPressIcon: onPressIcon(type, secureText),
    iconRight: iconRight(type, secureText)
  };
};
