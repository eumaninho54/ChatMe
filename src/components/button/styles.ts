import styled from "styled-components/native";
import { IColor, ITheme } from "../../styles/colors/types";


type ButtonPressType = {
  theme: ITheme,
  background: IColor | null,
  height: number
  outline: boolean
}

export const ButtonPress = styled.TouchableOpacity<ButtonPressType>`
  background-color: ${({theme, background}: ButtonPressType) => background ? theme[background] : '#ffffff00'};
  width: 100%;
  height: ${({height}) => `${height}px`};
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 0px 15px;
  border-width: ${({outline}: ButtonPressType) => outline ? '1px' : '0px'};
  border-color: ${({theme}: ButtonPressType) => theme.primaryColor};
` 
