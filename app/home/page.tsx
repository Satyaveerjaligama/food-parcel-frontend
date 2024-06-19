'use client';
import React from 'react';
import Snackbar from '@/components/Snackbar';
import Layout from '@/components/Layout';
import HotelCards from './HotelCards';

const Home = () => {
  return (
    <Layout>
      <Snackbar />
      <HotelCards />
    </Layout>
  );
};

export default Home;