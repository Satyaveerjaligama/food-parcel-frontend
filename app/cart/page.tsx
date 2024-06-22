'use client';
import Layout from '@/components/Layout';
import FoodItemCards from '@/components/pages/cart/FoodItemCards';
import { Box, Divider, Grid, Typography } from '@mui/material';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import styles from '../../styles/Cart.module.css';
import { camelToSentenceCase } from '@/utilities/utilityFunctions';
import React from 'react';

const Cart = () => {
  const pricesObj: {[key: string]: number} = {
    itemsPrice : 950,
    taxes: 50,
    deliveryFee: 0,
    discount: 289,
    totalPrice: 711,
  };

  return (
    <Layout>
      <FoodItemCards />
      <Grid container className='my-5'>
        <Grid item md={8}>
          <Box className='flex items-center'>
            <TextField
              className={`${styles.inputFields}`}
              label='Coupon'
              size='small'
            />
            <Box className={`${styles.fieldButtons} ml-6`}>
              <Button 
                label='Apply'
                variant='outlined'
              />
            </Box>
          </Box>
          <Box className='mt-5 flex items-center'>
            <TextField
              className={`${styles.inputFields}`}
              label='Tip'
              size='small'
            />
            <Box className={`${styles.fieldButtons} ml-6`}>
              <Button 
                label='Add'
                variant='outlined'
                startIcon={<AddRoundedIcon />}
              />
            </Box>
          </Box>
        </Grid>
        <Grid item md={4}>
          {Object.keys(pricesObj).map((priceType: string) => 
            <React.Fragment key={priceType}>
              {priceType === 'totalPrice' && <Divider className='my-2' />}
              <Box className="flex justify-between">
                <Typography>{camelToSentenceCase(priceType)}</Typography>
                <Typography>&#8377; {pricesObj[priceType]}</Typography>
              </Box>
            </React.Fragment>
          )}
          <Button 
            className='mt-6'
            label='Proceed for Payment'
            variant='contained'
            fullWidth
            endIcon={<EastRoundedIcon />}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Cart;