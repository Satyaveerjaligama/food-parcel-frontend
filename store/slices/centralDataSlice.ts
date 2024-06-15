import {
  USER_TYPES,
  UserType,
  Credentials,
  CustomerDetails,
  HotelDetails,
  DeliveryAgentDetails,
} from '@/utilities/constants';
import { createSlice } from '@reduxjs/toolkit';

interface CentralSliceInitialState {
  userType: UserType;
  credentials: Credentials;
  customerDetails: CustomerDetails;
  hotelDetails: HotelDetails;
  deliveryAgentDetails: DeliveryAgentDetails;
}

const initialState: CentralSliceInitialState = {
  userType: USER_TYPES.customer,
  credentials: {
    userName: '',
    password: '',
  },
  customerDetails: {
    fullName: '',
    emailId: '',
    phoneNumber: '',
    password: '',
    reEnteredPassword: '',
  },
  hotelDetails: {
    hotelName: '',
    address: '',
    pincode: '',
    emailId: '',
    phoneNumber: '',
    gstNumber: '',
    fssaiNumber: '',
    password: '',
    reEnteredPassword: '',
  },
  deliveryAgentDetails: {
    fullName: '',
    emailId: '',
    phoneNumber: '',
    aadhaarNumber: '',
    vehicleModel: '',
    vehicleNumber: '',
    address: '',
    availabilityPincode: '',
    password: '',
    reEnteredPassword: '',
  },
};

const centralSlice = createSlice({
  name: 'centralData',
  initialState: initialState,
  reducers: {
    updateUserType: (state, action) => {
      state.userType = action.payload;
    },
    updateCredentials: (state, action) => {
      state.credentials = action.payload;
    },
    updateCustomerDetails: (state, action) => {
      state.customerDetails = action.payload;
    },
    updateHotelDetails: (state, action) => {
      state.hotelDetails = action.payload;
    },
    updateDeliveryAgentDetails: (state, action) => {
      state.deliveryAgentDetails = action.payload;
    },
  },
});

export default centralSlice.reducer;

export const {
  updateUserType,
  updateCredentials,
  updateCustomerDetails,
  updateHotelDetails,
  updateDeliveryAgentDetails,
} = centralSlice.actions;
