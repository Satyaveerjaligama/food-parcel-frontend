'use client';
import Layout from '@/components/Layout';
import FoodItemCards from './FoodItemCards';
import { Box, Grid, Typography } from '@mui/material';
import TextField from '@/components/TextField';

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
      <Grid container columnSpacing={3}>
        <Grid item md={3}>
          <TextField
            label='Coupon'
            size='medium'
            fullWidth
          />
        </Grid>
        <Grid item md={3}>
          <TextField
            label='Tip'
            size='medium'
            fullWidth
          />
        </Grid>
        <Grid item md={4}>
          {Object.keys(pricesObj).map((priceType: string) => 
            <Box className="flex justify-between" key={priceType}>
              <Typography>{priceType}</Typography>
              <Typography>&#8377; {pricesObj[priceType]}</Typography>
            </Box>
          )}
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Cart;