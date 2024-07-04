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
  address: string;
  pincode: string;
  password: string;
  reEnteredPassword: string;
}

export interface RestaurantDetails {
  restaurantName: string;
  restaurantType: string;
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

export interface UserDetails {
  name: string;
  userId: string;
  pincode: string;
  address: string;
}

export interface ChangePasswordDetails {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export interface AccountDetailsToUpdate {
  name: string;
  emailId: string;
  phoneNumber: string;
  pincode: string;
}

export interface MenuItem {
  itemId?: string;
  name: string;
  price: number;
  isVeg: boolean;
  isAvailable: boolean;
  type: string;
  category: string;
  mainIngredients: string;
  rating?: number;
  image?: string;
}

export interface MenuItemList {
  itemId: string;
  name: string;
  price: number;
  isVeg: boolean;
  isAvailable: boolean;
  type: string;
  category: string;
  mainIngredients: string;
  rating?: number;
  image?: string;
  restaurantId: string;
}

export interface FoodItems {
  itemId: string;
  itemName: string;
  quantity: number;
  itemPrice: number;
}

export interface ActiveOrders {
  totalPrice: number;
  paymentMode: string;
  orderStatus: string;
  orderId: string;
  foodItems: FoodItems[];
}

export interface CartItems {
  [key: string] : 
    {
      itemId: string;
      itemName: string;
      quantity: number;
      itemPrice: number;
    }
}
export interface CartInfo {
  restaurantId: string;
  allItemsPrice: number;
  paymentMode: string;
  taxes: number;
  deliveryFee: number;
  discount: number;
  totalPrice: number;
}

export interface DropDownMenuItem {
  label: string | number;
  value: string | number;
}

export interface RadioGroupOptions {
  label: string | number;
  value: string | number | boolean;
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
  failedToFetchRestaurants: 'Something went wrong while getting the Restaurants information',
  menuItemAdded: 'Item added to menu successfully',
  menuItemUpdated: 'Item updated successfully',
  menuItemDeleted: 'Item deleted successfully',
  fileUploadSuccess: 'File uploaded successfully',
  fileUploadFailed: 'Failed to upload the file',
  deletionSuccess: 'Deleted successfully',
  deletionFailed: 'Deletion failed',
  passwordChangeSuccess: 'Password changed successfully',
  passwordChangeFailed: 'Failed to change the password',
  updateSuccess: 'Updated successfully',
  updateFailed: 'Failed to update',
};

export const PROMISE_STATUS = {
  fulfilled: 'fulfilled',
  rejected: 'rejected',
  pending: 'pending',
};

export const SNACKBAR_STATUS = {
  success: 'success',
  warning: 'warning',
  info: 'info',
  error: 'error',
};

export const MENU_ITEM_ACTION_TYPES = {
  add: 'POST',
  update: 'PATCH',
  delete: 'DELETE',
};

export const FILE_TYPES = {
  ...USER_TYPES,
  menuItem: 'menuItem',
};

export const MODAL_TYPES = {
  menuItem: 'Menu Item',
  fileUpload: 'File Upload',
};

export const CUISINE_TYPES: DropDownMenuItem[] = [
  {
    label: 'Indian',
    value: 'Indian'
  },
  {
    label: 'Chinese',
    value: 'Chinese'
  },
  {
    label: 'Continental',
    value: 'Continental'
  },
  {
    label: 'American',
    value: 'American'
  },
  {
    label: 'Italian',
    value: 'Italian'
  },
  {
    label: 'Japanese',
    value: 'Japanese'
  }
];

export const MENU_ITEM_CATEGORIES: DropDownMenuItem[] = [
  {
    label: 'Starter',
    value: 'Starter'
  },
  {
    label: 'Breads',
    value: 'Breads'
  },
  {
    label: 'Main Course',
    value: 'Main Course'
  },
  {
    label: 'Rice and Biryani',
    value: 'Rice and Biryani'
  },
  {
    label: 'Desserts',
    value: 'Desserts'
  },
];

export const RADIO_GRP_YES_NO: RadioGroupOptions[] = [
  {
    label: 'Yes',
    value: true
  },
  {
    label: 'No',
    value: false
  }
];