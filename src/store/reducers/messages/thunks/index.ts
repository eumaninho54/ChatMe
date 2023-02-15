import {ActionReducerMapBuilder} from '@reduxjs/toolkit';
import {IChat} from '../types';
import {getAllBuilder} from './getAllThunk';

export const messagesAsyncBuilder = (
  builder: ActionReducerMapBuilder<IChat[]>,
) => {
  getAllBuilder(builder);
};
