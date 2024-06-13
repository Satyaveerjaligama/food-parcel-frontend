/* eslint-disable @typescript-eslint/no-explicit-any */
import TextField from '@/components/TextField';
import { updateHotelDetails } from '@/store/slices/centralDataSlice';
import { HotelDetails } from '@/utilities/constants';
import { Box } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Hotel = () => {
  const dispatch = useDispatch();
  const hotelDetails: HotelDetails = useSelector(
    (state: any) => state.centralDataSlice.hotelDetails
  );

  const onChangeHandler = (event: any, type: string) => {
    dispatch(
      updateHotelDetails({ ...hotelDetails, [type]: event.target.value })
    );
  };

  return (
    <Box className="height-50vh scroll-bar overflow-y-auto py-2">
      <TextField
        label="Hotel name"
        size="small"
        fullWidth
        className="mb-4"
        value={hotelDetails.hotelName}
        onChange={(event) => onChangeHandler(event, 'hotelName')}
      />
      <TextField
        label="Address"
        fullWidth
        size="small"
        className="mb-4"
        value={hotelDetails.address}
        onChange={(event) => onChangeHandler(event, 'address')}
      />
      <TextField
        label="Pincode"
        fullWidth
        size="small"
        className="mb-4"
        value={hotelDetails.pincode}
        onChange={(event) => onChangeHandler(event, 'pincode')}
      />
      <TextField
        label="Email id"
        fullWidth
        size="small"
        className="mb-4"
        value={hotelDetails.emailId}
        onChange={(event) => onChangeHandler(event, 'emailId')}
      />
      <TextField
        label="Phone number"
        fullWidth
        size="small"
        className="mb-4"
        value={hotelDetails.phoneNumber}
        onChange={(event) => onChangeHandler(event, 'phoneNumber')}
      />
      <TextField
        label="GST number"
        fullWidth
        size="small"
        className="mb-4"
        value={hotelDetails.gstNumber}
        onChange={(event) => onChangeHandler(event, 'gstNumber')}
      />
      <TextField
        label="FSSAI license number"
        fullWidth
        size="small"
        className="mb-4"
        value={hotelDetails.fssaiNumber}
        onChange={(event) => onChangeHandler(event, 'fssaiNumber')}
      />
      <TextField
        type="password"
        label="Password"
        size="small"
        fullWidth
        className="mb-4"
        value={hotelDetails.password}
        onChange={(event) => onChangeHandler(event, 'password')}
      />
      <TextField
        type="password"
        label="Re-enter Password"
        size="small"
        fullWidth
        className="mb-4"
        value={hotelDetails.reEnteredPassword}
        onChange={(event) => onChangeHandler(event, 'reEnteredPassword')}
      />
    </Box>
  );
};

export default Hotel;
