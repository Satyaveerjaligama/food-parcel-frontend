import { AppDispatch, RootState } from '@/store/store';
import { getIdFromUserId } from '@/utilities/utilityFunctions';
import { Box, Card, CardContent, Divider, Grid, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import updateOrderInfoThunk from '@/thunks/updateOrderInfoThunk';
import { AvailableOrders as AvailableOrdersInterface, PROMISE_STATUS } from '@/utilities/constants';
import getAvailableOrdersThunk from '@/thunks/delivery-agent/getOrdersInfoThunk';
import { updateAvailableOrders, updateCurrentOrderDetails } from '@/store/slices/deliveryAgentDataSlice';

const AvailableOrders = () => {
  const dispatch = useDispatch<AppDispatch>();
  const availableOrders = useSelector((state: RootState) => state.deliveryAgentSlice.availableOrders);
  const deliveryAgentId = useSelector((state: RootState) => state.centralDataSlice.userDetails.userId);

  const acceptOrder = async(order: AvailableOrdersInterface) => {
    const response = await dispatch(updateOrderInfoThunk({
      orderId: order.orderId,
      key: 'deliveryAgentId',
      value: deliveryAgentId
    }));
    if(response?.meta?.requestStatus === PROMISE_STATUS.fulfilled) {
      dispatch(updateAvailableOrders([]));
      dispatch(updateCurrentOrderDetails({
        orderId: order.orderId,
        pickupLocation: order.pickupLocation,
        deliveryLocation: order.deliveryLocation,
        orderStatus: order.orderStatus
      }));
    }
  };

  const getAvailableOrders = () => {
    dispatch(getAvailableOrdersThunk());
  };

  return (
    <Box className='my-5'>
      {/* <Typography variant='h4' className='text-red-500'>
            No active orders
      </Typography> */}
      <Typography variant='h5' className='text-center mb-5 underline'>
        Available orders{''}
        <IconButton onClick={getAvailableOrders}>
          <ReplayRoundedIcon />
        </IconButton>
      </Typography>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {availableOrders.map((order)=>
          <Grid item xs={12} sm={4} md={3} key={order.orderId}>
            <Card>
              <CardContent>
                <Typography className='font-bold'>
                  # {getIdFromUserId(order.orderId)}
                </Typography>
                <Divider className='my-2'/>
                <Typography>Pickup Location</Typography>
                <Typography className="text-gray-400 text-sm">{order.pickupLocation}</Typography>
                <Typography className='mt-4'>Delivery Location</Typography>
                <Typography className="text-gray-400 text-sm">{order.deliveryLocation}</Typography>
                <Box className='flex justify-center mt-4'>
                  <IconButton onClick={()=>acceptOrder(order)}>
                    <DoneRoundedIcon />
                  </IconButton>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default AvailableOrders;