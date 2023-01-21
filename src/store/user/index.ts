import { ISignIn } from './types/index';
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";
import { userAsyncBuilder } from './thunks';

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: { },
  extraReducers: (builder) => userAsyncBuilder(builder)
})

export default userSlice.reducer;
export const { } = userSlice.actions;
