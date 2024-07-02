/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateMenuItemsList } from '@/store/slices/restaurantDataSlice';
import { openSnackbar, setLoader, setModal, updateIdForFileUpload } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { MENU_ITEM_ACTION_TYPES, MODAL_TYPES, SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const addMenuItem = createAsyncThunk('addMenuItem', async(type: string, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const menuItem = getState.restaurantSlice.menuItem;
  const userId = getState.centralDataSlice.userDetails.userId;

  const requestConfig: any = {};
  switch(type) {
  case MENU_ITEM_ACTION_TYPES.add:
    requestConfig.method = MENU_ITEM_ACTION_TYPES.add;
    requestConfig.url = `${process.env.API_BASE_URL}/${process.env.MENU_ITEM}`;
    requestConfig.data = {...menuItem, restaurantId: userId};
    break;
  case MENU_ITEM_ACTION_TYPES.update:
    requestConfig.method = MENU_ITEM_ACTION_TYPES.update;
    requestConfig.url = `${process.env.API_BASE_URL}/${process.env.MENU_ITEM}/${menuItem.itemId}`;
    requestConfig.data = menuItem;
    break;
  case MENU_ITEM_ACTION_TYPES.delete:
    requestConfig.method = MENU_ITEM_ACTION_TYPES.delete;
    requestConfig.url = `${process.env.API_BASE_URL}/${process.env.MENU_ITEM}`;
    requestConfig.data = {itemId: menuItem.itemId, restaurantId: userId};
    break;
  }

  try {
    thunkAPI.dispatch(setLoader(true));
    const apiRes = await axios(requestConfig);

    let snackBarMessage;
    if(apiRes.status === 200 &&  apiRes.data && [MENU_ITEM_ACTION_TYPES.update, MENU_ITEM_ACTION_TYPES.delete].includes(type)) {
      thunkAPI.dispatch(updateMenuItemsList(apiRes.data));
      snackBarMessage = type === MENU_ITEM_ACTION_TYPES.update ? SNACKBAR_MESSAGES.menuItemUpdated : SNACKBAR_MESSAGES.menuItemDeleted;
      thunkAPI.dispatch(setModal({
        open: false,
        type: ''
      }));
    } else if (apiRes.status === 201 && apiRes.data && type === MENU_ITEM_ACTION_TYPES.add ) {
      thunkAPI.dispatch(updateMenuItemsList(apiRes.data?.allMenuItems));
      thunkAPI.dispatch(updateIdForFileUpload(apiRes.data?.addedItem?.itemId));
      thunkAPI.dispatch(setModal({
        open: true,
        type: MODAL_TYPES.fileUpload
      }));
      snackBarMessage = SNACKBAR_MESSAGES.menuItemUpdated;
    }
    
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: snackBarMessage,
      status: SNACKBAR_STATUS.success,
    }));
  } catch(err) {
    console.log('err', err);
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});