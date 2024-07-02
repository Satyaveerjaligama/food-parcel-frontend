import React, { useEffect } from 'react';
import { Divider } from '@mui/material';

import Orders from '@/components/pages/home/Orders';
import Menu from '@/components/pages/home/Menu';
import { AppDispatch, RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import getMenuItems from '@/thunks/getMenuItems';

const Restaurant = () => {
  const dispatch = useDispatch<AppDispatch>();
  const restaurantId = useSelector((state: RootState) => state.centralDataSlice.userDetails.userId);

  useEffect(() => {
    dispatch(getMenuItems(restaurantId));
  }, []);
  
  return (
    <React.Fragment>
      <Orders />
      <Divider />
      <Menu />
    </React.Fragment>
  );
};

export default Restaurant;