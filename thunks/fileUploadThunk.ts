import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fileUpload = createAsyncThunk('fileUpload', async(formData: any, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const activeUserId: string = getState.centralDataSlice.activeUserId;

  const apiPayload = {
    method: 'POST',
    url: `http://localhost:5000/file/upload/${activeUserId}`,
    data: formData
  };

  thunkAPI.dispatch(setLoader(true));
  axios(apiPayload)
    .then(()=>{
      thunkAPI.dispatch(openSnackbar({
        open: true,
        message: 'success',
        status: SNACKBAR_STATUS.success})
      );
    }).catch(()=>{
      thunkAPI.dispatch(openSnackbar({
        open: true,
        message: 'failed',
        status: SNACKBAR_STATUS.error}));
    });
  thunkAPI.dispatch(setLoader(false));
});