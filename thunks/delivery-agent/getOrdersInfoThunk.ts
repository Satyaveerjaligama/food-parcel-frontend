/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateAvailableOrders, updateCurrentOrderDetails } from '@/store/slices/deliveryAgentDataSlice';
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getOrdersInfoThunk = createAsyncThunk('getOrdersInfoThunk', async(_, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const {pincode, userId} = getState.centralDataSlice.userDetails;

  const payload = {
    userId,
    pincode
  };

  const requestConfig = {
    method: 'POST',
    url: `${process.env.API_BASE_URL}/${process.env.ORDERS_INFO}`,
    data: payload
  };

  try{
    thunkAPI.dispatch(setLoader(true));
    const response = await axios(requestConfig);
    if(response.status === 200 && response?.data) {
      if(response.data?.currentOrderDetails) {
        thunkAPI.dispatch(updateCurrentOrderDetails(response.data.currentOrderDetails));
      } else {
        thunkAPI.dispatch(updateAvailableOrders(response.data?.activeOrders));
      }
    }
  } catch(error: any) {
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: error.response?.data?.message ?? 'Something went wrong while feting active order',
      status: SNACKBAR_STATUS.error,
    }));
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});

export default getOrdersInfoThunk;