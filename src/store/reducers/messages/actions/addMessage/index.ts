import {IChat} from '../../types';
import { IAction } from './types';

export const addMessageAction = (state: IChat[], { payload }: IAction): IChat[] => {
  let newChats = state.map((chat) => {
    if(chat.idChat == payload.idChat){
     return {...chat, messages: [payload.message, ...chat.messages]}
    }

    return chat
  })

  return newChats
};
