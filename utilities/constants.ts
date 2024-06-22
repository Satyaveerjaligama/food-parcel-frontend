export const USER_TYPES = {
  customer: 'customer',
  deliveryAgent: 'deliveryAgent',
  restaurant: 'restaurant',
};

export type UserType = (typeof USER_TYPES)[keyof typeof USER_TYPES];

export interface Credentials {
  emailId: string;
  password: string;
}

export interface CustomerDetails {
  fullName: string;
  emailId: string;
  phoneNumber: string;
  password: string;
  reEnteredPassword: string;
}

export interface RestaurantDetails {
  restaurantName: string;
  address: string;
  pincode: string;
  emailId: string;
  phoneNumber: string;
  gstNumber: string;
  fssaiNumber: string;
  password: string;
  reEnteredPassword: string;
}

export interface DeliveryAgentDetails {
  fullName: string;
  emailId: string;
  phoneNumber: string;
  aadhaarNumber: string;
  vehicleModel: string;
  vehicleNumber: string;
  address: string;
  availabilityPincode: string;
  password: string;
  reEnteredPassword: string;
}

export const API_ENDPOINTS:{[key: UserType]: string} = {
  customer: 'customer',
  restaurant: 'restaurant',
  deliveryAgent: 'delivery-agent',
};

export const PRODUCT_NAME = 'Food Parcel';

export const SNACKBAR_MESSAGES = {
  loginSuccess: 'Successfully logged in',
  failedToLogin: 'Something went wrong while logging in',
  registrationSuccess: 'Successfully Registered, Please proceed by logging in',
  failedToRegister: 'Something went wrong while registering',
};

export const SNACKBAR_STATUS = {
  success: 'success',
  warning: 'warning',
  info: 'info',
  error: 'error',
};