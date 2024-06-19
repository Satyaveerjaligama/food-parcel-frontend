'use client';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';

const FoodTypes = () => {
  return (
    <Grid container columnSpacing={6} rowSpacing={3} className="mb-5">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((foodItem) => (
        <Grid item key={foodItem}>
          <Image
            src="/next.svg"
            width={100}
            height={100}
            alt="food item img"
            className="rounded-full h-24 bg-slate-300 cursor-pointer"
          />
          <Typography className="text-center">Food type</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default FoodTypes;
