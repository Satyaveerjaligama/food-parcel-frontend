/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateMyOrders } from '@/store/slices/centralDataSlice';
import { setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getAllOrdersThunk = createAsyncThunk('getAllOrdersThunk', async(_, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const userId = getState.centralDataSlice.userDetails.userId;
  const userType = getState.centralDataSlice.userType;

  const requestConfig = {
    method: 'POST',
    url: `${process.env.API_BASE_URL}/${process.env.ALL_ORDERS}`,
    data: {
      userId,
      userType
    }
  };

  try{
    thunkAPI.dispatch(setLoader(true));
    const response = await axios(requestConfig);
    if(response.status === 200 && response?.data) {
      thunkAPI.dispatch(updateMyOrders(response.data));
    }
  } catch(err) {
    console.log(err);
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});

export default getAllOrdersThunk;