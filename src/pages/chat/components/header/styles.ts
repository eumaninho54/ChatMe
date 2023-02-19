import { ITheme } from './../../../../styles/colors/types';
import styled from "styled-components/native";


type IProps = {
  theme: ITheme
}

export const Wrapper = styled.View<IProps>`
  background-color: ${({theme}) => theme.secundaryBackground};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`

export const GoBack = styled.TouchableOpacity`
  padding: 10px;
`

export const LeftWrapper = styled.View`
  flex-direction: row;
`

export const UserWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`

export const UsernameWrapper = styled.View`
  margin-left: 10px;
`

export const StatusWrapper = styled.View`
  margin-top: 2px;
`
