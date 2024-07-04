import { RootState } from '@/store/store';
import routes from '@/utilities/routes';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';

const RestaurantCards = () => {
  const router = useRouter();
  const restaurantsList = useSelector((state: RootState) => state.customerSlice.restaurantsList);

  const hotelCardOnClickHandler = (restaurantId: string) => {
    router.push(routes.restaurantView(restaurantId));
  };

  return (
    <Grid container columnSpacing={4} rowSpacing={2} className="mb-5">
      {restaurantsList && restaurantsList.map((restaurant) => (
        <Grid item xs={12} sm={6} md={4} key={restaurant.restaurantId}>
          <Card>
            <CardActionArea className="flex justify-start" onClick={()=>hotelCardOnClickHandler(restaurant.restaurantId)}>
              <CardMedia>
                <Image
                  className='h-20 object-cover'
                  src={`data:image/png;base64,${restaurant.image}`}
                  alt="Restaurant image"
                  width={100}
                  height={100}
                />
              </CardMedia>
              <CardContent>
                <Typography>{restaurant.restaurantName}</Typography>
                <Typography className="text-gray-400 text-sm">
                  {restaurant?.restaurantType.join(' | ')}
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
