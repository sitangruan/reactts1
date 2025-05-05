/**
 * This is the store.
 */

import { configureStore } from "@reduxjs/toolkit";
import rootReducer from './rootReducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppStore = typeof store;

export type RootState = ReturnType<AppStore['getState']>;

export type AppDispatch = AppStore['dispatch'];

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
// export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

// export default store;