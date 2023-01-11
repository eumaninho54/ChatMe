import { IColor, ITheme } from './../../styles/colors/types';
import { SafeAreaView as safeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

export const SafeAreaView = styled(safeAreaView)`
  flex: 1;
  background-color: ${({theme, color}: {theme: ITheme, color: IColor | undefined}) => color ? theme[color] : ''};
`
