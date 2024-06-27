/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from '@/components/TextField';
import { updateDeliveryAgentDetails } from '@/store/slices/centralDataSlice';
import { DeliveryAgentDetails } from '@/utilities/constants';
import { Box } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

interface DeliveryAgentProps {
  deliveryAgentDetails: DeliveryAgentDetails;
  errors: any;
}

const DeliveryAgent = (props: DeliveryAgentProps) => {
  const dispatch = useDispatch();
  const { deliveryAgentDetails, errors } = props;

  const onChangeHandler = (event: any, type: string) => {
    dispatch(
      updateDeliveryAgentDetails({
        ...deliveryAgentDetails,
        [type]: event?.target.value,
      })
    );
  };

  return (
    <Box className="height-50vh scroll-bar overflow-y-auto py-2">
      <TextField
        label="Full name"
        size="small"
        fullWidth
        className="mb-4"
        value={deliveryAgentDetails.fullName}
        onChange={(event) => onChangeHandler(event, 'fullName')}
        helperText={errors.fullName ?? ''}
        error={Boolean(errors.fullName)}
      />
      <TextField
        label="Email Id"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.emailId}
        onChange={(event) => onChangeHandler(event, 'emailId')}
        helperText={errors.emailId ?? ''}
        error={Boolean(errors.emailId)}
      />
      <TextField
        label="Phone number"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.phoneNumber}
        onChange={(event) => onChangeHandler(event, 'phoneNumber')}
        helperText={errors.phoneNumber ?? ''}
        error={Boolean(errors.phoneNumber)}
      />
      <TextField
        label="Aadhaar number"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.aadhaarNumber}
        onChange={(event) => onChangeHandler(event, 'aadhaarNumber')}
        helperText={errors.aadhaarNumber ?? ''}
        error={Boolean(errors.aadhaarNumber)}
      />
      <TextField
        label="Vehicle model"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.vehicleModel}
        onChange={(event) => onChangeHandler(event, 'vehicleModel')}
        helperText={errors.vehicleModel ?? ''}
        error={Boolean(errors.vehicleModel)}
      />
      <TextField
        label="Vehicle number"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.vehicleNumber}
        onChange={(event) => onChangeHandler(event, 'vehicleNumber')}
        helperText={errors.vehicleNumber ?? ''}
        error={Boolean(errors.vehicleNumber)}
      />
      <TextField
        label="Address"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.address}
        onChange={(event) => onChangeHandler(event, 'address')}
        helperText={errors.address ?? ''}
        error={Boolean(errors.address)}
      />
      <TextField
        label="Pincode of delivery location"
        fullWidth
        size="small"
        className="mb-4"
        value={deliveryAgentDetails.availabilityPincode}
        onChange={(event) => onChangeHandler(event, 'availabilityPincode')}
        helperText={errors.availabilityPincode ?? ''}
        error={Boolean(errors.availabilityPincode)}
      />
      <TextField
        type="password"
        label="Password"
        size="small"
        fullWidth
        className="mb-4"
        value={deliveryAgentDetails.password}
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
        value={deliveryAgentDetails.reEnteredPassword}
        onChange={(event) => onChangeHandler(event, 'reEnteredPassword')}
        helperText={errors.reEnteredPassword ?? ''}
        error={Boolean(errors.reEnteredPassword)}
      />
    </Box>
  );
};

export default DeliveryAgent;
