import {IChat} from '../../types'
import {IAddMessageAction} from './types'

export const addMessageAction = (
  state: IChat[],
  {payload}: IAddMessageAction,
): IChat[] => {
  const {
    idChat,
    message,
    userId    
  } = payload

  let newChats = state.map(chat => {
    if (chat.idChat == idChat) {
      const newNotRead = message.sender.id != userId
        ? chat.notRead + 1
        : chat.notRead

      const newIsReceivedBy = !message.isReceivedBy.includes(userId)
        ? [...message.isReceivedBy, userId]
        : message.isReceivedBy

      return {
        ...chat,
        notRead: newNotRead, 
        messages: [
          {
            ...message, 
            isReceivedBy: newIsReceivedBy
          }, 
          ...chat.messages
        ],
      };
    }

    return chat
  });

  return newChats
};
