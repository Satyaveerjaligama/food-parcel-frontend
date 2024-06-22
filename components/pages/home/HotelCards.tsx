import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material';
import Image from 'next/image';

const HotelCards = () => {
  return (
    <Grid container columnSpacing={4} rowSpacing={2} className="mb-5">
      {[1, 2, 3, 4, 5].map((hotel) => (
        <Grid item xs={12} sm={6} md={4} key={hotel}>
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
                <Typography>Hotel name</Typography>
                <Typography className="text-gray-400 text-sm">
                  Hotel type
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default HotelCards;
