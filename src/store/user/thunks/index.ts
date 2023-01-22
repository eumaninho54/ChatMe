import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IUser } from "../types";
import { signInBuilder } from "./signIn";
import { signUpBuilder } from "./signUp";

export const userAsyncBuilder = (builder: ActionReducerMapBuilder<IUser>) => {
  signInBuilder(builder),
  signUpBuilder(builder)
}
