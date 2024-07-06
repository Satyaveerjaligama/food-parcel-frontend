/* eslint-disable @typescript-eslint/no-explicit-any */
import { openSnackbar } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const orderThunk = createAsyncThunk('orderThunk', async(_,thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const cartItems = getState.customerSlice.cartItems;
  const customerId = getState.centralDataSlice.userDetails.userId;
  const deliveryLocation = getState.centralDataSlice.userDetails.address;
  const pincode = getState.centralDataSlice.userDetails.pincode;
  const {totalPrice, paymentMode, restaurantId} = getState.customerSlice.cartInfo;

  const payload = {
    customerId,
    restaurantId,
    foodItems: Object.values(cartItems),
    totalPrice,
    paymentMode,
    deliveryLocation,
    pincode
  };

  const requestConfig = {
    method: 'POST',
    url: `${process.env.API_BASE_URL}/${process.env.CREATE_ORDER}`,
    data: payload,
  };

  try {
    await axios(requestConfig);
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: 'Success',
      status: SNACKBAR_STATUS.success
    }));
  } catch(err: any) {
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: 'Something went wrong',
      status: SNACKBAR_STATUS.error
    }));
  }
});

export default orderThunk;