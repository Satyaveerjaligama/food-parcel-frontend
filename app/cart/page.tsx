/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import Layout from '@/components/Layout';
import FoodItemCards from '@/components/pages/cart/FoodItemCards';
import { Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import TextField from '@/components/TextField';
import Button from '@/components/Button';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import styles from '../../styles/Cart.module.css';
import { camelToSentenceCase } from '@/utilities/utilityFunctions';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { CartInfo } from '@/utilities/constants';
import { useRouter } from 'next/navigation';
import routes from '@/utilities/routes';
import orderThunk from '@/thunks/order/orderThunk';
import { updateCartInfo, updateCouponCode } from '@/store/slices/customerDataSlice';

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const cartInfo = useSelector((state: RootState) => state.customerSlice.cartInfo);
  const cartItems = useSelector((state: RootState) => state.customerSlice.cartItems);
  const deliveryAddress = useSelector((state: RootState) => state.centralDataSlice.userDetails.address);
  const couponCode = useSelector((state: RootState) => state.customerSlice.couponCode);
  const [couponCodeError, setCouponCodeError] = useState('');

  const redirectToHomePage = () => {
    router.push(`/${routes.home}`);
  };

  const paymentHandler = () => {
    dispatch(orderThunk(router));
  };

  const couponCodeOnChangeHandler = (event: any) => {
    dispatch(updateCouponCode(event.target?.value));
  };

  const applyCouponCode = () => {
    if(['HUNGRY9'].includes(couponCode)) {
      if(cartInfo.totalPrice < 500) {
        setCouponCodeError('Minimum 500 is required to apply');
      } else {
        setCouponCodeError('');
        dispatch(updateCartInfo({
          discount: (9*cartInfo.totalPrice)/100
        }));
      }
    } else {
      setCouponCodeError('Enter valid coupon code');
    }
  };

  return (
    <Layout>
      {Object.keys(cartItems).length === 0 ? 
        <Box className="flex flex-col h-screen w-1/3 mx-auto items-center my-auto">
          <Typography variant='h4' className='text-red-500'>Cart is EMPTY</Typography>
          <Button 
            className='mt-3'
            label='Order Now'
            variant='contained'
            onClick={redirectToHomePage}
          />
        </Box>
        :
        <>
          <FoodItemCards cartInfo={cartInfo} cartItems={cartItems}/>
          <Divider className='my-4'/>
          <Grid container className='my-5'>
            <Grid item md={8}>
              <Box className='flex items-center'>
                <TextField
                  className={`${styles.inputFields}`}
                  label='Coupon code'
                  size='small'
                  value={couponCode}
                  onChange={(e)=>couponCodeOnChangeHandler(e)}
                  helperText={couponCodeError}
                  error={Boolean(couponCodeError)}
                />
                <Box className={`${styles.fieldButtons} ml-6`}>
                  <Button 
                    label='Apply'
                    variant='outlined'
                    onClick={applyCouponCode}
                  />
                </Box>
              </Box>
              <Card className='mr-8 mt-4'>
                <CardContent>
                  <Typography>
                    Delivery Address
                  </Typography>
                  <Typography className='text-gray-400 text-sm'>
                    {deliveryAddress}
                  </Typography>
                  <Typography className='mt-2'>
                    Payment Mode
                  </Typography>
                  <Typography className='text-gray-400 text-sm'>
                    {cartInfo.paymentMode}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item md={4}>
              {Object.keys(cartInfo).map((priceType: string) => 
                <React.Fragment key={priceType}>
                  {priceType === 'totalPrice' && <Divider className='my-2' />}
                  {typeof cartInfo[priceType as keyof CartInfo] !== 'string' &&
              <Box className="flex justify-between">
                <Typography>{camelToSentenceCase(priceType)}</Typography>
                <Typography>{priceType === 'discount' ? '-' : ''} &#8377; {cartInfo[priceType as keyof CartInfo].toLocaleString('en-IN')}</Typography>
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
                onClick={paymentHandler}
              />
            </Grid>
          </Grid>
        </>
      }
    </Layout>
  );
};

export default Cart;