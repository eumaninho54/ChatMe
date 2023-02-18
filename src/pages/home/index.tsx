import React, { useContext, useEffect, useState } from 'react';
import Header from './components/header';
import { AvatarWrapper, CheckWrapper, FooterInfoWrapper, HeaderInfoWrapper, InfoWrapper, ItemSeparator, LinearGradient, LinearGradientWrapper, MaskedView, MessageWrapper, NotReadWrapper, RenderItemWrapper, SafeAreaView, UsernameWrapper, Wrapper } from './styles';
import '../../services/websockets';
import Empty from '../../components/empty';
import DownArrow from '../../assets/arrow/arrow.png'
import { useTranslation } from 'react-i18next';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { reactotron } from '../../config/reactotron';
import { apiError } from '../../errors/apiError';
import { exitUser } from '../../store/reducers/user';
import { getAllThunk } from '../../store/reducers/messages/thunks/getAllThunk';
import { FlatList } from 'react-native';
import { IChat } from '../../store/reducers/messages/types';
import Text from '../../components/text';
import Avatar from '../../components/avatar';
import { ThemeContext } from 'styled-components/native';
import { ITheme } from '../../styles/colors/types';
import Icon from '../../components/icon';
import { useNavigation } from '@react-navigation/native';
import { IStackNavigation } from '../../routes/types';
import Check from '../../components/check';


const Home: React.FC = () => {
  const { t, i18n } = useTranslation()
  const user = useAppSelector((store) => store.user)
  const theme = useContext<ITheme>(ThemeContext)
  const { navigate } = useNavigation<IStackNavigation>()
  const [searchValue, setSearchValue] = useState('')
  const messages = useAppSelector((store) => store.messages)
  const dispatch = useAppDispatch()


  const callbackApiError = () => {
    dispatch(exitUser())
  }

  const renderItem = ({ item, index }: { item: IChat, index: number }) => {

    return (
      <RenderItemWrapper 
        onPress={() => navigate('chat', { messagesChat: messages[index] })}>
        <AvatarWrapper>
          <Avatar source={{ uri: item.avatarFriend }} />
        </AvatarWrapper>

        <InfoWrapper>
          <HeaderInfoWrapper>
            <UsernameWrapper>
              <Text
                text={item.usernameFriend.split('#')[0]}
                color='primaryFont'
                size='normal_16'
                weight='semibold'
                numberOfLines={1} />
            </UsernameWrapper>

            <Text
              text={'08:34 PM'}
              color='secundaryFont'
              size='normal_16'
              weight='regular' />
          </HeaderInfoWrapper>

          <FooterInfoWrapper>
            <MessageWrapper>
              <CheckWrapper>
                <Check message={item.messages[0]}/>
              </CheckWrapper>

              <Text
                text={item?.messages[0]?.message}
                color='secundaryFont'
                size='normal_16'
                weight='regular'
                numberOfLines={2} />
            </MessageWrapper>

            {item.notRead
              ?
              <NotReadWrapper>
                <Text
                  text={item.notRead >= 20 ? `${item.notRead}+` : String(item.notRead)}
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

  useEffect(() => {
    dispatch(getAllThunk({ idUser: user.id }))
      .unwrap()
      .catch((err) => apiError({ err, t, callbackApiError }))
  }, [])


  return (
    <SafeAreaView edges={['top']}>
      <Header
        searchValue={searchValue}
        setSearchValue={setSearchValue} />

      {messages.length == 0
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
            data={messages}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <ItemSeparator />}
            contentContainerStyle={{ paddingVertical: 20 }}
            showsVerticalScrollIndicator={false} />
        </MaskedView>
      }
    </SafeAreaView>
  )
}

export default Home;
