import React from 'react';
import { View } from 'react-native';
import Text from '../../../../components/text';
import { Wrapper } from './styles';
import { IProps } from './types';


const Speech: React.FC<IProps> = (props) => {
  const { isOwner } = props

  return (
    <Wrapper isOwner={isOwner}>
      <Text
        weight='regular'
        size='normal_16'
        text={props.message}
        color='white'
      />
    </Wrapper>
  )
}

export default Speech;
