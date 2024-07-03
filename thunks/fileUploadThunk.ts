import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fileUpload = createAsyncThunk('fileUpload', async(formData: any, thunkAPI: any) => {
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
    }).catch(()=>{
      thunkAPI.dispatch(openSnackbar({
        open: true,
        message: SNACKBAR_MESSAGES.fileUploadFailed,
        status: SNACKBAR_STATUS.error}));
    }).finally(()=>{
      thunkAPI.dispatch(setLoader(false));
    });
});