import { configureStore } from "@reduxjs/toolkit"
import { reducers } from "./reducers";
import { IUser } from "./user/types";

// Store configuration
export interface StoreState {
  user: IUser
}

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
  })
}) 

export { store }
