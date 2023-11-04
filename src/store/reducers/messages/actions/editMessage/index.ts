import {IChat} from '../../types';
import {IEditMessageAction} from './types';

export const editMessageAction = (
  state: IChat[],
  {payload}: IEditMessageAction,
): IChat[] => {
  const {
    idChat, 
    messages
  } = payload;

  let newChats = state.map(chat => {
    if (chat.idChat == idChat) {
      return {
        ...chat,
        messages: messages
      };
    }

    return chat;
  });

  return newChats;
};
