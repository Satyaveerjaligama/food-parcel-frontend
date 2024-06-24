import { updateRestaurantsList } from '@/store/slices/customerDataSlice';
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchRestaurants = createAsyncThunk('fetchRestaurants', async(_, thunkAPI: any)=>{
  const getState: RootState = thunkAPI.getState();
  const pincode = getState.centralDataSlice.customerDetails.pincode;

  const payload = {
    method: 'GET',
    url: `http://localhost:5000/customer/fetchRestaurants/${pincode}`,
  };

  thunkAPI.dispatch(setLoader(true));
  await axios(payload).then((res)=>{
    console.log(res);
    thunkAPI.dispatch(updateRestaurantsList(res.data));
  }).catch((err)=>{
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: err?.response?.data?.message ?? SNACKBAR_MESSAGES.failedToFetchRestaurants,
      status: SNACKBAR_STATUS.error,
    }));
  });
  thunkAPI.dispatch(setLoader(false));
});