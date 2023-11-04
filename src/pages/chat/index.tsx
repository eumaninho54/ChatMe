import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, KeyboardAvoidingView, Platform, View } from 'react-native';
import Check from '../../components/check';
import Text from '../../components/text';
import { IChatRouteType, IStackNavigation } from '../../routes/types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IMessages } from '../../store/reducers/messages/types';
import { formatDate } from '../../utils/formatDate';
import ChatInput from './components/chatInput';
import Header from './components/header';
import Speech from './components/speech';
import {
  DateMessageWrapper,
  MessagesWrapper,
  OuterMessage,
  SafeAreaView,
  StatusMessage,
  Wrapper
} from './styles';
import { useWebSocket } from '../../hooks/useWebSocket/useWebSocket';
import { readChat } from '../../store/reducers/messages';

const Chat: React.FC = () => {
  const { params: { chat } } = useRoute<IChatRouteType>()
  const { goBack } = useNavigation<IStackNavigation>()
  const { onReadMessage } = useWebSocket()
  const user = useAppSelector((store) => store.user)
  const allMessages = useAppSelector((store) => store.messages)
  const dispatch = useAppDispatch()
  const messages = allMessages.find((item) => item.idChat == chat.idChat)?.messages 

  useEffect(() => {
    handleReadMessage()
    dispatch(readChat({ idChat: chat.idChat }))
  }, [messages])


  useEffect(() => {
    handleReadMessage()
    dispatch(readChat({ idChat: chat.idChat }))
  }, [])

  const handleReadMessage = () => {
    const messagesToRead = messages?.filter((item) => {
      const isReadBy = item.isReadBy.includes(user.id)
      return item.sender.id != user.id && !isReadBy
    })

    if (messagesToRead && messagesToRead.length > 0) {
      onReadMessage({
        idChat: chat.idChat,
        messagesId: messagesToRead.map((item) => item.id)
      })
    }
  }

  const renderItem = ({ item, index }: { item: IMessages, index: number }) => {
    return (
      <OuterMessage
        isOwner={user.id == item.sender.id}>
        <View>
          <Speech
            message={item.message}
            isOwner={user.id == item.sender.id} />

          <StatusMessage>
            <DateMessageWrapper>
              <Text
                weight='regular'
                size='normal_16'
                text={formatDate(item.createdAt)}
                color='secundaryFont'
              />
            </DateMessageWrapper>

            <Check message={item} users={chat.users} />
          </StatusMessage>
        </View>
      </OuterMessage>
    )
  }

  return (
    <SafeAreaView>
      <Wrapper>
        <Header
          id={chat.idChat}
          avatar={chat.icon || ''}
          username={chat.name}
          isOnline={chat.isOnline} />

        <MessagesWrapper>
          <FlatList
            data={messages}
            style={{ paddingHorizontal: 16 }}
            contentContainerStyle={{ paddingVertical: 16 }}
            renderItem={renderItem}
            keyExtractor={(item, index) => item.id + String(index)}
            inverted />
        </MessagesWrapper>

      </Wrapper>
        <KeyboardAvoidingView behavior='padding' enabled={Platform.OS == 'ios'}>
          <ChatInput idChat={chat.idChat} />
        </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Chat;
