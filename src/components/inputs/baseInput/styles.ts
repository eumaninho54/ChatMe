import { IColor } from './../../../styles/colors/types';
import styled from 'styled-components/native';
import {ITheme} from '../../../styles/colors/types';

type InputWrapper = {
  theme: ITheme;
  borderColor: string;
  outline: boolean;
  color: IColor
};

export const InputWrapper = styled.View<InputWrapper>`
  border-color: ${({borderColor}) => borderColor};
  background-color: ${({color, theme}) => theme[color]};
  width: 100%;
  min-height: 55px;
  max-height: 100px;
  padding: 5px 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: ${({outline}) => outline ? '1px' : '0px'};
`;

export const IconWrapper = styled.View`
  margin-right: 10px;
`

type InputFieldProps = {
  theme: ITheme;
};

export const InputField = styled.TextInput<InputFieldProps>`
  flex: 1;
  color: ${({theme}) => theme.primaryFont};
  font-family: Montserrat-SemiBold;
  padding: 10px 0px;
`;
