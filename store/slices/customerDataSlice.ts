import { CartInfo, CartItems } from '@/utilities/constants';
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
  };
  cartItems: CartItems,
  cartItemImages: {[key: string]: string};
  cartInfo: CartInfo;
}

const initialState: CustomerSliceInitialState = {
  restaurantsList: [],
  restaurantDetails: {
    restaurantName: '',
    restaurantType: [],
  },
  cartItems: {},
  cartItemImages: {},
  cartInfo: {
    restaurantId: '',
    allItemsPrice: 0,
    paymentMode: 'online',
    taxes: 0,
    deliveryFee: 30,
    discount: 0,
    totalPrice: 0,
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
    updateCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
    updateCartItemImages: (state, action) => {
      state.cartItemImages = action.payload;
    },
    updateCartInfo: (state, action) => {
      if(action.payload?.allItemsPrice && state.cartInfo.allItemsPrice !== action.payload.allItemsPrice) {
        state.cartInfo.taxes = (9*action.payload.allItemsPrice)/100;
        state.cartInfo.totalPrice = state.cartInfo.taxes + state.cartInfo.discount + state.cartInfo.deliveryFee + action.payload.allItemsPrice;
      }
      state.cartInfo = {...state.cartInfo, ...action.payload};
    }
  },
});

export default customerData.reducer;

export const {
  updateRestaurantsList,
  updateRestaurantDetails,
  updateCartItems,
  updateCartItemImages,
  updateCartInfo,
} = customerData.actions;
