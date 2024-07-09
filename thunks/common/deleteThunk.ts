/* eslint-disable @typescript-eslint/no-explicit-any */
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import routes from '@/utilities/routes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

interface DeleteApiParams {
    type: string;
    id: string;
    router: AppRouterInstance;
}

const deleteThunk = createAsyncThunk('deleteThunk', async(params: DeleteApiParams,thunkAPI: any) => {
  const {type, id, router} = params;

  const requestConfig = {
    method: 'PATCH',
    url: `${process.env.API_BASE_URL}/${process.env.DELETE}/${type}/${id}`
  };

  try{
    thunkAPI.dispatch(setLoader(true));
    await axios(requestConfig);
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: SNACKBAR_MESSAGES.deletionSuccess,
      status: SNACKBAR_STATUS.success
    }));
    router.push(`/${routes.login}`);
  } catch(err: any) {
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: err.response?.data?.message ?? SNACKBAR_MESSAGES.deletionFailed,
      status: SNACKBAR_STATUS.error
    }));
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});

export default deleteThunk;