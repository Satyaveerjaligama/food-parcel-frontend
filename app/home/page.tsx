'use client';
import React from 'react';
import Snackbar from '@/components/Snackbar';
import Layout from '@/components/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { USER_TYPES } from '@/utilities/constants';
import Customer from './Customer';
import Restaurant from './Hotel';
import DeliveryAgent from './DeliveryAgent';

const Home = () => {
  const userType = useSelector((state: RootState) => state.centralDataSlice.userType);

  return (
    <Layout>
      <Snackbar />
      {userType === USER_TYPES.customer && <Customer />}
      {userType === USER_TYPES.restaurant && <Restaurant />}
      {userType === USER_TYPES.deliveryAgent && <DeliveryAgent />}
    </Layout>
  );
};

export default Home;