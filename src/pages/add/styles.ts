import styled from "styled-components/native";
import Modal from 'react-native-modal';
import { ITheme } from "../../styles/colors/types";
import { Platform } from "react-native";


type IProps = {
  theme: ITheme
}

export const ModalWrapper = styled(Modal)`
  align-items: center;
  justify-content: flex-end; 
  bottom: 0px;
  margin: 0px;
`
export const ModalContent = styled.KeyboardAvoidingView<IProps>`
  width: 100%;
  background-color: ${({theme}) => theme.primaryBackground};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: space-between;
  padding: 0px 10px;
`

export const TopIndicatorWrapper = styled.TouchableOpacity`
  width: 100%;
  padding-top: 15px; 
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  justify-content: center;
  align-items: center;
`

export const Indicator = styled.View<IProps>`
  height: 6px; 
  width: 50px; 
  background-color: ${({theme}) => theme.secundaryFont}; 
  margin-bottom: 15px; 
  border-radius: 10px;
`
