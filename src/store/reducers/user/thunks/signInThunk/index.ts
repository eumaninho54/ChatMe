import {initialState} from '../../initialState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Api} from '../../../../../services/api';
import {IUser} from '../../types';
import axios from 'axios';
import {IProps} from './types';

export const signInThunk = createAsyncThunk('signIn', async (props: IProps) => {
  try {
    const req = await new Api().getUser(props);

    await AsyncStorage.setItem('refreshToken', req.refreshToken);

    return req;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data['message'];
    }
    throw '';
  }
});

export const signInBuilder = (builder: ActionReducerMapBuilder<IUser>) => {
  builder
    .addCase(signInThunk.fulfilled, (state, action) => {
      return action.payload;
    })

    .addCase(signInThunk.rejected, (state, action) => {
      return initialState;
    });
};
