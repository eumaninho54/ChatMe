import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IUser } from "../types";
import { signUpBuilder } from "./signUp";

export const userAsyncBuilder = (builder: ActionReducerMapBuilder<IUser>) => {
  signUpBuilder(builder)
}
