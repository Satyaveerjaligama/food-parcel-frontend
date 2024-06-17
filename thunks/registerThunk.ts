import { createAsyncThunk } from '@reduxjs/toolkit';
import {RootState} from '../store/store';
import axios from 'axios';
import { API_ENDPOINTS, CustomerDetails, DeliveryAgentDetails, HotelDetails, USER_TYPES, UserType } from '@/utilities/constants';
import { setLoader } from '@/store/slices/utilitySlice';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const register = createAsyncThunk('register', async(_, thunkAPI: any) => {
  const getState: RootState = thunkAPI.getState();
  const userType: UserType = getState.centralDataSlice.userType;
  const customerDetails: CustomerDetails = getState.centralDataSlice.customerDetails;
  const hotelDetails: HotelDetails = getState.centralDataSlice.hotelDetails;
  const deliveryAgentDetails: DeliveryAgentDetails = getState.centralDataSlice.deliveryAgentDetails;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let reqBody: any;
  switch(userType) {
  case USER_TYPES.customer:
    reqBody = customerDetails;
    break;
  case USER_TYPES.hotel:
    reqBody = hotelDetails;
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
  await axios(payload).then((res)=>{
    console.log(res);
    // redirect to login page
  }).catch((err)=>{
    console.log(err);
  });
  thunkAPI.dispatch(setLoader(false));
});

export default register;