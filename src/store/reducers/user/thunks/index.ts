import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {IUser} from '../types';
import {authUserBuilder} from './authUserThunk';
import {signInBuilder} from './signInThunk';
import {signUpBuilder} from './signUpThunk';
import {swapTokensBuilder} from './swapTokensThunk';

export const userAsyncBuilder = (builder: ActionReducerMapBuilder<IUser>) => {
  authUserBuilder(builder),
    signInBuilder(builder),
    signUpBuilder(builder),
    swapTokensBuilder(builder);
};
