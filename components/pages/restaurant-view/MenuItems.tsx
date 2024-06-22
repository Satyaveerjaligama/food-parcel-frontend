import Button from '@/components/Button';
import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';
  
const MenuItems = () => {
  return (
    <Grid container columnSpacing={4} rowSpacing={2} className="mb-5">
      {[1, 2, 3, 4, 5].map((restaurant) => (
        <Grid item xs={12} sm={6} md={4} key={restaurant}>
          <Card className="flex justify-start items-center">
            <CardMedia>
              <Image
                src="/next.svg"
                alt="sample image"
                width={100}
                height={100}
              />
            </CardMedia>
            <CardContent>
              <Typography>Menu item name</Typography>
              <Typography className="text-gray-400 text-sm">
                    rating
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
  