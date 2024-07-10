import { AppDispatch, RootState } from '@/store/store';
import { getIdFromUserId } from '@/utilities/utilityFunctions';
import { Box, Card, CardContent, Divider, Grid, IconButton, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import updateOrderInfoThunk from '@/thunks/order/updateOrderInfoThunk';
import { AvailableOrders as AvailableOrdersInterface, PROMISE_STATUS, SNACKBAR_MESSAGES, SNACKBAR_STATUS } from '@/utilities/constants';
import getAvailableOrdersThunk from '@/thunks/delivery-agent/getOrdersInfoThunk';
import { updateAvailableOrders, updateCurrentOrderDetails } from '@/store/slices/deliveryAgentDataSlice';
import { openSnackbar } from '@/store/slices/utilitySlice';

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
      dispatch(openSnackbar({
        open: true,
        message: SNACKBAR_MESSAGES.orderAccepted,
        status: SNACKBAR_STATUS.success,
      }));
      dispatch(updateAvailableOrders([]));
      dispatch(updateCurrentOrderDetails({
        orderId: order.orderId,
        pickupLocation: order.pickupLocation,
        deliveryLocation: order.deliveryLocation,
        orderStatus: order.orderStatus
      }));
    }
  };

  const getAvailableOrders = async() => {
    const response = await dispatch(getAvailableOrdersThunk());
    if(response?.meta?.requestStatus === PROMISE_STATUS.fulfilled) {
      dispatch(openSnackbar({
        open: true,
        message: SNACKBAR_MESSAGES.fetchedOrders('available'),
        status: SNACKBAR_STATUS.success
      }));
    }
  };

  return (
    <Box className='my-5'>
      <Typography variant='h5' className='text-center mb-5 underline'>
        Available orders{''}
        <IconButton onClick={getAvailableOrders}>
          <ReplayRoundedIcon />
        </IconButton>
      </Typography>
      {availableOrders?.length === 0 &&
      <Typography variant='h6' className='text-center mb-4 text-red-500'>
        No orders to display
      </Typography>
      }
      <Grid container columnSpacing={2} rowSpacing={2}>
        {availableOrders.map((order)=>
          <Grid item xs={12} sm={4} md={3} key={order.orderId}>
            <Card className='h-full'>
              <CardContent className='flex flex-col h-full justify-between'>
                <Box>
                  <Typography className='font-bold'>
                    # {getIdFromUserId(order.orderId)}
                  </Typography>
                  <Divider className='my-2'/>
                  <Typography>Pickup Location</Typography>
                  <Typography className="text-gray-400 text-sm">{order.pickupLocation}</Typography>
                  <Typography className='mt-4'>Delivery Location</Typography>
                  <Typography className="text-gray-400 text-sm">{order.deliveryLocation}</Typography>
                </Box>
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