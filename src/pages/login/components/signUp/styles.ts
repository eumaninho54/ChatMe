import styled from "styled-components/native";
import { ITheme } from "../../../../styles/colors/types";


export const Back = styled.TouchableOpacity`
  flex: 1;
  position: absolute;
  z-index: 2;
  padding: 15px;
  margin: 5px 10px;
`

export const Wrapper = styled.View`
  flex: 1;
  flex-shrink: 0;
  padding: 20px;
  background-color: ${({theme}: {theme: ITheme}) => theme.primaryBackground};
  align-items: center;
  justify-content: center;
`

export const Titles = styled.View`
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`

export const Title = styled.View`
  margin-bottom: 5px;
`

export const InputWrapper = styled.View`
  align-items: center;
  justify-content: space-evenly;
  margin-top: 20px;
`

export const PasswordWrapper = styled.View`
  height: 120px;
  justify-content: space-between;
  margin-top: 20px;
`

export const ButtonWrapper = styled.View`
  height: 110px;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
`


