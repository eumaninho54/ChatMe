import { Animated } from "react-native";
import styled from "styled-components/native";
import { ITheme } from "../../styles/colors/types";


type Theme = {
  theme: ITheme
  backgroundColor: string
}

export const IndicatorWrapper = styled(Animated.View)`
  height: 100%;
  width: 100%;
  background-color: ${({backgroundColor}: Theme) => backgroundColor};
  justify-content: center;
  align-items: center;
`

