import { createAsyncThunk } from '@reduxjs/toolkit';
import {RootState} from '../store/store';
import axios from 'axios';
import { API_ENDPOINTS, CustomerDetails, DeliveryAgentDetails, RestaurantDetails, SNACKBAR_MESSAGES, SNACKBAR_STATUS, USER_TYPES, UserType } from '@/utilities/constants';
import { openSnackbar, setLoader } from '@/store/slices/utilitySlice';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const register = createAsyncThunk('register', async({router}: {router: AppRouterInstance}, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const userType: UserType = getState.centralDataSlice.userType;
  const customerDetails: CustomerDetails = getState.centralDataSlice.customerDetails;
  const restaurantDetails: RestaurantDetails = getState.centralDataSlice.restaurantDetails;
  const deliveryAgentDetails: DeliveryAgentDetails = getState.centralDataSlice.deliveryAgentDetails;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let reqBody: any;
  switch(userType) {
  case USER_TYPES.customer:
    reqBody = customerDetails;
    break;
  case USER_TYPES.restaurant:
    reqBody = {...restaurantDetails, restaurantType: restaurantDetails.restaurantType.split(',')};
    break;
  case USER_TYPES.deliveryAgent:
    reqBody = deliveryAgentDetails;
    break;
  }

  const payload = {
    method: 'POST',
    url: `http://localhost:5000/${API_ENDPOINTS[userType]}/register`,
    data: reqBody
  };
  
  thunkAPI.dispatch(setLoader(true));
  await axios(payload).then(()=>{
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: SNACKBAR_MESSAGES.registrationSuccess,
      status: SNACKBAR_STATUS.success,
    }));
    router.push('/login');
  }).catch((err)=>{
    thunkAPI.dispatch(openSnackbar({
      open: true,
      message: err?.response?.data?.message ?? SNACKBAR_MESSAGES.failedToRegister,
      status: SNACKBAR_STATUS.error,
    }));
  });
  thunkAPI.dispatch(setLoader(false));
});

export default register;