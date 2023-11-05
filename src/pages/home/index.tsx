import React, { useContext, useEffect, useState } from 'react';
import Header from './components/header';
import { 
  AvatarWrapper, 
  CheckWrapper, 
  FooterInfoWrapper, 
  HeaderInfoWrapper, 
  InfoWrapper, 
  ItemSeparator, 
  LinearGradient, 
  LinearGradientWrapper, 
  MaskedView, 
  MessageWrapper, 
  NotReadWrapper, 
  RenderItemWrapper, 
  SafeAreaView, 
  UsernameWrapper 
} from './styles';
import Empty from '../../components/empty';
import DownArrow from '../../assets/arrow/arrow.png'
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { apiError } from '../../errors/apiError';
import { exitUser } from '../../store/reducers/user';
import { getAllThunk } from '../../store/reducers/messages/thunks/getAllThunk';
import { FlatList } from 'react-native';
import { IChat } from '../../store/reducers/messages/types';
import Text from '../../components/text';
import Avatar from '../../components/avatar';
import { ThemeContext } from 'styled-components/native';
import { ITheme } from '../../styles/colors/types';
import { useNavigation } from '@react-navigation/native';
import { IStackNavigation } from '../../routes/types';
import Check from '../../components/check';
import { useWebSocket } from '../../hooks/useWebSocket/useWebSocket';
import '../../services/websockets'
import { formatDate } from '../../utils/formatDate';
import OneSignal from 'react-native-onesignal';


const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const { navigate } = useNavigation<IStackNavigation>()
  const theme = useContext<ITheme>(ThemeContext)
  const { chatsConnect } = useWebSocket()
  const user = useAppSelector((store) => store.user)
  const chats = useAppSelector((store) => store.messages)
  const dispatch = useAppDispatch()
  const [searchValue, setSearchValue] = useState('')
  const [refreshing, setRefreshing] = useState(false)


  const callbackApiError = () => {
    dispatch(exitUser())
  }

  const onPressChat = (chatTitle: string, chatAvatar: string, index: number) => {
    navigate('chat', { 
      chat: {
        ...chats[index],
        icon: chatAvatar,
        name: chatTitle
      }
    })
  }

  const renderItem = ({ item, index }: { item: IChat, index: number }) => {
    const chatTitle = item.name 
      ? item.name
      : item.users.filter((chatUser) => chatUser.id != user.id)[0].name.split('#')[0]
  
    const chatAvatar = item.icon
      ? item.icon
      : item.users.filter((chatUser) => chatUser.id != user.id)?.[0].imageUrl

    return (
      <RenderItemWrapper
        onPress={() => onPressChat(chatTitle, chatAvatar, index)}>
        <AvatarWrapper>
          <Avatar source={{ uri: chatAvatar }} />
        </AvatarWrapper>

        <InfoWrapper>
          <HeaderInfoWrapper>
            <UsernameWrapper>
              <Text
                text={chatTitle}
                color='primaryFont'
                size='normal_16'
                weight='semibold'
                numberOfLines={1} />
            </UsernameWrapper>

            {item?.messages?.[0]?.createdAt
              ?
              <Text
                text={formatDate(item?.messages?.[0].createdAt)}
                color='secundaryFont'
                size='normal_16'
                weight='regular' 
              />
              : null
            }
          </HeaderInfoWrapper>

          <FooterInfoWrapper>
            {item?.messages?.[0]
              ?
              <MessageWrapper>
                <CheckWrapper>
                  <Check message={item?.messages?.[0]} users={item.users}/>
                </CheckWrapper>

                <Text
                  text={item?.messages[0]?.message}
                  color='secundaryFont'
                  size='normal_16'
                  weight='regular'
                  numberOfLines={2} />
              </MessageWrapper>
              : null
            }

            {item.notRead
              ?
              <NotReadWrapper>
                <Text
                  text={item.notRead >= 20 
                    ? `${item.notRead}+` 
                    : String(item.notRead)
                  }
                  color='white'
                  size='small_14'
                  weight='semibold' />
              </NotReadWrapper>
              : null
            }
          </FooterInfoWrapper>
        </InfoWrapper>
      </RenderItemWrapper>
    )
  }

  const handleOnRefresh = () => {
    setRefreshing(true)
    dispatch(getAllThunk({ idUser: user.id }))
      .unwrap()
      .catch((err) => apiError({ err, t, callbackApiError }))
      .then(() => {
        chatsConnect(chats as IChat[])
        setRefreshing(false)
      })
  }
  
  useEffect(() => {
    OneSignal.setExternalUserId(user.id);

    dispatch(getAllThunk({ idUser: user.id }))
      .unwrap()
      .catch((err) => apiError({ err, t, callbackApiError }))
      .then((chats) => chatsConnect(chats as IChat[]))
  }, [])

  return (
    <SafeAreaView edges={['top']}>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      {chats.length == 0
        ?
        <Empty
          title={t('No chat yet...')}
          description={t('Search for any contact or add a new one!')}
          srcImage={DownArrow} />

        :
        <MaskedView
          maskElement={
            <LinearGradientWrapper>
              <LinearGradient
                locations={[0, 0.05, 0.95, 1]}
                colors={[
                  '#00000000',
                  theme.secundaryBackground,
                  theme.secundaryBackground,
                  '#00000000'
                ]} />
            </LinearGradientWrapper>
          }>
          <FlatList
            data={chats}
            extraData={[...chats]}
            refreshing={refreshing}
            onRefresh={handleOnRefresh}
            renderItem={renderItem}
            //keyExtractor={(item) => item.idChat}
            ItemSeparatorComponent={() => <ItemSeparator />}
            contentContainerStyle={{ paddingVertical: 20 }}
            showsVerticalScrollIndicator={false} />
        </MaskedView>
      }
    </SafeAreaView>
  )
}

export default Home;
