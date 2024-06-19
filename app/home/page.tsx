'use client';
import React from 'react';
import Snackbar from '@/components/Snackbar';
import Layout from '@/components/Layout';
import HotelCards from './HotelCards';
import FoodTypes from './FoodTypes';

const Home = () => {
  return (
    <Layout>
      <Snackbar />
      <FoodTypes />
      <HotelCards />
    </Layout>
  );
};

export default Home;