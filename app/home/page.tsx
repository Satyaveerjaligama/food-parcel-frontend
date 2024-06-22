'use client';
import React from 'react';
import Snackbar from '@/components/Snackbar';
import Layout from '@/components/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { USER_TYPES } from '@/utilities/constants';
import Customer from '@/components/pages/home/Customer';
import Hotel from './Hotel';

const Home = () => {
  const userType = useSelector((state: RootState) => state.centralDataSlice.userType);

  return (
    <Layout>
      <Snackbar />
      {userType === USER_TYPES.customer && <Customer />}
      {userType === USER_TYPES.hotel && <Hotel />}
    </Layout>
  );
};

export default Home;