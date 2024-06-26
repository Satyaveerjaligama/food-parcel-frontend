/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from '@/components/TextField';
import { updateRestaurantDetails } from '@/store/slices/centralDataSlice';
import { RestaurantDetails } from '@/utilities/constants';
import { Box } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

interface RestaurantProps {
  restaurantDetails: RestaurantDetails;
}

const Restaurant = (props: RestaurantProps) => {
  const dispatch = useDispatch();
  const { restaurantDetails } = props;

  const onChangeHandler = (event: any, type: string) => {
    dispatch(
      updateRestaurantDetails({ ...restaurantDetails, [type]: event.target.value })
    );
  };

  return (
    <Box className="height-50vh scroll-bar overflow-y-auto py-2">
      <TextField
        label="Restaurant name"
        size="small"
        fullWidth
        className="mb-4"
        value={restaurantDetails.restaurantName}
        onChange={(event) => onChangeHandler(event, 'restaurantName')}
      />
      <TextField
        label="Restaurant type"
        size="small"
        fullWidth
        className="mb-4"
        value={restaurantDetails.restaurantType}
        onChange={(event) => onChangeHandler(event, 'restaurantType')}
      />
      <TextField
        label="Address"
        fullWidth
        size="small"
        className="mb-4"
        value={restaurantDetails.address}
        onChange={(event) => onChangeHandler(event, 'address')}
      />
      <TextField
        label="Pincode"
        fullWidth
        size="small"
        className="mb-4"
        value={restaurantDetails.pincode}
        onChange={(event) => onChangeHandler(event, 'pincode')}
      />
      <TextField
        label="Email id"
        fullWidth
        size="small"
        className="mb-4"
        value={restaurantDetails.emailId}
        onChange={(event) => onChangeHandler(event, 'emailId')}
      />
      <TextField
        label="Phone number"
        fullWidth
        size="small"
        className="mb-4"
        value={restaurantDetails.phoneNumber}
        onChange={(event) => onChangeHandler(event, 'phoneNumber')}
      />
      <TextField
        label="GST number"
        fullWidth
        size="small"
        className="mb-4"
        value={restaurantDetails.gstNumber}
        onChange={(event) => onChangeHandler(event, 'gstNumber')}
      />
      <TextField
        label="FSSAI license number"
        fullWidth
        size="small"
        className="mb-4"
        value={restaurantDetails.fssaiNumber}
        onChange={(event) => onChangeHandler(event, 'fssaiNumber')}
      />
      <TextField
        type="password"
        label="Password"
        size="small"
        fullWidth
        className="mb-4"
        value={restaurantDetails.password}
        onChange={(event) => onChangeHandler(event, 'password')}
      />
      <TextField
        type="password"
        label="Re-enter Password"
        size="small"
        fullWidth
        className="mb-4"
        value={restaurantDetails.reEnteredPassword}
        onChange={(event) => onChangeHandler(event, 'reEnteredPassword')}
      />
    </Box>
  );
};

export default Restaurant;
