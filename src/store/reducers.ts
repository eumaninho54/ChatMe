import {combineReducers} from '@reduxjs/toolkit';
import {StoreState} from '.';
import userSlice from './reducers/user';
import messagesSlice from './reducers/messages'

export const reducers = combineReducers<StoreState>({
  user: userSlice,
  messages: messagesSlice
});
