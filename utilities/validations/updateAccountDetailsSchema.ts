import * as yup from 'yup';

const updateAccountDetailsSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  emailId: yup.string().email('Invalid email id').required('Email id is required'),
  phoneNumber: yup.string().matches(/^[6-9][0-9]{9}$/, 'Enter valid phone number').required('Phone number is required'),
  pincode: yup.string().matches(/^[0-9]{6}$/, 'Pincode should have exactly 6 digits').required('Pincode is required'),
});

export default updateAccountDetailsSchema;