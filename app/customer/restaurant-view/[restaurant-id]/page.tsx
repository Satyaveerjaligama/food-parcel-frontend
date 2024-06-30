'use client';
import Layout from '@/components/Layout';
import MenuItems from '@/components/pages/restaurant-view/MenuItems';
import { AppDispatch, RootState } from '@/store/store';
import { fetchRestaurantDetails } from '@/thunks/fetchRestaurantDetailsThunk';
import { Divider, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const RestaurantPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const restaurantDetails = useSelector((state: RootState) => state.customerSlice.restaurantDetails);

  useEffect(() => {
    const url = new URL(window.location.href);
    const splitPathname = url.pathname.split('/');
    if(splitPathname.length === 5) {
      const restaurantId = splitPathname[splitPathname.length - 1];
      dispatch(fetchRestaurantDetails(restaurantId));
    }
  }, []);

  return (
    <Layout>
      <Typography className='text-center' variant='h4'>{restaurantDetails.restaurantName}</Typography>
      <Typography className="text-gray-400 text-base text-center">{restaurantDetails?.restaurantType.join(' | ')}</Typography>
      <Divider className='my-3'/>
      <MenuItems />
    </Layout>
  );
};


export default RestaurantPage;