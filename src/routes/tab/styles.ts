import { Animated, View } from 'react-native';
import {SafeAreaView as safeAreaView} from 'react-native-safe-area-context';
import {Svg as svg} from 'react-native-svg';
import styled from 'styled-components/native';
import {ITheme} from '../../styles/colors/types';

type Theme = {
  theme: ITheme;
};

export const SafeAreaView = styled(safeAreaView)`
  flex: 1;
  background-color: ${({theme}: Theme) => theme.secundaryBackground};
`;

export const Wrapper = styled.View`
  flex: 1;
  background-color: ${({theme}: Theme) => theme.primaryBackground};
`;

export const AddWrapper = styled.View`
  position: relative;
  width: 75px;
  align-items: center;
  z-index: 3;
`;

export const Svg = styled(svg)`
  position: absolute;
  top: 0;
  background-color: ${({theme}: Theme) => theme.primaryBackground};
`;

export const MenuButton = styled.TouchableOpacity`
  top: -25px;
  justify-content: center;
  align-items: center;
`;

export const MenuIcon = styled(Animated.View)`
  width: 62px;
  height: 62px;
  border-radius: ${`${62 / 2}px`};
  background-color: ${({theme}: Theme) => theme.primaryColor};
  border-width: 3px;
  border-color: ${({theme}: Theme) => theme.primaryBackground};
  justify-content: center;
  align-items: center;
`;

export const ItemsWrapper = styled(Animated.View)`
  width: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
`

export const ItemIcon = styled.TouchableOpacity<Theme>`
  width: 50px;
  height: 50px;
  border-radius: ${`${50 / 2}px`};
  background-color: ${({theme}) => theme.white};
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 5px ${({theme}) => theme.secundaryColor};
  margin-top: 15px;
`;

export const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 1px;
`;
