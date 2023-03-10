import {createSlice} from '@reduxjs/toolkit';
import {addMessageAction} from './actions/addMessage';
import { IAction } from './actions/addMessage/types';
import {initialState} from './initialState';
import {messagesAsyncBuilder} from './thunks';

const messagesSlice = createSlice({
  name: 'messages',
  initialState: initialState,
  reducers: {
    addMessage(state, action: IAction) {
      return addMessageAction(state, action);
    },
  },
  extraReducers: builder => messagesAsyncBuilder(builder),
});

export default messagesSlice.reducer;
export const { addMessage } = messagesSlice.actions;
