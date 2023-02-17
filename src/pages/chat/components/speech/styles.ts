import { ITheme } from './../../../../styles/colors/types';
import styled from "styled-components/native";


type IProps = {
  theme: ITheme
  isOwner: boolean
}

export const Wrapper = styled.View<IProps>`
  background-color: ${({theme}) => theme.primaryColor};
  padding: 15px 10px;
  border-top-right-radius: 15px;
  border-top-left-radius: ${({isOwner}) => isOwner ? '15px' : '0px'};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: ${({isOwner}) => isOwner ? '0px' : '15px'};

`
