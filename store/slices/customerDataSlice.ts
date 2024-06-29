import { createSlice } from '@reduxjs/toolkit';

interface CustomerSliceInitialState {
  restaurantsList: {
    restaurantName: string;
    restaurantId: string;
    restaurantType: string[];
    image: string;
  }[];
  restaurantDetails: {
    restaurantName: string;
    restaurantType: string[];
  }
}

const initialState: CustomerSliceInitialState = {
  restaurantsList: [],
  restaurantDetails: {
    restaurantName: '',
    restaurantType: [],
  }
};

const customerData = createSlice({
  name: 'customerData',
  initialState: initialState,
  reducers: {
    updateRestaurantsList: (state, action) => {
      state.restaurantsList = action.payload;
    },
    updateRestaurantDetails: (state, action) => {
      state.restaurantDetails = action.payload;
    },
  },
});

export default customerData.reducer;

export const { updateRestaurantsList, updateRestaurantDetails } = customerData.actions;
