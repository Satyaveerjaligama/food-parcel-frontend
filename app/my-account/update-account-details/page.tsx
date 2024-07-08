/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import TextField from '@/components/TextField';
import { updateAccountDetails } from '@/store/slices/centralDataSlice';
import { AppDispatch, RootState } from '@/store/store';
import updateAccountDetailsThunk from '@/thunks/common/updateAccountDetailsThunk';
import { AccountDetailsToUpdate } from '@/utilities/constants';
import updateAccountDetailsSchema from '@/utilities/validations/updateAccountDetailsSchema';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface Errors {
  name: string;
  emailId: string;
  phoneNumber: string;
  pincode: string;
}

const errorsInitialState : Errors = {
  name: '',
  emailId: '',
  phoneNumber: '',
  pincode: '',
};

const UpdateAccountDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const [errors, setErrors] = useState<Errors>(errorsInitialState);
  const accountDetailsToUpdate: AccountDetailsToUpdate = useSelector((state: RootState) => state.centralDataSlice.accountDetailsToUpdate);

  const onChangeHandler = (event: any, key : string) => {
    dispatch(updateAccountDetails({...accountDetailsToUpdate, [key]: event?.target?.value}));
  };

  const onSubmit = async() => {
    const isValid = await updateAccountDetailsSchema.isValid(accountDetailsToUpdate);
    if(isValid) {
      setErrors(errorsInitialState);
      dispatch(updateAccountDetailsThunk(router));
    } else {
      try {
        await updateAccountDetailsSchema.validate(accountDetailsToUpdate, {abortEarly: false}); 
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
        <Typography variant='h5' className='text-center underline'>
          Update details
        </Typography>
        <TextField 
          label='Name'
          className='mt-4'
          value={accountDetailsToUpdate.name}
          onChange={(e)=>onChangeHandler(e, 'name')}
          helperText={errors.name}
          error={Boolean(errors.name)}
        />
        <TextField 
          label='Email id'
          className='mt-4'
          value={accountDetailsToUpdate.emailId}
          onChange={(e)=>onChangeHandler(e, 'emailId')}
          helperText={errors.emailId}
          error={Boolean(errors.emailId)}
        />
        <TextField 
          label='Phone number'
          className='mt-4'
          value={accountDetailsToUpdate.phoneNumber}
          onChange={(e)=>onChangeHandler(e, 'phoneNumber')}
          helperText={errors.phoneNumber}
          error={Boolean(errors.phoneNumber)}
        />
        <TextField 
          label='Pincode'
          className='mt-4'
          value={accountDetailsToUpdate.pincode}
          onChange={(e)=>onChangeHandler(e, 'pincode')}
          helperText={errors.pincode}
          error={Boolean(errors.pincode)}
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

export default UpdateAccountDetails;