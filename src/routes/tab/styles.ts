import { SafeAreaView as safeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { ITheme } from "../../styles/colors/types";

type SafeAreaViewProps = {
  theme: ITheme
}

export const SafeAreaView = styled(safeAreaView)`
  flex: 1; 
  background-color: ${({theme}: SafeAreaViewProps) => theme.secundaryBackground};
`

export const AddButton = styled.TouchableOpacity`
  top: -30px;
  justify-content: center;
  align-items: center;
`

type AddProps = {
  theme: ITheme
}

export const AddIcon = styled.View<AddProps>`
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
