import { configureStore } from '@reduxjs/toolkit';
import centralDataSlice from './slices/centralDataSlice';

const store = configureStore({
  reducer:{
    centralDataSlice: centralDataSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;