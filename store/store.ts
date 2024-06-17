import { configureStore } from '@reduxjs/toolkit';
import centralDataSlice from './slices/centralDataSlice';
import utilitySlice from './slices/utilitySlice';

const store = configureStore({
  reducer:{
    centralDataSlice: centralDataSlice,
    utilitySlice: utilitySlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;