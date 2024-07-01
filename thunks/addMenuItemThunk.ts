/* eslint-disable @typescript-eslint/no-explicit-any */
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addMenuItem = createAsyncThunk('addMenuItem', async(type: string, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const menuItem = getState.restaurantSlice.menuItem;
  const userId = getState.centralDataSlice.userDetails.userId;

  let apiRequestObject: any;
  if(type === 'add') {
    apiRequestObject = {
      method: 'POST',
      url: `${process.env.API_BASE_URL}/${process.env.ADD_MENU_ITEM}`,
      data: {...menuItem, restaurantId: userId},
    };
  } else if (type === 'update') {
    apiRequestObject = {
      method: 'PATCH',
      url: `${process.env.API_BASE_URL}/${process.env.UPDATE_MENU_ITEM}/${menuItem.itemId}`,
      data: menuItem,
    };
  } 

  try {
    thunkAPI.dispatch(setLoader(true));
    await axios(apiRequestObject);
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: type === 'add' ? SNACKBAR_MESSAGES.menuItemAdded : SNACKBAR_MESSAGES.menuItemUpdated,
      status: SNACKBAR_STATUS.success,
    }));
  } catch(err) {
    console.log('err', err);
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});