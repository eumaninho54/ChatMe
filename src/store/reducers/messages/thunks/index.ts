import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import { IMessages } from '../types';
import {getAllBuilder} from './getAllThunk';

export const messagesAsyncBuilder = (builder: ActionReducerMapBuilder<IMessages[]>) => {
  getAllBuilder(builder)
};
