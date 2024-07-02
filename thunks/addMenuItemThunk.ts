/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateMenuItemsList } from '@/store/slices/restaurantDataSlice';
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { MENU_ITEM_ACTION_TYPES, SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addMenuItem = createAsyncThunk('addMenuItem', async(type: string, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const menuItem = getState.restaurantSlice.menuItem;
  const userId = getState.centralDataSlice.userDetails.userId;

  let apiRequestObject: any;
  if(type === MENU_ITEM_ACTION_TYPES.add) {
    apiRequestObject = {
      method: 'POST',
      url: `${process.env.API_BASE_URL}/${process.env.ADD_MENU_ITEM}`,
      data: {...menuItem, restaurantId: userId},
    };
  } else if (type === MENU_ITEM_ACTION_TYPES.update) {
    apiRequestObject = {
      method: 'PATCH',
      url: `${process.env.API_BASE_URL}/${process.env.UPDATE_MENU_ITEM}/${menuItem.itemId}`,
      data: menuItem,
    };
  } 

  try {
    thunkAPI.dispatch(setLoader(true));
    const apiRes = await axios(apiRequestObject);
    if(type === MENU_ITEM_ACTION_TYPES.update && apiRes.status === 200 && apiRes.data) {
      thunkAPI.dispatch(updateMenuItemsList(apiRes.data));
    } else if (type === MENU_ITEM_ACTION_TYPES.add && apiRes.status === 201 && apiRes.data) {
      thunkAPI.dispatch(updateMenuItemsList(apiRes.data.allMenuItems));
    }
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: type === MENU_ITEM_ACTION_TYPES.add ? SNACKBAR_MESSAGES.menuItemAdded : SNACKBAR_MESSAGES.menuItemUpdated,
      status: SNACKBAR_STATUS.success,
    }));
  } catch(err) {
    console.log('err', err);
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});