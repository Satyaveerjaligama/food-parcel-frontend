import * as yup from 'yup';

const registerSchema = yup.object().shape({
  fullName: yup.string().required('Full name is required'),
  emailId: yup.string().email('Invalid Email id').required('Email id is required'),
  phoneNumber: yup.string().matches(/^[6-9][0-9]{9}$/, 'Phone number should be exactly 10 digits').required('Phone number is required'),
  address: yup.string().required('Address is required'),
  pincode: yup.string().matches(/^[0-9]{6}$/, 'Pincode should be 6 digits').required('Pincode is required'),
  password: yup.string().min(10, 'Password must be at least 6 characters').required('Password is required'),
  reEnteredPassword: yup.string().oneOf([yup.ref('password')], 'Passwords mismatch').required('Re-enter password'),
});

export default registerSchema;