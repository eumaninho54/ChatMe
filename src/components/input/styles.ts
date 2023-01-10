import { Animated } from 'react-native';
import styled from 'styled-components/native';
import { ITheme } from '../../styles/colors/types';


export const Wrapper = styled.TouchableOpacity`
  background-color: ${({theme}: {theme: ITheme}) => theme.secundaryBackground};
  width: 100%;
  height: 55px;
  padding: 0px 20px;
  border-radius: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Placeholder = styled(Animated.View)`
  position: absolute;
  margin-left: 20px;
`;

export const InputField = styled.TextInput`
  flex: 1;
  color: ${({theme}: {theme: ITheme}) => theme.primaryFont};
  margin-top: 10px;
  font-family: Montserrat-SemiBold;
`;

export const IconWrapper = styled.TouchableOpacity`
  margin-left: 10px;
  padding: 10px;
`
