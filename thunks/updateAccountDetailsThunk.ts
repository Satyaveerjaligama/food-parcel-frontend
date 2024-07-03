/* eslint-disable @typescript-eslint/no-explicit-any */
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const updateAccountDetailsThunk = createAsyncThunk('updateAccountDetailsThunk', async(router: AppRouterInstance,thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const userId = getState.centralDataSlice.userDetails.userId;
  const accountDetailsToUpdate = getState.centralDataSlice.accountDetailsToUpdate;
  const userType = getState.centralDataSlice.userType;

  const requestConfig = {
    method: 'PATCH',
    url: `${process.env.API_BASE_URL}/${process.env.UPDATE_ACCOUNT_DETAILS}`,
    data: {
      userId,
      ...accountDetailsToUpdate,
      type: userType
    }
  };

  try {
    thunkAPI.dispatch(setLoader(true));
    const response = await axios(requestConfig);
    if(response.status === 200) {
      thunkAPI.dispatch(openSnackbar({
        open: true,
        message: SNACKBAR_MESSAGES.updateSuccess,
        status: SNACKBAR_STATUS.success
      }));
      router.push('/my-account');
    }
  } catch(err: any) {
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: err.response?.data?.message ?? SNACKBAR_MESSAGES.updateFailed,
      status: SNACKBAR_STATUS.error
    }));
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});

export default updateAccountDetailsThunk;