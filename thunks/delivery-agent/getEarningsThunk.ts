/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateEarnings } from '@/store/slices/deliveryAgentDataSlice';
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getEarningsThunk = createAsyncThunk('getEarningsThunk', async(_, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const deliveryAgentId = getState.centralDataSlice.userDetails.userId;

  const requestConfig = {
    method: 'GET',
    url: `${process.env.API_BASE_URL}/${process.env.EARNINGS}/${deliveryAgentId}`
  };

  try {
    thunkAPI.dispatch(setLoader(true));
    const response = await axios(requestConfig);
    if(response.status === 200 && response.data) {
      thunkAPI.dispatch(updateEarnings({
        totalOrders: response.data.totalOrders,
        totalEarnings: response.data.totalEarnings,
      }));
    }
  } catch(err) {
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: SNACKBAR_MESSAGES.failedToGetEarnings,
      status: SNACKBAR_STATUS.error,
    }));
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});

export default getEarningsThunk;