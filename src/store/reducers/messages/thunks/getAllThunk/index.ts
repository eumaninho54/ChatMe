import { IChat } from './../../types/index';
import {initialState} from '../../initialState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {Api} from '../../../../../services/api';
import axios from 'axios';
import { IProps } from './types';

export const getAllThunk = createAsyncThunk('getAll', async (props: IProps) => {
  try {
    const refreshToken = await AsyncStorage.getItem('refreshToken');
    const req = await new Api(refreshToken).allChat({ idUser: props.idUser });

    return req;
  } 
  catch (err) {
    if (axios.isAxiosError(err)) {
      throw err.response?.data['message'];
    }
    throw '';
  }
});

export const getAllBuilder = (builder: ActionReducerMapBuilder<IChat[]>) => {
  builder
    .addCase(getAllThunk.fulfilled, (state, { payload }) => {
      return payload
    })

    .addCase(getAllThunk.rejected, (state, action) => {
      return initialState;
    });
};
