import styled from "styled-components/native";
import { IColor, ITheme } from "../../styles/colors/types";


type ButtonPressType = {
  theme: ITheme,
  background: IColor | null,
  height: number
}

export const ButtonPress = styled.TouchableOpacity<ButtonPressType>`
  background-color: ${({theme, background}: {theme: ITheme, background: IColor | null}) => background ? theme[background] : '#ffffff00'};
  width: 100%;
  height: ${({height}) => `${height}px`};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 0px 15px;
` 
