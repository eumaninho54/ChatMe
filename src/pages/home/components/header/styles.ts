import styled from 'styled-components/native';
import { ITheme } from '../../../../styles/colors/types';

type WrapperProps = {
  theme: ITheme
}

export const Wrapper = styled.View<WrapperProps>`
  height: 120px;
  background-color: ${({theme}) => theme.primaryBackground};
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const InputWrapper = styled.View`
  flex: 1;
`

type SortButtonProps = {
  theme: ITheme
}

export const SortButton = styled.TouchableOpacity<SortButtonProps>`
  background-color: ${({theme}) => theme.secundaryBackground};
  margin-left: 15px;
  width: 55px;
  height: 55px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
