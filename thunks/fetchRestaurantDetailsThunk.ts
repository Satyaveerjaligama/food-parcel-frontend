import { updateRestaurantDetails } from '@/store/slices/customerDataSlice';
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRestaurantDetails = createAsyncThunk(
  'fetchRestaurantDetails',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (restaurantId: string, thunkAPI: any) => {
    const apiData = {
      method: 'GET',
      url: `http://localhost:5000/restaurant/fetchRestaurantDetails/${restaurantId}`,
    };

    thunkAPI.dispatch(setLoader(true));
    await axios(apiData)
      .then((res) => {
        console.log(res);
        thunkAPI.dispatch(updateRestaurantDetails(res.data));
      })
      .catch((err) => {
        thunkAPI.dispatch(
          openSnackbar({
            open: true,
            message:
              err?.response?.data?.message ??
              SNACKBAR_MESSAGES.failedToFetchRestaurants,
            status: SNACKBAR_STATUS.error,
          })
        );
      });
    thunkAPI.dispatch(setLoader(false));
  }
);
