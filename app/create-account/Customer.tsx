/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from '@/components/TextField';
import { updateCustomerDetails } from '@/store/slices/centralDataSlice';
import { CustomerDetails } from '@/utilities/constants';
import { Box } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Errors } from './page';

interface CustomerProps {
  customerDetails: CustomerDetails;
  errors: Errors;
}

const Customer = (props: CustomerProps) => {
  const dispatch = useDispatch();
  const { customerDetails, errors } = props;

  const onChangeHandler = (event: any, type: string) => {
    dispatch(
      updateCustomerDetails({ ...customerDetails, [type]: event.target.value })
    );
  };

  return (
    <Box className="height-50vh scroll-bar overflow-y-auto py-2">
      <TextField
        label="Full name"
        size="small"
        fullWidth
        className="mb-4"
        value={customerDetails.fullName}
        onChange={(event) => onChangeHandler(event, 'fullName')}
        helperText={errors.fullName ?? ''}
        error={Boolean(errors.fullName)}
      />
      <TextField
        label="Email id"
        fullWidth
        size="small"
        className="mb-4"
        value={customerDetails.emailId}
        onChange={(event) => onChangeHandler(event, 'emailId')}
        helperText={errors.emailId ?? ''}
        error={Boolean(errors.emailId)}
      />
      <TextField
        label="Phone number"
        fullWidth
        size="small"
        className="mb-4"
        value={customerDetails.phoneNumber}
        onChange={(event) => onChangeHandler(event, 'phoneNumber')}
        helperText={errors.phoneNumber ?? ''}
        error={Boolean(errors.phoneNumber)}
      />
      <TextField
        label="Address"
        fullWidth
        size="small"
        className="mb-4"
        value={customerDetails.address}
        onChange={(event) => onChangeHandler(event, 'address')}
        helperText={errors.address ?? ''}
        error={Boolean(errors.address)}
      />
      <TextField
        label="Pincode"
        fullWidth
        size="small"
        className="mb-4"
        value={customerDetails.pincode}
        onChange={(event) => onChangeHandler(event, 'pincode')}
        helperText={errors.pincode ?? ''}
        error={Boolean(errors.pincode)}
      />
      <TextField
        type="password"
        label="Password"
        size="small"
        fullWidth
        className="mb-4"
        value={customerDetails.password}
        onChange={(event) => onChangeHandler(event, 'password')}
        helperText={errors.password ?? ''}
        error={Boolean(errors.password)}
      />
      <TextField
        type="password"
        label="Re-enter Password"
        size="small"
        fullWidth
        className="mb-4"
        value={customerDetails.reEnteredPassword}
        onChange={(event) => onChangeHandler(event, 'reEnteredPassword')}
        helperText={errors.reEnteredPassword ?? ''}
        error={Boolean(errors.reEnteredPassword)}
      />
    </Box>
  );
};

export default Customer;
