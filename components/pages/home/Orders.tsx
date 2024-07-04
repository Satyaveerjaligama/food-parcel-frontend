import { Box, Typography } from '@mui/material';

const Orders = () => {
  return (
    <Box className='my-5 flex justify-center items-center'>
      <Typography variant='h4' className='text-red-500'>
            No active orders
      </Typography>
    </Box>
  );
};

export default Orders;