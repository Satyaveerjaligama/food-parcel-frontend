import { AvailableOrders, CurrentOrderDetails, Earnings } from '@/utilities/constants';
import { createSlice } from '@reduxjs/toolkit';

interface DeliveryAgentInitialState {
    availableOrders: AvailableOrders[];
    currentOrderDetails: CurrentOrderDetails;
    earnings: Earnings;
}

export const deliveryAgentInitialState: DeliveryAgentInitialState = {
  availableOrders: [],
  currentOrderDetails: {
    orderId: '',
    pickupLocation: '',
    deliveryLocation: '',
    phoneNumber: '',
    orderStatus: '',
  },
  earnings: {
    totalOrders: 0,
    totalEarnings: 0
  },
};

const deliveryAgentDataSlice = createSlice({
  name: 'deliveryAgentDataSlice',
  initialState: deliveryAgentInitialState,
  reducers: {
    updateAvailableOrders: (state, action) => {
      state.availableOrders = action.payload;
    },
    updateCurrentOrderDetails: (state, action) => {
      state.currentOrderDetails = action.payload;
    },
    updateEarnings: (state, action) => {
      state.earnings = action.payload;
    },
  }
});

export const {updateAvailableOrders, updateCurrentOrderDetails, updateEarnings} = deliveryAgentDataSlice.actions;

export default deliveryAgentDataSlice.reducer;