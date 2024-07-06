/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import TextField from '@/components/TextField';
import { updateChangePasswordDetails } from '@/store/slices/centralDataSlice';
import { AppDispatch, RootState } from '@/store/store';
import changePasswordThunk from '@/thunks/common/changePasswordThunk';
import { ChangePasswordDetails } from '@/utilities/constants';
import changePasswordSchema from '@/utilities/validations/changePasswordSchema';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Errors {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const errorsInitialState : Errors = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '', 
};

const ChangePassword = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>(errorsInitialState);
  const changePasswordDetails: ChangePasswordDetails = useSelector((state: RootState) => state.centralDataSlice.changePasswordDetails);

  const onChangeHandler = (event: any, key : string) => {
    dispatch(updateChangePasswordDetails({...changePasswordDetails, [key]: event?.target?.value}));
  };

  const onSubmit = async() => {
    const isValid = await changePasswordSchema.isValid(changePasswordDetails);
    if(isValid) {
      setErrors(errorsInitialState);
      dispatch(changePasswordThunk(router));
    } else {
      try {
        await changePasswordSchema.validate(changePasswordDetails, {abortEarly: false}); 
      } catch(err: any) {
        const formattedErrors: Errors = {...errorsInitialState};
        err.inner.forEach((err: any)=>{
          formattedErrors[err.path as keyof Errors] = err.message;
        });
        setErrors(formattedErrors);
      }
    }
  };

  const onCancel = () => {
    router.back();
  };

  return (
    <Layout>
      <Box className='flex flex-col w-1/3 mx-auto h-screen'>
        <Typography variant='h5' className='text-center'>
          Change Password
        </Typography>
        <TextField 
          label='Old Password'
          type='password'
          className='mt-4'
          value={changePasswordDetails.oldPassword}
          onChange={(e)=>onChangeHandler(e, 'oldPassword')}
          helperText={errors.oldPassword}
          error={Boolean(errors.oldPassword)}
        />
        <TextField 
          label='New Password'
          type='password'
          className='mt-4'
          value={changePasswordDetails.newPassword}
          onChange={(e)=>onChangeHandler(e, 'newPassword')}
          helperText={errors.newPassword}
          error={Boolean(errors.newPassword)}
        />
        <TextField 
          label='Confirm Password'
          type='password'
          className='mt-4'
          value={changePasswordDetails.confirmPassword}
          onChange={(e)=>onChangeHandler(e, 'confirmPassword')}
          helperText={errors.confirmPassword}
          error={Boolean(errors.confirmPassword)}
        />
        <Button 
          label='Cancel'
          variant='outlined'
          className='mt-4'
          onClick={onCancel}
        />
        <Button 
          label='Submit'
          variant='contained'
          className='mt-4'
          onClick={onSubmit}
        />
      </Box>
    </Layout>
  );
};

export default ChangePassword;