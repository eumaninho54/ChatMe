import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FlatList } from 'react-native';
import { useDebouncedCallback } from 'use-debounce';
import Avatar from '../../../../components/avatar';
import Button from '../../../../components/button';
import Loading from '../../../../components/loading';
import Search from '../../../../components/search';
import Text from '../../../../components/text';
import { apiError } from '../../../../errors/apiError';
import { Api } from '../../../../services/api';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { exitUser } from '../../../../store/reducers/user';
import { swapTokensThunk } from '../../../../store/reducers/user/thunks/swapTokensThunk';
import { FlatlistWrapper, InnerEmpty, InnerWrapper, ItemSeparator, LoadingWrapper, OuterEmpty, OuterWrapper, RenderItemWrapper, SendWrapper, UsernameWrapper, UserWrapper } from './styles';
import { IUsers } from './types';


const User: React.FC = () => {
  const { t, i18n } = useTranslation()
  const [searchUsers, setSearchUsers] = useState('')
  const [users, setUsers] = useState<IUsers[]>([])
  const dispatch = useAppDispatch()
  const user = useAppSelector((store) => store.user)
  const [isLoading, setIsLoading] = useState(true)

  const userRequest = () => {
    onSearchUser(searchUsers)
  }

  const callbackApiError = () => {
    dispatch(exitUser())
  }

  const onSearchUser = useDebouncedCallback(
    async (text: string) => {
      await new Api().searchUser({ 
        username: text, 
        idUser: user.id
      })
        .then((req) => {
          setUsers(req);
          if (isLoading) setIsLoading(false)
        })
        .catch((err) => apiError({ err, t, callbackApiError }))
    },
    1000
  )

  const onChangeValue = (text: string) => {
    if (!isLoading) setIsLoading(true)

    setSearchUsers(text)
    onSearchUser(text)
  }

  const onSend = async (isAdded: boolean, idFriend: string, index: number) => {
    const refreshToken = await AsyncStorage.getItem('refreshToken')
    await new Api(refreshToken, user.accessToken).sendFriendship({
      isAdded,
      idFriend: idFriend
    })
      .then(({ accessToken, refreshToken }) => {
        setUsers(users.map((user, i): IUsers =>
          i == index
            ? { ...user, hasFriendshipRequest: !user.hasFriendshipRequest }
            : user
        ))
        dispatch(swapTokensThunk({ accessToken, refreshToken }))

        if (isLoading) setIsLoading(false)
      })
      .catch((err) => apiError({ err, t, callbackApiError }))
  }

  const renderItem = ({ item, index }: { item: IUsers, index: number }) => {
    return (
      <RenderItemWrapper>
        <UserWrapper>
          <Avatar
            source={{ uri: item.imageUrl }}
            resizeMode='cover'/>

          <UsernameWrapper>
            <Text
              numberOfLines={2}
              text={item.username}
              color='primaryFont'
              size='normal_16'
              weight='regular' />
          </UsernameWrapper>
        </UserWrapper>

        <SendWrapper>
          <Button
            text={item.hasFriendshipRequest ? t('Sended') : t('Send')}
            type={item.hasFriendshipRequest ? 'clean' : 'solid'}
            size='small'
            onPress={() => onSend(item.hasFriendshipRequest, item.id, index)}
            outline />
        </SendWrapper>
      </RenderItemWrapper>
    )
  }

  const itemSeparator = () => {
    return <ItemSeparator />
  }

  useEffect(() => {
    userRequest()
  }, [])

  return (
    <OuterWrapper>
      <Search
        placeholder={t('Input the username')}
        setSearchValue={(text) => onChangeValue(text)}
        searchValue={searchUsers} />

      <InnerWrapper>
        {users.length > 0
          ?
          <FlatlistWrapper>
            <FlatList
              data={users}
              renderItem={renderItem}
              style={{ paddingTop: 20 }}
              ItemSeparatorComponent={itemSeparator} />
          </FlatlistWrapper>

          :
          <OuterEmpty>
            <InnerEmpty>
              <Text
                text={t('No user found!')}
                color='primaryFont'
                size='giant_22'
                weight='regular' />
            </InnerEmpty>
          </OuterEmpty>
        }

        <LoadingWrapper
          pointerEvents={isLoading ? 'box-only' : 'none'}>
          <Loading
            isLoading={isLoading}
            backgroundColor='primaryBackground'
            color='primaryColor' />
        </LoadingWrapper>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default User;
