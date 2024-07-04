import { MenuItem, MenuItemList } from '@/utilities/constants';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  menuItem: MenuItem,
  menuItemsList: MenuItemList [];
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
    rating: 0,
  },
  menuItemsList: [{
    itemId: '',
    name: '',
    price: 0,
    isVeg: false,
    isAvailable: false,
    type: '',
    category: '',
    mainIngredients: '',
    rating: 0,
    image: '',
    restaurantId: ''
  }]
};

const restaurantData = createSlice({
  name: 'restaurantData',
  initialState: restaurantDataInitialState,
  reducers: {
    updateMenuItem: (state, action) => {
      state.menuItem = action.payload;
    },
    updateMenuItemsList: (state, action) => {
      state.menuItemsList = action.payload;
    }
  }
});

export default restaurantData.reducer;

export const {updateMenuItem, updateMenuItemsList} = restaurantData.actions;