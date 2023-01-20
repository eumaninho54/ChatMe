import { ISignIn } from './types/index';
import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: { },
})

export default userSlice.reducer;
export const { } = userSlice.actions;
