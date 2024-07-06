import { CartInfo, CartItems, PaymentSuccessInfo } from '@/utilities/constants';
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
  paymentSuccessInfo: PaymentSuccessInfo;
  couponCode: string;
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
  },
  paymentSuccessInfo: {
    orderId : '',
    orderStatus: '',
    deliveryLocation: '',
    paymentMode: '',
    totalPrice: 0
  },
  couponCode: '',
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
        state.cartInfo.totalPrice = state.cartInfo.taxes - state.cartInfo.discount + state.cartInfo.deliveryFee + action.payload.allItemsPrice;
      }
      if (action.payload?.discount && state.cartInfo.discount !== action.payload.discount) {
        state.cartInfo.totalPrice = state.cartInfo.taxes + state.cartInfo.deliveryFee + state.cartInfo.allItemsPrice + state.cartInfo.discount - action.payload?.discount;
      }
      state.cartInfo = {...state.cartInfo, ...action.payload};
    },
    updatePaymentSuccessInfo: (state, action) => {
      state.paymentSuccessInfo = action.payload;
    },
    updateCouponCode: (state, action) => {
      state.couponCode = action.payload;
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
  updatePaymentSuccessInfo,
  updateCouponCode,
} = customerData.actions;
