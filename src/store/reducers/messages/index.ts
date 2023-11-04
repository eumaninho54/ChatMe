import {createSlice} from '@reduxjs/toolkit';
import {initialState} from './initialState';
import {messagesAsyncBuilder} from './thunks';
import { 
  IAddMessageAction, 
  IEditMessageAction, 
  IReadChatAction,
  addMessageAction, 
  editMessageAction,
  readChatAction
} from './actions';


const messagesSlice = createSlice({
  name: 'messages',
  initialState: initialState,
  reducers: {
    addMessage(state, action: IAddMessageAction) {
      return addMessageAction(state, action);
    },
    editMessage(state, action: IEditMessageAction) {
      return editMessageAction(state, action)
    },
    readChat(state, action: IReadChatAction) {
      return readChatAction(state, action)
    }
  },
  extraReducers: builder => messagesAsyncBuilder(builder),
});

export default messagesSlice.reducer;
export const { addMessage, editMessage, readChat } = messagesSlice.actions;
