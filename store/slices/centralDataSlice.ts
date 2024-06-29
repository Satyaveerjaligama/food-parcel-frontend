import {
  USER_TYPES,
  UserType,
  Credentials,
  CustomerDetails,
  RestaurantDetails,
  DeliveryAgentDetails,
} from '@/utilities/constants';
import { createSlice } from '@reduxjs/toolkit';

interface CentralSliceInitialState {
  userType: UserType;
  credentials: Credentials;
  customerDetails: CustomerDetails;
  restaurantDetails: RestaurantDetails;
  deliveryAgentDetails: DeliveryAgentDetails;
  activeUserId: string,
}

const initialState: CentralSliceInitialState = {
  userType: USER_TYPES.customer,
  credentials: {
    emailId: '',
    password: '',
  },
  customerDetails: {
    fullName: '',
    emailId: '',
    phoneNumber: '',
    address: '',
    pincode: '',
    password: '',
    reEnteredPassword: '',
  },
  restaurantDetails: {
    restaurantName: '',
    restaurantType: '',
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
  activeUserId: '',
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
    updateRestaurantDetails: (state, action) => {
      state.restaurantDetails = action.payload;
    },
    updateDeliveryAgentDetails: (state, action) => {
      state.deliveryAgentDetails = action.payload;
    },
    updateActiveUserId: (state, action) => {
      state.activeUserId = action.payload[state.userType+'Id'];
    }
  },
});

export default centralSlice.reducer;

export const {
  updateUserType,
  updateCredentials,
  updateCustomerDetails,
  updateRestaurantDetails,
  updateDeliveryAgentDetails,
  updateActiveUserId
} = centralSlice.actions;
