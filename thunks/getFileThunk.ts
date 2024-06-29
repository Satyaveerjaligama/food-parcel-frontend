/* eslint-disable @typescript-eslint/no-explicit-any */
import { openSnackbar } from '@/store/slices/utilitySlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getFile = createAsyncThunk('getFile', async(_, thunkAPI: any) => {
  const apiObj: any = {
    method: 'GET',
    url: 'http://localhost:5000/file/restaurant/restaurant_455223',
    responseType: 'arraybuffer'
  };

  try {
    const res = await axios(apiObj);
    const url = window.URL.createObjectURL(new Blob([res.data], {type: 'image/png'}));
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: 'Downloaded',
      status: 'success',
    }));
    return url;
  } catch(err) {
    console.log(err);
  }
});
