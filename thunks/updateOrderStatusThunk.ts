/* eslint-disable @typescript-eslint/no-explicit-any */
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface UpdateOrderStatusProps {
    orderId: string;
    statusType: string;
    status: string;
}

const updateOrderStatusThunk = createAsyncThunk('updateOrderStatusThunk', async(props: UpdateOrderStatusProps, thunkAPI: any) => {
  const requestConfig = {
    method: 'PATCH',
    url: `${process.env.API_BASE_URL}/${process.env.UPDATE_ORDER_STATUS}`,
    data: props,
  };
    
  try {
    thunkAPI.dispatch(setLoader(true));
    await axios(requestConfig);
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: SNACKBAR_MESSAGES.updateSuccess,
      status: SNACKBAR_STATUS.success
    }));
  } catch(err) {
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: SNACKBAR_MESSAGES.updateFailed,
      status: SNACKBAR_STATUS.error
    }));
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});

export default updateOrderStatusThunk;