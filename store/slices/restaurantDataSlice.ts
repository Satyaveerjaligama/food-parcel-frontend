import { MenuItem } from '@/utilities/constants';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  menuItem: MenuItem,
}

export const restaurantDataInitialState: InitialState = {
  menuItem: {
    name: '',
    price: 0,
    isVeg: false,
    isAvailable: false,
    type: '',
    category: '',
    mainIngredients: '',
  }
};

const restaurantData = createSlice({
  name: 'restaurantData',
  initialState: restaurantDataInitialState,
  reducers: {
    updateMenuItem: (state, action) => {
      state.menuItem = action.payload;
    },
  }
});

export default restaurantData.reducer;

export const {updateMenuItem} = restaurantData.actions;