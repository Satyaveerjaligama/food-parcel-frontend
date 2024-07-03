import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import { useDispatch, useSelector } from 'react-redux';
import { setModal } from '@/store/slices/utilitySlice';
import React from 'react';
import AddMenuItem from './AddMenuItem';
import { FILE_TYPES, MODAL_TYPES, MenuItem } from '@/utilities/constants';
import { RootState } from '@/store/store';
import { restaurantDataInitialState, updateMenuItem } from '@/store/slices/restaurantDataSlice';
import FileUpload from '@/components/FileUpload';

const Menu = () => {
  const dispatch = useDispatch();
  const menuItemsList: MenuItem[] = useSelector((state: RootState) => state.restaurantSlice.menuItemsList);
  const modal = useSelector((state: RootState) => state.utilitySlice.modal);

  const openMenuItemModal = (menuItem: MenuItem) => {
    dispatch(updateMenuItem(menuItem));
    dispatch(setModal({
      open: true,
      type: MODAL_TYPES.menuItem
    }));
  };

  return (
    <React.Fragment>
      <Grid container columnSpacing={3} rowSpacing={3} className='my-4'>
        <Grid item xs={12} sm={4} md={3}>
          <Card onClick={()=>openMenuItemModal(restaurantDataInitialState.menuItem)} className='cursor-pointer'>
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
                <Image src={`data:image/png;base64,${item.image}`} alt="food item image" width={200} height={200}/>
              </CardMedia>
              <CardContent className='flex justify-between items-center'>
                <Box>
                  <Typography>{item.name}</Typography>
                  <Typography className="text-gray-400 text-sm"> &#8377; {item.price}</Typography>
                </Box>
                <IconButton onClick={()=>openMenuItemModal(item)}>
                  <ModeEditRoundedIcon />
                </IconButton>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
      {modal.type === MODAL_TYPES.menuItem && <AddMenuItem />}
      {modal.type === MODAL_TYPES.fileUpload && <FileUpload fileType={FILE_TYPES.menuItem} title='Upload Menu Item image' />}
    </React.Fragment>
  );
};

export default Menu;