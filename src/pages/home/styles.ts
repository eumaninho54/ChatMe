import {SafeAreaView as safeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import {ITheme} from '../../styles/colors/types';
import Maskedview from '@react-native-community/masked-view';
import Lineargradient from 'react-native-linear-gradient';

type IProps = {
  theme: ITheme;
};

export const SafeAreaView = styled(safeAreaView)`
  background-color: ${({theme}: IProps) => theme.primaryBackground};
  flex: 1;
  padding: 0px 15px;
`;

export const Wrapper = styled.View`
  flex: 1;
`

export const MaskedView = styled(Maskedview)`
  height: 100%;
  flex: 1;
  flex-direction: row;
`

export const LinearGradientWrapper = styled.View`
  background-color: transparent; 
  flex: 1;
`

export const LinearGradient = styled(Lineargradient)`
  flex: 1; 
  width: 100%; 
  border-radius: 10px;
`

export const ItemSeparator = styled.View`
  height: 1px;
  margin: 10px 0px;
`

export const RenderItemWrapper = styled.TouchableOpacity<IProps>`
  background-color: ${({theme}) => theme.secundaryBackground};
  border-radius: 10px;
  flex-direction: row;
  padding: 10px;
`

export const AvatarWrapper = styled.View`
  margin-right: 10px;
`

export const InfoWrapper = styled.View`
  flex: 1; 
  justify-content: center;
`

export const HeaderInfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const UsernameWrapper = styled.View`
  flex: 1;
`

export const FooterInfoWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const MessageWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`

export const CheckWrapper = styled.View`
  margin-right: 2px;
`

export const NotReadWrapper = styled.View<IProps>`
  background-color: ${({theme}) => theme.primaryColor};
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  height: 25px;
  min-width: 25px;
  padding: 0px 5px;
  margin-left: 15px;
`
