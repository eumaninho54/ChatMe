import { initialState } from './../initialState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { ApiService } from '../../../services/api';
import { GetUserProps } from '../../../services/api/types';
import { IUser } from '../types';
import axios from 'axios';

export const signIn = createAsyncThunk('signIn', async (props: GetUserProps) => {
  try {
    const req = await new ApiService().getUser(props)
    AsyncStorage.setItem('token', req.token)

    return req
  } 
  catch (err) {
    if(axios.isAxiosError(err)){
      throw err.response?.data['message']
    }
    throw ''
  }
});

export const signInBuilder = (builder: ActionReducerMapBuilder<IUser>) => {
  builder
    .addCase(signIn.fulfilled, (state, action) => {
      return action.payload
    })

    .addCase(signIn.rejected, (state, action) => {
      return initialState
    });
};
