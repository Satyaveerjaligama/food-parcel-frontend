'use client';
import React from 'react';
import { Typography } from '@mui/material';
import Snackbar from '@/components/Snackbar';

const Home = () => {
  return (
    <React.Fragment>
      <Snackbar />
      <Typography>Sample</Typography>
    </React.Fragment>
  );
};

export default Home;