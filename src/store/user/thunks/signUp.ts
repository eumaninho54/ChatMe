import { initialState } from './../initialState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActionReducerMapBuilder } from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import { Api } from '../../../services/api';
import { NewUserProps } from '../../../services/api/types';
import { IUser } from '../types';
import axios from 'axios';

export const signUp = createAsyncThunk('signUp', async (props: NewUserProps) => {
  try {
    const req = await new Api().newUser(props)
    AsyncStorage.setItem('refreshToken', req.refreshToken)

    return req
  } 
  catch (err) {
    if(axios.isAxiosError(err)){
      throw err.response?.data['message']
    }
    throw ''
  }
});

export const signUpBuilder = (builder: ActionReducerMapBuilder<IUser>) => {
  builder
    .addCase(signUp.fulfilled, (state, { payload }) => {
      return payload
    })
 
    .addCase(signUp.rejected, (state, action) => {
      return initialState
    });
};
