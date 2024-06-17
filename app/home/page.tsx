'use client';
import React from 'react';
import { Typography } from '@mui/material';
import Snackbar from '@/components/Snackbar';
import Layout from '@/components/Layout';

const Home = () => {
  return (
    <Layout>
      <Snackbar />
      <Typography>Sample</Typography>
    </Layout>
  );
};

export default Home;