import React, { useState } from 'react';
import { socket } from '../../services/websockets';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { 
  IOnNewMessage, 
  IOnEditMessage, 
  IReadMessage, 
  ISendMessage, 
  IReceiveMessage 
} from './types';
import { IChat } from '../../store/reducers/messages/types';
import { addMessage, editMessage } from '../../store/reducers/messages'


export const useWebSocket = () => {
  const user = useAppSelector((store) => store.user)
  const messages = useAppSelector((store) => store.messages)
  const dispatch = useAppDispatch()
  const [isConnected, setIsConnected] = useState(false)
  
  const chatsConnect = (chats: IChat[]) => {
    if (chats.length > 0 && !isConnected) {
      const roomsId = chats.map((chat) => chat.idChat)

      socket.emit('chat', {
        idUser: user.id,
        idChat: roomsId,
        username: user.name
      })

      socket.on('newMessage', (data: IOnNewMessage) => {
        dispatch(addMessage({...data, userId: user.id}))
        onReceiveMessage(data)
      })

      socket.on('editMessage', (data: IOnEditMessage) => {
        dispatch(editMessage(data))
      })

      setIsConnected(true)
    }
  }

  const onSendMessage = (props: ISendMessage) => {
    socket.emit('newMessage', {
      idUser: user.id,
      idChat: props.idChat,
      message: props.message,
      username: user.name
    })
  }

  const onReadMessage = (props: IReadMessage) => {
    socket.emit('readMessage', {
      idUser: user.id,
      idChat: props.idChat,
      messagesId: props.messagesId
    })
  }

  const onReceiveMessage = (props: IReceiveMessage) => {
    socket.emit('receiveMessage', {
      idUser: user.id,
      idChat: props.idChat,
      messageId: props.message.id,
    })
  }

  return { chatsConnect, onSendMessage, onReadMessage }
}
