import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { messagesAsyncBuilder } from './thunks';

const messagesSlice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: { },
  extraReducers: (builder) => messagesAsyncBuilder(builder)
})

export default messagesSlice.reducer;
export const {  } = messagesSlice.actions;
