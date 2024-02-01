import { configureStore } from '@reduxjs/toolkit';

import accountReducer from './slices/accountSlice';

export const createStore = () =>
  configureStore({
    reducer: {
      account: accountReducer,
    },
  });

const store = createStore();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
