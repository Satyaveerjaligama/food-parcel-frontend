import { updateActiveUserId, updateCustomerDetails } from '@/store/slices/centralDataSlice';
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { API_ENDPOINTS, SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = createAsyncThunk('login', async({router}:{router: AppRouterInstance}, thunkAPI: any)=>{
  const getState: RootState = thunkAPI.getState();
  const userType = getState.centralDataSlice.userType;
  const credentials = getState.centralDataSlice.credentials;

  const payload = {
    method: 'POST',
    url: `${process.env.API_BASE_URL}/${API_ENDPOINTS[userType]}/${process.env.LOGIN}`,
    data: credentials,
  };

  thunkAPI.dispatch(setLoader(true));
  await axios(payload).then((res)=>{
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: SNACKBAR_MESSAGES.loginSuccess,
      status: SNACKBAR_STATUS.success,
    }));
    thunkAPI.dispatch(updateCustomerDetails(res.data[0]));
    thunkAPI.dispatch(updateActiveUserId(res.data[0]));
    router.push('/home');
  }).catch((err)=>{
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: err?.response?.data?.message ?? SNACKBAR_MESSAGES.failedToLogin,
      status: SNACKBAR_STATUS.error,
    }));
  });
  thunkAPI.dispatch(setLoader(false));
});