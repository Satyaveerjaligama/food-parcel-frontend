/* eslint-disable @typescript-eslint/no-explicit-any */
import { openSnackbar } from '@/store/slices/utilitySlice';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface DeleteApiParams {
    type: string;
    id: string;
    router: AppRouterInstance;
}

const deleteApi = createAsyncThunk('deleteApi', async(params: DeleteApiParams,thunkAPI: any) => {
  const {type, id, router} = params;

  const requestConfig = {
    method: 'PATCH',
    url: `${process.env.API_BASE_URL}/${process.env.DELETE}/${type}/${id}`
  };

  try{
    await axios(requestConfig);
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: SNACKBAR_MESSAGES.deletionSuccess,
      status: SNACKBAR_STATUS.success
    }));
    router.push('/login');
  } catch(err) {
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: SNACKBAR_MESSAGES.deletionFailed,
      status: SNACKBAR_STATUS.error
    }));
  }
});

export default deleteApi;