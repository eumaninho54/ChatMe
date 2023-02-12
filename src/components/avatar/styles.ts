import styled from "styled-components/native";
import { ITheme } from "../../styles/colors/types";


type ImageProps = {
  theme: ITheme
  size: string
}

export const Img = styled.Image<ImageProps>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
` 
