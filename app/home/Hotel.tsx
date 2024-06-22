import React from 'react';
import { Divider } from '@mui/material';

import Orders from '@/components/pages/home/Orders';
import Menu from '@/components/pages/home/Menu';

const Restaurant = () => {
  return (
    <React.Fragment>
      <Orders />
      <Divider />
      <Menu />
    </React.Fragment>
  );
};

export default Restaurant;