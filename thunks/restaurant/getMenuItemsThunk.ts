/* eslint-disable @typescript-eslint/no-explicit-any */
import { updateMenuItemsList } from '@/store/slices/restaurantDataSlice';
import { setLoader } from '@/store/slices/utilitySlice';
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
  } catch(err) {
    console.log(err);
  } finally {
    thunkAPI.dispatch(setLoader(false));
  }
});

export default getMenuItemsThunk;