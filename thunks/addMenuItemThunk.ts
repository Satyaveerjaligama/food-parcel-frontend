/* eslint-disable @typescript-eslint/no-explicit-any */
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addMenuItem = createAsyncThunk('addMenuItem', async(_, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const menuItem = getState.restaurantSlice.menuItem;
  const userId = getState.centralDataSlice.userDetails.userId;

  const apiRequestObject = {
    method: 'POST',
    url: 'http://localhost:5000/restaurant/add-menu-item',
    data: {...menuItem, restaurantId: userId},
  };

  try {
    thunkAPI.dispatch(setLoader(true));
    await axios(apiRequestObject);
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: SNACKBAR_MESSAGES.menuItemAdded,
      status: SNACKBAR_STATUS.success,
    }));
  } catch(err) {
    console.log('err', err);
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});