import { configureStore } from "@reduxjs/toolkit";

import scoreReducer from "./score";

export const configuration = {
  reducer: {
    score: scoreReducer,
  },
};

export const store = configureStore(configuration);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ReduxAction<Payload> = {
  type: string;
  payload: Payload;
};
