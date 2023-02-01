import styled from "styled-components/native";
import { ITheme } from "../../styles/colors/types";


type InputWrapper = {
  theme: ITheme
  borderColor: string
}

export const InputWrapper = styled.View<InputWrapper>`
  border-color: ${({borderColor}) => borderColor};
  background-color: ${({theme}) => theme.secundaryBackground};
  width: 100%;
  height: 55px;
  padding: 0px 20px;
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-width: 1px;
`

type InputFieldProps = {
  theme: ITheme
}

export const InputField = styled.TextInput<InputFieldProps>`
  flex: 1;
  color: ${({theme}) => theme.primaryFont};
  font-family: Montserrat-SemiBold;
  margin-left: 10px; 
  height: 20px; 
  padding: 0px;
`;
