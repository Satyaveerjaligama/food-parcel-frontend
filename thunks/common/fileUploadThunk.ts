import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fileUploadThunk = createAsyncThunk('fileUploadThunk', async(formData: any, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const id: string = getState.utilitySlice.idForFileUpload;

  const apiPayload = {
    method: 'POST',
    url: `${process.env.API_BASE_URL}/${process.env.FILE_UPLOAD}/${id}`,
    data: formData
  };

  thunkAPI.dispatch(setLoader(true));
  axios(apiPayload)
    .then(()=>{
      thunkAPI.dispatch(openSnackbar({
        open: true,
        message: SNACKBAR_MESSAGES.fileUploadSuccess,
        status: SNACKBAR_STATUS.success})
      );
    }).catch((err)=>{
      thunkAPI.dispatch(openSnackbar({
        open: true,
        message: err.response?.data?.message ?? SNACKBAR_MESSAGES.failedTo('upload the file'),
        status: SNACKBAR_STATUS.error}));
    }).finally(()=>{
      thunkAPI.dispatch(setLoader(false));
    });
});