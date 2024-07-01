/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateMenuItemsList } from '@/store/slices/restaurantDataSlice';
import { setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getMenuItems = createAsyncThunk('getMenuItems', async(_, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const restaurantId = getState.centralDataSlice.userDetails.userId;

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
  } catch(err) {
    console.log(err);
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});

export default getMenuItems;