import {initialState} from '../../initialState';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {IUser} from '../../types';
import {reactotron} from '../../../../../config/reactotron';
import {Iprops} from './types';

export const swapTokensThunk = createAsyncThunk(
  'swapTokens',
  async ({accessToken, refreshToken}: Iprops) => {
    try {
      await AsyncStorage.setItem('refreshToken', refreshToken);

      return {
        refreshToken,
        accessToken,
      };
    } catch (err) {
      reactotron.log?.(err);
      throw '';
    }
  },
);

export const swapTokensBuilder = (builder: ActionReducerMapBuilder<IUser>) => {
  builder
    .addCase(swapTokensThunk.fulfilled, (state, {payload}) => {
      return {
        ...state,
        accessToken: payload.accessToken,
        refreshToken: payload.refreshToken,
      };
    })

    .addCase(swapTokensThunk.rejected, (state, action) => {
      return initialState;
    });
};
