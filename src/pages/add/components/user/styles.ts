import styled from "styled-components/native";
import { ITheme } from "../../../../styles/colors/types";


type IProps = {
  theme: ITheme
}

export const OuterWrapper = styled.View`
  border-radius: 15px; 
  justify-content: center;
  align-items: center;
`

export const InnerWrapper = styled.View`
  flex-direction: column; 
  align-items: center;
`

export const FlatlistWrapper = styled.View`
   height: 360px; 
   flex-direction: row;
`

export const OuterEmpty = styled.View`
  height: 360px; 
  justify-content: center; 
  align-items: center;
`

export const InnerEmpty = styled.View`
  height: 360px; 
  align-items: center; 
  justify-content: center;
`

export const LoadingWrapper = styled.View`
  height: 360px; 
  width: 100%; 
  justify-content: center;
  align-items: center;
  position: absolute;
`

export const ItemSeparator = styled.View`
  flex: 1; 
  margin: 10px 0px;
  height: 1;
  background-color: ${({theme}: IProps) => theme.border};
`

export const RenderItemWrapper = styled.View`
  flex-direction: row;
  padding: 10px 15px;
  justify-content: space-between; 
  align-items: center; 
  height: 80px;
`

export const UserWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-right: 20px;
  flex: 1;
`

export const UsernameWrapper = styled.View`
  flex: 1px;
  margin-left: 10px;
`

export const SendWrapper = styled.View`
  flex-shrink: 0;
`
