import FoodTypes from '@/components/pages/home/FoodTypes';
import RestaurantCards from '@/components/pages/home/RestaurantCards';
import { AppDispatch, RootState } from '@/store/store';
import { fetchRestaurantsThunk } from '@/thunks/restaurant/fetchRestaurantsThunk';
import { Divider } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Customer = () => {
  const dispatch = useDispatch<AppDispatch>();
  const pincode = useSelector((state: RootState) => state.centralDataSlice.userDetails.pincode);

  useEffect(()=>{
    dispatch(fetchRestaurantsThunk());
  },[pincode]);

  return (
    <React.Fragment>
      <FoodTypes />
      <Divider className='my-5'/>
      <RestaurantCards />
    </React.Fragment>
  );
};

export default Customer;