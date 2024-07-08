/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Layout from '@/components/Layout';
import { AppDispatch, RootState } from '@/store/store';
import getAllOrdersThunk from '@/thunks/common/getAllOrdersThunk';
import { Grid, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Customer from './Customer';
import Restaurant from './Restaurant';
import { USER_TYPES } from '@/utilities/constants';
import DeliveryAgent from './DeliveryAgent';

const Orders = () => {
  const dispatch = useDispatch<AppDispatch>();
  const myOrders = useSelector((state: RootState) => state.centralDataSlice.myOrders);
  const userType = useSelector((state: RootState) => state.centralDataSlice.userType);

  useEffect(()=>{
    dispatch(getAllOrdersThunk());
  }, []);

  return (
    <Layout>
      <Typography variant='h5' className='underline'>My orders</Typography>
      <Grid container rowSpacing={3} columnSpacing={3} className='mb-10 mt-1'>
        {userType === USER_TYPES.customer && <Customer myOrders={myOrders}/>}
        {userType === USER_TYPES.restaurant && <Restaurant myOrders={myOrders}/>}
        {userType === USER_TYPES.deliveryAgent && <DeliveryAgent myOrders={myOrders}/>}
      </Grid>
    </Layout>
  );
};

export default Orders;