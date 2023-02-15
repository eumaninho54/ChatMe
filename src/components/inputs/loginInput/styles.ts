import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {ITheme} from '../../../styles/colors/types';

type WrapperProps = {
  theme: ITheme;
  borderColor: string;
  isLogin: boolean;
};

export const Wrapper = styled.TouchableOpacity<WrapperProps>`
  border-color: ${({borderColor}) => borderColor};
  background-color: ${({theme, isLogin}) =>
    isLogin ? theme.secundaryLoginBackground : theme.secundaryBackground};
  width: 100%;
  height: 55px;
  padding: 0px 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex-shrink: 1;
`;

export const Placeholder = styled(Animated.View)`
  position: absolute;
  margin-left: 10px;
`;

type InputFieldProps = {
  theme: ITheme;
};

export const InputField = styled.TextInput<InputFieldProps>`
  flex: 1;
  color: ${({theme}) => theme.primaryFont};
  font-family: Montserrat-SemiBold;
  margin-left: 10px;
  margin-top: 2px;
  height: 20px;
  padding: 0px;
`;

export const IconWrapper = styled.TouchableOpacity`
  margin-left: 10px;
  padding: 10px;
`;
