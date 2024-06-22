'use client';
import Layout from '@/components/Layout';
import MenuItems from '@/components/pages/restaurant-view/MenuItems';
import { Divider, Typography } from '@mui/material';

const RestaurantPage = () => {
  return (
    <Layout>
      <Typography className='text-center' variant='h4'>Restaurant Name</Typography>
      <Typography className="text-gray-400 text-base text-center">Restaurant type</Typography>
      <Divider className='my-3'/>
      <MenuItems />
    </Layout>
  );
};


export default RestaurantPage;