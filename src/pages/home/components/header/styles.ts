import styled from 'styled-components/native';
import { ITheme } from '../../../../styles/colors/types';

type Theme = {
  theme: ITheme
}

export const Wrapper = styled.View<Theme>`
  margin-top: 15px;
`;

export const TitleWrapper = styled.View`
  margin-bottom: 10px; 
  margin-left: 10px;
`

export const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`

export const SearchWrapper = styled.View`
  flex: 1;
`

export const SortButton = styled.TouchableOpacity<Theme>`
  background-color: ${({theme}) => theme.secundaryBackground};
  margin-left: 15px;
  width: 55px;
  height: 55px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
