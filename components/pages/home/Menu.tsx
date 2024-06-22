import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';

const Menu = () => {
  return (
    <Grid container columnSpacing={3} rowSpacing={3} className='my-4'>
      <Grid item xs={12} sm={4} md={3}>
        <Card>
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
  );
};

export default Menu;