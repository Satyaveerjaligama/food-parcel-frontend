import { configureStore } from '@reduxjs/toolkit';
import centralDataSlice from './slices/centralDataSlice';
import utilitySlice from './slices/utilitySlice';
import customerSlice from './slices/customerDataSlice';
import restaurantSlice from './slices/restaurantDataSlice';
import deliveryAgentSlice from './slices/deliveryAgentDataSlice';

const store = configureStore({
  reducer:{
    centralDataSlice: centralDataSlice,
    utilitySlice: utilitySlice,
    customerSlice: customerSlice,
    restaurantSlice: restaurantSlice,
    deliveryAgentSlice: deliveryAgentSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;