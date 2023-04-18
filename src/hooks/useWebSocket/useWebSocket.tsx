import React, { useEffect } from 'react';
import { Platform, View } from 'react-native';
import { socket } from '../../services/websockets';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { IOnMessage, ISendMessage } from './types';
import { IAllChat } from '../../services/api/types';
import { IChat, IMessages } from '../../store/reducers/messages/types';
import { addMessage } from '../../store/reducers/messages'
import { reactotron } from '../../config/reactotron';


export const useWebSocket = () => {
  const user = useAppSelector((store) => store.user)
  const messages = useAppSelector((store) => store.messages)
  const dispatch = useAppDispatch()
  
  const chatsConnect = (chats: IAllChat[]) => {
    if (chats.length > 0) {
      const roomsId = chats.map((chat) => chat.idChat)

      socket.emit('chat', {
        idUser: user.id,
        idChat: roomsId,
        username: user.name
      })

      socket.on('message', (data: IOnMessage) => {
        dispatch(addMessage(data))

        reactotron.log?.(data)
        
        console.log(data, 'ON HERE', Platform.OS)
      })
    }
  }

  const sendMessage = (props: ISendMessage) => {
    socket.emit('message', {
      idUser: user.id,
      idChat: props.idChat,
      message: props.message,
      username: user.name
    })
  }

  return { chatsConnect, sendMessage }
}
