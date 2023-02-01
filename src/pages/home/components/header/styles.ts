import styled from 'styled-components/native';
import { ITheme } from '../../../../styles/colors/types';

type WrapperProps = {
  theme: ITheme
}

export const Wrapper = styled.View<WrapperProps>`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
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
