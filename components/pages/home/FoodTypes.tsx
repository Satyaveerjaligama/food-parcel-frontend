'use client';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import iceCream from '@/assets/images/iceCream.jpg';
import biryani from '@/assets/images/biryani.jpeg';
import pizza from '@/assets/images/pizza.jpeg';
import burger from '@/assets/images/burger.jpeg';
import cake from '@/assets/images/cake.jpeg';
import rolls from '@/assets/images/rolls.jpeg';
import fries from '@/assets/images/fries.jpeg';
import noodles from '@/assets/images/noodles.jpeg';
import manchurian from '@/assets/images/manchurian.jpeg';
import dosa from '@/assets/images/dosa.jpeg';
import idli from '@/assets/images/idli.jpeg';
import waffles from '@/assets/images/waffles.jpeg';
import styles from '@/styles/Home.module.css';

const FoodTypes = () => {

  const foodTypesList = [
    {
      type: 'Biryani',
      image: biryani,
    },
    {
      type: 'Pizzas',
      image: pizza,
    },
    {
      type: 'Burgers',
      image: burger,
    },
    {
      type: 'Rolls',
      image: rolls,
    },
    {
      type: 'Noodles',
      image: noodles,
    },
    {
      type: 'Manchurian',
      image: manchurian,
    },
    {
      type: 'Dosa',
      image: dosa,
    },
    {
      type: 'Idli',
      image: idli,
    },
    {
      type: 'Fries',
      image: fries,
    },
    {
      type: 'Ice-cream',
      image: iceCream
    },
    {
      type: 'Cakes',
      image: cake,
    },
    {
      type: 'Waffles',
      image: waffles,
    },
  ];
  
  return (
    <Grid container columnGap={0} rowSpacing={3} className={`mb-5 pb-9 ${styles.foodTypesGrid}`}>
      {foodTypesList.map((foodType) => (
        <Grid item xs={6} sm={3} md={2} key={foodType.type} className='flex flex-col items-center'>
          <Image
            src={foodType.image}
            width={100}
            height={100}
            alt="food item img"
            className="rounded-full h-24 bg-slate-300 cursor-pointer object-cover"
          />
          <Typography className="text-center mt-1">{foodType.type}</Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default FoodTypes;
