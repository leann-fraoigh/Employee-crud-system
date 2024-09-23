import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appSlice from './sclices/app.slice';

const rootReducer = combineReducers({
  app: appSlice,
});

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;