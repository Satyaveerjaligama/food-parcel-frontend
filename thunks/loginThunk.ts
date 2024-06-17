import { setLoader } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { API_ENDPOINTS } from '@/utilities/constants';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = createAsyncThunk('login', async(_, thunkAPI: any)=>{
  const getState: RootState = thunkAPI.getState();
  const userType = getState.centralDataSlice.userType;
  const credentials = getState.centralDataSlice.credentials;

  const payload = {
    method: 'POST',
    url: `http://localhost:5000/${API_ENDPOINTS[userType]}/login`,
    data: credentials,
  };

  thunkAPI.dispatch(setLoader(true));
  await axios(payload).then((res)=>{
    console.log(res);
    // redirect to home page
  }).catch((err)=>{
    console.log(err);
  });
  thunkAPI.dispatch(setLoader(false));
});