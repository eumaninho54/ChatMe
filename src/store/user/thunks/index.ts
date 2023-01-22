import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { IUser } from "../types";
import { authUserBuilder } from "./authUser";
import { signInBuilder } from "./signIn";
import { signUpBuilder } from "./signUp";

export const userAsyncBuilder = (builder: ActionReducerMapBuilder<IUser>) => {
  authUserBuilder(builder),
  signInBuilder(builder),
  signUpBuilder(builder)
}
