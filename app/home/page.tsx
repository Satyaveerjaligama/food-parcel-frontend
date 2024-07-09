'use client';
import React from 'react';
import Layout from '@/components/Layout';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { USER_TYPES } from '@/utilities/constants';
import Customer from './Customer';
import Restaurant from './Restaurant';
import DeliveryAgent from './DeliveryAgent';
import { Typography } from '@mui/material';
import styles from '@/styles/Home.module.css';

const Home = () => {
  const userType = useSelector((state: RootState) => state.centralDataSlice.userType);
  const name = useSelector((state: RootState) => state.centralDataSlice.userDetails.name);

  return (
    <Layout>
      {userType !== USER_TYPES.customer &&
        <Typography variant='h6' className={`inline-block py-2 px-5 ${styles.userName}`}>
          Welcome, {name}
        </Typography>
      }
      {userType === USER_TYPES.customer && <Customer />}
      {userType === USER_TYPES.restaurant && <Restaurant />}
      {userType === USER_TYPES.deliveryAgent && <DeliveryAgent />}
    </Layout>
  );
};

export default Home;