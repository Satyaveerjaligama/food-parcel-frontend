/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateMenuItemsList } from '@/store/slices/restaurantDataSlice';
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getMenuItemsThunk = createAsyncThunk('getMenuItemsThunk', async(restaurantId: string, thunkAPI: any) => {

  const apiRequestData = {
    method: 'GET',
    url: `${process.env.API_BASE_URL}/${process.env.GET_MENU_ITEMS}/${restaurantId}`
  };

  try {
    thunkAPI.dispatch(setLoader(true));
    const apiRes = await axios(apiRequestData);
    if(apiRes.status === 200 && apiRes.data) {
      thunkAPI.dispatch(updateMenuItemsList(apiRes.data));
    }
  } catch(err: any) {
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: err.response?.data?.message ?? SNACKBAR_MESSAGES.failedTo('fetch menu items'),
      status: SNACKBAR_STATUS.error
    }));
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});

export default getMenuItemsThunk;