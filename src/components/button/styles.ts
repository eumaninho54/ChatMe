import styled from "styled-components/native";
import { IColor, ITheme } from "../../styles/colors/types";


export const ButtonPress = styled.TouchableOpacity`
  background-color: ${({theme, background}: {theme: ITheme, background: IColor | null}) => background ? theme[background] : ''};
  width: 100%;
  height: 55px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
` 
