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
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { CartInfo } from '@/utilities/constants';
import { useRouter } from 'next/navigation';
import routes from '@/utilities/routes';

const Cart = () => {
  const router = useRouter();
  const cartInfo = useSelector((state: RootState) => state.customerSlice.cartInfo);
  const cartItems = useSelector((state: RootState) => state.customerSlice.cartItems);

  const redirectToHomePage = () => {
    router.push(`/${routes.home}`);
  };

  return (
    <Layout>
      {Object.keys(cartItems).length === 0 ? 
        <Box className="flex flex-col h-screen w-1/3 mx-auto items-center my-auto">
          <Typography variant='h4' className='text-red-500'>Cart is EMPTY</Typography>
          <Button 
            label='Order Now'
            variant='contained'
            onClick={redirectToHomePage}
          />
        </Box>
        :
        <>
          <FoodItemCards />
          <Divider className='my-4'/>
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
              {Object.keys(cartInfo).map((priceType: string) => 
                <React.Fragment key={priceType}>
                  {priceType === 'totalPrice' && <Divider className='my-2' />}
                  {typeof cartInfo[priceType as keyof CartInfo] !== 'string' &&
              <Box className="flex justify-between">
                <Typography>{camelToSentenceCase(priceType)}</Typography>
                <Typography>&#8377; {cartInfo[priceType as keyof CartInfo].toLocaleString('en-IN')}</Typography>
              </Box>
                  }
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
        </>
      }
    </Layout>
  );
};

export default Cart;