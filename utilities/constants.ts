export const USER_TYPES = {
  customer: 'customer',
  deliveryAgent: 'deliveryAgent',
  hotel: 'hotel',
};

export type UserType = (typeof USER_TYPES)[keyof typeof USER_TYPES];

export interface Credentials {
  userName: string;
  password: string;
}

export interface CustomerDetails {
  fullName: string;
  emailId: string;
  phoneNumber: string;
  password: string;
  reEnteredPassword: string;
}

export interface HotelDetails {
  hotelName: string;
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
  password: string;
  reEnteredPassword: string;
}
