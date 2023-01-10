import {Animated} from 'react-native';
import styled from 'styled-components/native';
import {IStyles} from './types';

export const Title = styled(Animated.Text)`
  color: ${(props: IStyles) => props.color};
  font-family: ${(props: IStyles) => `${props.font}`};
`;
