import { ITheme } from './../../../../styles/colors/types';
import styled from "styled-components/native";
import { Animated } from 'react-native';


type IProps = {
  theme: ITheme
}

export const Wrapper = styled.View<IProps>`
  background-color: ${({theme}) => theme.secundaryBackground};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const InputWrapper = styled.View`
  flex: 1;
  width: 100%;
`

export const ButtonsWrapper = styled(Animated.View)`
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`

export const ButtonsGroup = styled(Animated.View)`
  flex-direction: row;
  position: absolute;
`

export const SendGroup = styled(Animated.View)`
  height: 100%;
`

export const IconWrapper = styled.TouchableOpacity<IProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 5px;
`
