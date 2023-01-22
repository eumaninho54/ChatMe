import { initialState } from './../initialState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { ApiService } from '../../../services/api';
import { IUser } from '../types';
import axios from 'axios';

export const authUser = createAsyncThunk('authUser', async () => {
  try {
    const token = await AsyncStorage.getItem('token')
    const req = await new ApiService(token).authUser()

    return req
  } 
  catch (err) {
    if(axios.isAxiosError(err)){
      throw err.response?.data['message']
    }
    throw ''
  }
});

export const authUserBuilder = (builder: ActionReducerMapBuilder<IUser>) => {
  builder
    .addCase(authUser.fulfilled, (state, action) => {
      return action.payload
    })

    .addCase(authUser.rejected, (state, action) => {
      return initialState
    });
};
