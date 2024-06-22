import Button from '@/components/Button';
import { Box, Card, CardContent, Divider, Grid, IconButton, Typography } from '@mui/material';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

const DeliveryAgent = () => {
  return (
    <Grid container columnSpacing={3} rowSpacing={3} className='my-2'>
      <Grid item xs={12} sm={6} md={8}>
        <Card>
          <CardContent>
            <Typography variant='h6'>
                Current Order
            </Typography>
            <Divider className='my-2'/>
            <Typography>Order id</Typography>
            <Typography className="text-gray-400 text-sm">#65830</Typography>
            <Typography className='mt-4'>Pick up location</Typography>
            <Box className='flex justify-between'>
              <Typography className="text-gray-400 text-sm">Restaurant address</Typography>
              <IconButton>
                <LocationOnRoundedIcon />
              </IconButton>
            </Box>
            <Typography>Delivery location</Typography>
            <Box className='flex justify-between'>
              <Typography className="text-gray-400 text-sm">Delivery address</Typography>
              <IconButton>
                <LocationOnRoundedIcon />
              </IconButton>
            </Box>
            <Box className='flex justify-between'>
              <Typography>Call Customer</Typography>
              <IconButton>
                <CallRoundedIcon />
              </IconButton>
            </Box>
            <Box className='flex justify-between'>
              <Typography>Earnings on this order</Typography>
              <Typography>10</Typography>
            </Box>
            <Box className='flex justify-between items-center mt-3'>
              <Typography>Update status</Typography>
              <Button 
                label='Reached Hotel'
                variant='outlined'
              />
              <Button 
                label='Picked up'
                variant='outlined'
              />
              <Button 
                label='Delivered'
                variant='outlined'
              />
            </Box>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardContent>
            <Typography variant='h6'>
                Earnings
            </Typography>
            <Divider className='my-2'/>
            <Box className='flex justify-between'>
              <Typography>Total orders</Typography>
              <Typography>10</Typography>
            </Box>
            <Box className='flex justify-between'>
              <Typography>Total orders</Typography>
              <Typography>10</Typography>
            </Box>
            <Box className='flex justify-between'>
              <Typography>Tip</Typography>
              <Typography>200</Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DeliveryAgent;