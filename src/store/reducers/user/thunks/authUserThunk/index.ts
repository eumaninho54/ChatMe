import {initialState} from '../../initialState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Api} from '../../../../../services/api';
import {IUser} from '../../types';
import axios from 'axios';

export const authUserThunk = createAsyncThunk('authUser', async () => {
  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const req = await new Api(refreshToken).authUser();

    await AsyncStorage.setItem('refreshToken', req.refreshToken);

    return req;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data['message'];
    }
    throw '';
  }
});

export const authUserBuilder = (builder: ActionReducerMapBuilder<IUser>) => {
  builder
    .addCase(authUserThunk.fulfilled, (state, action) => {
      return action.payload;
    })

    .addCase(authUserThunk.rejected, (state, action) => {
      return initialState;
    });
};
