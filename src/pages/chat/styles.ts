import { ITheme } from './../../styles/colors/types';
import styled from "styled-components/native";
import {SafeAreaView as safeAreaView} from 'react-native-safe-area-context';


type IProps = {
  theme: ITheme
}

export const SafeAreaView = styled(safeAreaView)`
  flex: 1;
  background-color: ${({theme}: IProps) => theme.secundaryBackground};
`

export const Wrapper = styled.View<IProps>`
  flex: 1;
  background-color: ${({theme}: IProps) => theme.primaryBackground};
`

export const MessagesWrapper = styled.View`
  flex: 1; 
  background-color: ${({theme}: IProps) => theme.primaryBackground};
`

type OuterMessageProps = {
  isOwner: boolean
}

export const OuterMessage = styled.View<OuterMessageProps>`
  height: 100px; 
  align-items: ${({isOwner}) => isOwner ? 'flex-end' : 'flex-start'};
`

export const InnerMessage = styled.View`

`

export const StatusMessage = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 5px;
`

export const DateMessageWrapper = styled.View`
  margin-right: 5px;
`
