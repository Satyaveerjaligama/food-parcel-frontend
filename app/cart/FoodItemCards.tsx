import Button from '@/components/Button';
import { Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const FoodItemCards = () => {
  return (
    <Box className='flex flex-row flex-wrap'>
      {[1,2,3,4,5,6].map((foodItem) =>
        <Card className='shrink basis-48 mr-4 mb-4' key={foodItem}>
          <CardMedia>
            <Image src='/next.svg' alt="food item image" width={200} height={200}/>
          </CardMedia>
          <CardContent>
            <Typography>
              Product name
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              label='-'
              variant='outlined'
            />
            <Typography>
              4
            </Typography>
            <Button
              label='+'
              variant='outlined'
            />
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

export default FoodItemCards;
