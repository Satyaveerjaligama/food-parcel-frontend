/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateMyOrders } from '@/store/slices/centralDataSlice';
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
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
  } catch(err: any) {
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: err.response?.data?.message ?? SNACKBAR_MESSAGES.failedTo('fetch orders'),
      status: SNACKBAR_STATUS.error
    }));
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});

export default getAllOrdersThunk;