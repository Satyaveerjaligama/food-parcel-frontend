import * as yup from 'yup';

const changePasswordSchema = yup.object().shape({
  oldPassword: yup.string().min(6, 'Password must be 6 characters').required('Enter old password'),
  newPassword: yup.string().min(6, 'Password must be 6 characters').required('Enter new password'),
  confirmPassword: yup.string().oneOf([yup.ref('newPassword')], 'Passwords mismatch'),
});

export default changePasswordSchema;