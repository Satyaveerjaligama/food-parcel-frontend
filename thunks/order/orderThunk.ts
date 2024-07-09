/* eslint-disable @typescript-eslint/no-explicit-any */
import { updatePaymentSuccessInfo } from '@/store/slices/customerDataSlice';
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import routes from '@/utilities/routes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const orderThunk = createAsyncThunk('orderThunk', async(router: AppRouterInstance,thunkAPI: any) => {
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
    thunkAPI.dispatch(setLoader(true));
    const response = await axios(requestConfig);
    if(response.status === 201 && response?.data) {
      thunkAPI.dispatch(updatePaymentSuccessInfo({
        orderId: response.data?.orderId,
        orderStatus: response.data?.orderStatus,
        deliveryLocation: response.data?.deliveryLocation,
        paymentMode: response.data?.paymentMode,
        totalPrice: response.data?.totalPrice
      }));
      router.push(routes.paymentSuccess);
    }
  } catch(err: any) {
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: err.response?.data?.message ?? SNACKBAR_MESSAGES.failedTo('order'),
      status: SNACKBAR_STATUS.error
    }));
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});

export default orderThunk;