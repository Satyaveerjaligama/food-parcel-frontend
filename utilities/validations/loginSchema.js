import * as yup from 'yup';

const loginSchema = yup.object().shape({
  emailId: yup.string().email('Provide a valid Email id').required('Email id is required'),
  password: yup.string().required('Password is required'),
});

export default loginSchema;