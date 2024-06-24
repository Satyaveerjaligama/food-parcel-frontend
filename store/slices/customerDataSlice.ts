import { createSlice } from '@reduxjs/toolkit';

interface CustomerSliceInitialState {
  restaurantsList: {
    restaurantName: string;
    restaurantId: string;
    restaurantType: string[];
  }[];
}

const initialState: CustomerSliceInitialState = {
  restaurantsList: [],
};

const customerData = createSlice({
  name: 'customerData',
  initialState: initialState,
  reducers: {
    updateRestaurantsList: (state, action) => {
      state.restaurantsList = action.payload;
    },
  },
});

export default customerData.reducer;

export const { updateRestaurantsList } = customerData.actions;
