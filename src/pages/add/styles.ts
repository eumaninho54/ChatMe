import { SafeAreaView as safeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { ITheme } from "../../styles/colors/types";


type SafeAreaViewProps = {
  theme: ITheme
}

export const Wrapper = styled(safeAreaView)`
  background-color: ${({ theme }: SafeAreaViewProps) => theme.primaryBackground};
  flex: 1;
  padding: 0px 15px;
`
