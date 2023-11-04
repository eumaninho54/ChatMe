import { IChat } from '../../types';
import { IReadChatAction } from './types';

export const readChatAction = (
  state: IChat[],
  {payload}: IReadChatAction,
): IChat[] => {
  const {
    idChat
  } = payload;

  let newChats = state.map(chat => {
    if (chat.idChat == idChat) {
      return {
        ...chat,
        notRead: 0
      };
    }

    return chat;
  });

  return newChats;
};
