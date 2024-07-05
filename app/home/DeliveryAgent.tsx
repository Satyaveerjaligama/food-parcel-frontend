import Button from '@/components/Button';
import { Box, Card, CardContent, Divider, Grid, IconButton, Typography } from '@mui/material';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import CallRoundedIcon from '@mui/icons-material/CallRounded';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import getOrdersInfoThunk from '@/thunks/delivery-agent/getOrdersInfoThunk';
import AvailableOrders from '@/components/pages/home/AvailableOrders';
import { getIdFromUserId } from '@/utilities/utilityFunctions';
import { ORDER_STATUS, PROMISE_STATUS } from '@/utilities/constants';
import updateOrderInfoThunk from '@/thunks/updateOrderInfoThunk';
import { updateCurrentOrderDetails } from '@/store/slices/deliveryAgentDataSlice';

const DeliveryAgent = () => {
  const dispatch = useDispatch<AppDispatch>();
  const currentOrderDetails = useSelector((state: RootState) => state.deliveryAgentSlice.currentOrderDetails);
  const availableOrders = useSelector((state: RootState) => state.deliveryAgentSlice.availableOrders);

  useEffect(()=> {
    dispatch(getOrdersInfoThunk());
  }, []);

  const updateOrderStatus = async(status: string) => {
    const response = await dispatch(updateOrderInfoThunk({
      orderId: currentOrderDetails.orderId,
      key: 'orderStatus',
      value: status
    }));
    if(response?.meta?.requestStatus === PROMISE_STATUS.fulfilled) {
      dispatch(updateCurrentOrderDetails({
        ...currentOrderDetails,
        orderStatus: status
      }));
    }
  };

  return (
    <React.Fragment>
      {availableOrders.length > 0 && 
        <AvailableOrders />
      }
      <Grid container columnSpacing={3} rowSpacing={3} className='my-2'>
        <Grid item xs={12} sm={6} md={8}>
          <Card>
            <CardContent>
              <Typography variant='h6'>
                Current Order
              </Typography>
              <Divider className='my-2'/>
              {currentOrderDetails.orderId ?
                <React.Fragment>
                  <Typography>Order id</Typography>
                  <Typography className="text-gray-400 text-sm"># {getIdFromUserId(currentOrderDetails.orderId)}</Typography>
                  <Typography className='mt-4'>Pick up location</Typography>
                  <Box className='flex justify-between'>
                    <Typography className="text-gray-400 text-sm">{currentOrderDetails.pickupLocation}</Typography>
                    <IconButton>
                      <LocationOnRoundedIcon />
                    </IconButton>
                  </Box>
                  <Typography>Delivery location</Typography>
                  <Box className='flex justify-between'>
                    <Typography className="text-gray-400 text-sm">{currentOrderDetails.deliveryLocation}</Typography>
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
                      label='Reached Restaurant'
                      variant={currentOrderDetails.orderStatus === ORDER_STATUS.reachedPickupLocation ? 'contained' : 'outlined' }
                      onClick={()=>updateOrderStatus(ORDER_STATUS.reachedPickupLocation)}
                    />
                    <Button 
                      label='On the way'
                      variant={currentOrderDetails.orderStatus === ORDER_STATUS.onTheWay ? 'contained' : 'outlined' }
                      onClick={()=>updateOrderStatus(ORDER_STATUS.onTheWay)}
                    />
                    <Button 
                      label='Delivered'
                      variant={currentOrderDetails.orderStatus === ORDER_STATUS.delivered ? 'contained' : 'outlined' }
                      onClick={()=>updateOrderStatus(ORDER_STATUS.delivered)}
                    />
                  </Box>
                </React.Fragment>
                :
                <Typography className='text-red-500'>No current order</Typography>
              }
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
    </React.Fragment>
  );
};

export default DeliveryAgent;