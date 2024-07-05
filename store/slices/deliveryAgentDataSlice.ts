import { AvailableOrders, CurrentOrderDetails } from '@/utilities/constants';
import { createSlice } from '@reduxjs/toolkit';

interface DeliveryAgentInitialState {
    availableOrders: AvailableOrders[];
    currentOrderDetails: CurrentOrderDetails;
}

const deliveryAgentInitialState: DeliveryAgentInitialState = {
  availableOrders: [],
  currentOrderDetails: {
    orderId: '',
    pickupLocation: '',
    deliveryLocation: '',
    phoneNumber: '',
    orderStatus: '',
  }
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
    }
  }
});

export const {updateAvailableOrders, updateCurrentOrderDetails} = deliveryAgentDataSlice.actions;
export default deliveryAgentDataSlice.reducer;