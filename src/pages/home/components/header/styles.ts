import styled from 'styled-components/native';
import { ITheme } from '../../../../styles/colors/types';

type Theme = {
  theme: ITheme
}

export const Wrapper = styled.View<Theme>`
  margin-top: 15px;
`;

export const TitleWrapper = styled.View`
  margin-bottom: 5px; 
  margin-left: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const GroupIconWrapper = styled.View`
  flex-direction: row;
`

export const IconWrapper = styled.TouchableOpacity`
  padding: 13px 15px;
  margin: 0px 3px;
`
