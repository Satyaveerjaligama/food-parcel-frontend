import * as yup from 'yup';

export const customerRegistionSchema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  emailId: yup.string().email('Invalid Email id').required('Email id is required'),
  phoneNumber: yup.string().matches(/^[6-9][0-9]{9}$/, 'Phone number should be exactly 10 digits').required('Phone number is required'),
  address: yup.string().required('Address is required'),
  pincode: yup.string().matches(/^[0-9]{6}$/, 'Pincode should be 6 digits').required('Pincode is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  reEnteredPassword: yup.string().oneOf([yup.ref('password')], 'Passwords mismatch'),
});

export const restaurantRegistrationSchema = yup.object().shape({
  restaurantName: yup.string().required('Restaurant name is required'),
  restaurantType: yup.string().required('Restaurant type is required'),
  address: yup.string().required('Address is required'),
  pincode: yup.string().matches(/^[0-9]{6}$/, 'Pincode should have exactly 6 digits').required('Pincode is required'),
  emailId: yup.string().email('Invalid email id').required('Email id is required'),
  phoneNumber: yup.string().matches(/^[6-9][0-9]{9}$/, 'Enter valid phone number').required('Phone number is required'),
  gstNumber: yup.string().matches(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][1-9A-Z]Z[0-9A-Z]$/, 'Enter valid GST number').required('GST number is required'),
  fssaiNumber: yup.string().matches(/^[0-9]{14}$/, 'Enter valid FSSAI number').required('FSSAI number is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is reqired'),
  reEnteredPassword: yup.string().oneOf([yup.ref('password')], 'Passwords mismatch'),
});

export const deliveryAgentRegistrationSchema = yup.object().shape({
  fullName: yup.string().required('Delivery agent name is required'),
  emailId: yup.string().email('Invalid email id').required('Email id is required'),
  phoneNumber: yup.string().matches(/^[6-9][0-9]{9}$/, 'Enter valid phone number').required('Phone number is required'),
  aadhaarNumber: yup.string().matches(/^[0-9]{12}$/, 'Enter valid aadhaar number').required('Aadhaar number is required'),
  vehicleModel: yup.string().required('Vehicle model is required'),
  vehicleNumber: yup.string().matches(/^[A-Z]{2}[0-9]{2}{A-Z}{2}[0-9]{4}$/, 'Enter valid Vehicle number').required('Vehicle model is required'),
  address: yup.string().required('Address is required'),
  availabilityPincode: yup.string().matches(/^[0-9]{6}$/, 'Pincode should have exactly 6 digits').required('Pincode is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is reqired'),
  reEnteredPassword: yup.string().oneOf([yup.ref('password')], 'Passwords mismatch'),
});