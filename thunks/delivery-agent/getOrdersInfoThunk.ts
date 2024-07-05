/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateAvailableOrders, updateCurrentOrderDetails } from '@/store/slices/deliveryAgentDataSlice';
import { setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
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
    url: 'http://localhost:5000/delivery-agent/orders-info',
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
  } catch(err) {
    console.log(err);
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});

export default getOrdersInfoThunk;