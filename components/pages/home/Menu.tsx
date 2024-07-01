import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import { useDispatch } from 'react-redux';
import { setModal } from '@/store/slices/utilitySlice';
import React from 'react';
import AddMenuItem from './AddMenuItem';

const Menu = () => {
  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(setModal(true));
  };

  return (
    <React.Fragment>
      <Grid container columnSpacing={3} rowSpacing={3} className='my-4'>
        <Grid item xs={12} sm={4} md={3}>
          <Card onClick={addItem} className='cursor-pointer'>
            <CardContent>
              <Typography>
                + Add item
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        {[1,2,3,4,5,6,7,8].map((item) =>
          <Grid item xs={12} sm={4} md={3} key={item}>
            <Card>
              <CardMedia>
                <Image src='/next.svg' alt="food item image" width={200} height={200}/>
              </CardMedia>
              <CardContent className='flex justify-between items-center'>
                <Typography>Product Name</Typography>
                <IconButton>
                  <ModeEditRoundedIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
      <AddMenuItem />
    </React.Fragment>
  );
};

export default Menu;