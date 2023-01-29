import { SafeAreaView as safeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { ITheme } from "../../styles/colors/types";


type SafeAreaViewProps = {
  theme: ITheme
}

export const SafeAreaView = styled(safeAreaView)`
  background-color: ${({theme}: SafeAreaViewProps) => theme.secundaryBackground};
`

export const Wrapper = styled.View`
  flex: 1;
  background-color: red;
`


