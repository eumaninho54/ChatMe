import { createSlice } from "@reduxjs/toolkit";
import { exitUserAction } from "./actions/exitUser";
import { initialState } from "./initialState";
import { userAsyncBuilder } from './thunks';

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: { 
    exitUser(){
      return exitUserAction()
    }
  },
  extraReducers: (builder) => userAsyncBuilder(builder)
})

export default userSlice.reducer;
export const { exitUser } = userSlice.actions;
