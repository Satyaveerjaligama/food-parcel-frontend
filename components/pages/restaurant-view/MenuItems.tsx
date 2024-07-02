import Button from '@/components/Button';
import { RootState } from '@/store/store';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useSelector } from 'react-redux';
  
const MenuItems = () => {
  const menuItemsList = useSelector((state: RootState) => state.restaurantSlice.menuItemsList);

  return (
    <Grid container columnSpacing={4} rowSpacing={2} className="mb-5">
      {menuItemsList.map((menuItem) => (
        <Grid item xs={12} sm={6} md={4} key={menuItem.itemId}>
          <Card className="flex justify-start items-center">
            <CardMedia>
              <Image
                src={`data:image/png;base64,${menuItem.image}`}
                alt="sample image"
                width={100}
                height={100}
              />
            </CardMedia>
            <CardContent>
              <Typography>{menuItem.name}</Typography>
              <Typography className="text-gray-400 text-sm">
                {menuItem.rating}
              </Typography>
              <Button 
                label='Add'
                variant='outlined'
                fullWidth
              />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
  
export default MenuItems;
  