import { configureStore } from "@reduxjs/toolkit";
import SignInUser from "./Reducers.tsx/SignInUser";

export const store = configureStore({
  reducer: {
    signin: SignInUser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
