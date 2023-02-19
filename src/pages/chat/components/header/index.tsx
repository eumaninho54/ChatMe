import { useNavigation } from '@react-navigation/native';
import React, { forwardRef, memo } from 'react';
import { View } from 'react-native';
import Avatar from '../../../../components/avatar';
import Icon from '../../../../components/icon';
import Text from '../../../../components/text';
import { IStackNavigation } from '../../../../routes/types';
import { GoBack, LeftWrapper, StatusWrapper, UsernameWrapper, UserWrapper, Wrapper } from './styles';
import { IProps } from './types';


const Header = forwardRef<View, IProps>((props, ref) => {
  const { id, username, avatar, isOnline } = props
  const { goBack } = useNavigation<IStackNavigation>()


  return (
    <Wrapper>
      <LeftWrapper>
        <GoBack onPress={() => goBack()}>
          <Icon
            size='big_25'
            color='secundaryFont'
            name='arrow-back'
            family='Ionicons' />
        </GoBack>

        <UserWrapper>
          <Avatar
            source={{ uri: avatar }}
            size='small' />

          <UsernameWrapper>
            <Text
              text={username.split('#')[0]}
              color='primaryFont'
              weight='semibold'
              size='normal_16' />

            <StatusWrapper>
              <Text
                text={isOnline ? 'Online' : 'Offline'}
                color={isOnline ? 'online' : 'secundaryFont'}
                size='small_14'
                weight='semibold' />
            </StatusWrapper>
          </UsernameWrapper>
        </UserWrapper>
      </LeftWrapper>
    </Wrapper>
  )
})

export default memo(Header);
