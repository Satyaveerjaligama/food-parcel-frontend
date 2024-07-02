import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '@/store/slices/utilitySlice';
import React from 'react';
import AddMenuItem from './AddMenuItem';
import { MenuItem } from '@/utilities/constants';
import { RootState } from '@/store/store';
import { restaurantDataInitialState, updateMenuItem } from '@/store/slices/restaurantDataSlice';

const Menu = () => {
  const dispatch = useDispatch();
  const menuItemsList: MenuItem[] = useSelector((state: RootState) => state.restaurantSlice.menuItemsList);

  const addItem = () => {
    dispatch(updateMenuItem(restaurantDataInitialState.menuItem));
    dispatch(setModal(true));
  };

  const editMenuItem = (menuItem: MenuItem) => {
    dispatch(updateMenuItem(menuItem));
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
        {menuItemsList.map((item) =>
          <Grid item xs={12} sm={4} md={3} key={item.itemId}>
            <Card>
              <CardMedia>
                <Image src='/next.svg' alt="food item image" width={200} height={200}/>
              </CardMedia>
              <CardContent className='flex justify-between items-center'>
                <Box>
                  <Typography>{item.name}</Typography>
                  <Typography className="text-gray-400 text-sm"> &#8377; {item.price}</Typography>
                </Box>
                <IconButton onClick={()=>editMenuItem(item)}>
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