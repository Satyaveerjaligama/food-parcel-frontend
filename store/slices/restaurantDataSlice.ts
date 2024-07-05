import { ActiveOrders, MenuItem, MenuItemList } from '@/utilities/constants';
import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  menuItem: MenuItem,
  menuItemsList: MenuItemList [];
  activeOrders: ActiveOrders[];
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
  }],
  activeOrders: [{
    totalPrice: 0,
    paymentMode: '',
    orderStatus: '',
    orderId: '',
    foodItems: [{
      itemId: '',
      itemName: '',
      quantity: 0,
      itemPrice: 0,
    }]
  }],
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
    },
    updateActiveOrders: (state, action) => {
      state.activeOrders = action.payload;
    }
  }
});

export default restaurantData.reducer;

export const {updateMenuItem, updateMenuItemsList, updateActiveOrders} = restaurantData.actions;