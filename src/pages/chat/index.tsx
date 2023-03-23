import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, View } from 'react-native';
import Check from '../../components/check';
import Text from '../../components/text';
import { IChatRouteType, IStackNavigation } from '../../routes/types';
import { useAppSelector } from '../../store/hooks';
import { IChat, IMessages } from '../../store/reducers/messages/types';
import { formatDate } from '../../utils/formatDate';
import ChatInput from './components/chatInput';
import Header from './components/header';
import Speech from './components/speech';
import { DateMessageWrapper, MessagesWrapper, OuterMessage, SafeAreaView, StatusMessage, Wrapper } from './styles';

const Chat: React.FC = () => {
  const { params: { messagesChat } } = useRoute<IChatRouteType>()
  const { goBack } = useNavigation<IStackNavigation>()
  const user = useAppSelector((store) => store.user)
  const messages = useAppSelector((store) => store.messages)
  const [chat, setChat] = useState(messagesChat)


  useEffect(() => {
    const newChat: IChat = {
      ...messages.find((message) => message.idChat == chat.idChat) as IChat,
      icon: messagesChat.icon,
      name: messagesChat.name
    }

    newChat 
      ? setChat(newChat)
      : goBack()
  }, [messages])

  const renderItem = ({ item, index }: { item: IMessages, index: number }) => {
    return (
      <OuterMessage
        isOwner={user.id == item.senderId}>
        <View>
          <Speech
            message={item.message}
            isOwner={user.id == item.senderId} />

          <StatusMessage>
            <DateMessageWrapper>
              <Text
                weight='regular'
                size='normal_16'
                text={formatDate(item.createdAt)}
                color='secundaryFont'
              />
            </DateMessageWrapper>

            <Check message={item} />
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
          username={chat.name || ''}
          isOnline={chat.isOnline} />

        <MessagesWrapper>
          <FlatList
            data={chat.messages}
            style={{ padding: 15 }}
            renderItem={renderItem}
            inverted />
        </MessagesWrapper>

        <ChatInput idChat={chat.idChat}/>
      </Wrapper>
    </SafeAreaView>
  )
}

export default Chat;
