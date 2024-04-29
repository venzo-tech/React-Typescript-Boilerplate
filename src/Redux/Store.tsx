import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    //
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type State = ReturnType<typeof store.getState>;
export type Dispatch = typeof store.dispatch;
