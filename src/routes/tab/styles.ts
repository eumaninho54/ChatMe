import { SafeAreaView as safeAreaView } from "react-native-safe-area-context";
import { Svg as svg } from "react-native-svg";
import styled from "styled-components/native";
import { ITheme } from "../../styles/colors/types";

type Theme = {
  theme: ITheme
}

export const SafeAreaView = styled(safeAreaView)`
  flex: 1; 
  background-color: ${({theme}: Theme) => theme.secundaryBackground};
`

export const Wrapper = styled.View`
  flex: 1; 
  background-color: ${({theme}: Theme) => theme.primaryBackground};
`

export const AddWrapper = styled.View`
  position: relative;
  width: 75px;
  align-items: center;
`

export const Svg = styled(svg)`
  position: absolute;
  top: 0;
  background-color: ${({theme}: Theme) => theme.primaryBackground};
`

export const AddButton = styled.TouchableOpacity`
  top: -25px;
  justify-content: center;
  align-items: center;
`

export const AddIcon = styled.View<Theme>`
  width: 60px;
  height: 60px;
  border-radius: ${`${60 / 2}px`};
  background-color: ${({theme}) => theme.primaryColor};
`

export const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: 1px;
`
