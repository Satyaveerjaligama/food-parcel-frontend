import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';

const RestaurantCards = () => {
  return (
    <Grid container columnSpacing={4} rowSpacing={2} className="mb-5">
      {[1, 2, 3, 4, 5].map((restaurant) => (
        <Grid item xs={12} sm={6} md={4} key={restaurant}>
          <Card>
            <CardActionArea className="flex justify-start">
              <CardMedia>
                <Image
                  src="/next.svg"
                  alt="sample image"
                  width={100}
                  height={100}
                />
              </CardMedia>
              <CardContent>
                <Typography>Restaurant name</Typography>
                <Typography className="text-gray-400 text-sm">
                  Restaurant type
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RestaurantCards;
