import React, { useEffect } from 'react';
import { Divider } from '@mui/material';

import Orders from '@/components/pages/home/Orders';
import Menu from '@/components/pages/home/Menu';
import { AppDispatch } from '@/store/store';
import { useDispatch } from 'react-redux';
import getMenuItems from '@/thunks/getMenuItems';

const Restaurant = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getMenuItems());
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