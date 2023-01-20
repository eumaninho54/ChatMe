import { combineReducers } from '@reduxjs/toolkit';
import { StoreState } from '.';
import userSlice from './user/index'

export const reducers = combineReducers<StoreState>({
  user: userSlice
})
