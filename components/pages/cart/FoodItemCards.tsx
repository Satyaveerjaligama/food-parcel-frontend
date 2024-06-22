import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import RemoveCircleRoundedIcon from '@mui/icons-material/RemoveCircleRounded';

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
          <CardActions className='justify-end'>
            <IconButton>
              <RemoveCircleRoundedIcon />
            </IconButton>
            <Typography>
              4
            </Typography>
            <IconButton>
              <AddCircleRoundedIcon />
            </IconButton>
          </CardActions>
        </Card>
      )}
    </Box>
  );
};

export default FoodItemCards;
