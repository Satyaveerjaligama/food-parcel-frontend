import { AppDispatch, RootState } from '@/store/store';
import getActiveOrdersThunk from '@/thunks/getActiveOrdersThunk';
import { getIdFromUserId } from '@/utilities/utilityFunctions';
import { Box, Card, CardContent, Divider, Grid, IconButton, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import updateOrderStatusThunk from '@/thunks/updateOrderStatusThunk';
import { ORDER_STATUS, PROMISE_STATUS } from '@/utilities/constants';
import { updateActiveOrders } from '@/store/slices/restaurantDataSlice';

const Orders = () => {
  const dispatch = useDispatch<AppDispatch>();
  const activeOrders = useSelector((state: RootState) => state.restaurantSlice.activeOrders);
  
  useEffect(()=> {
    dispatch(getActiveOrdersThunk());
  }, []);

  const changeOrderStatus = async(orderId: string, statusType: string, status: string) => {
    const response = await dispatch(updateOrderStatusThunk({
      orderId,
      statusType,
      status
    }));
    if(response?.meta?.requestStatus === PROMISE_STATUS.fulfilled) {
      switch(status) {
      case ORDER_STATUS.accepted: {
        const updatedActiveOrders = activeOrders.map(order => {
          if(order.orderId === orderId) {
            return {...order, orderStatus: ORDER_STATUS.accepted};
          }
          return order;
        });
        dispatch(updateActiveOrders(updatedActiveOrders));
        break;
      }
      case ORDER_STATUS.rejected:
        dispatch(updateActiveOrders(activeOrders.filter(order => order.orderId !== orderId )));
        break;
      }
    }
  };

  const getActiveOrders = () => {
    dispatch(getActiveOrdersThunk());
  };

  return (
    <Box className='my-5'>
      {/* <Typography variant='h4' className='text-red-500'>
            No active orders
      </Typography> */}
      <Typography variant='h5' className='text-center mb-5 underline'>
        Active/In-coming orders{''}
        <IconButton onClick={getActiveOrders}>
          <ReplayRoundedIcon />
        </IconButton>
      </Typography>
      <Grid container columnSpacing={2} rowSpacing={2}>
        {activeOrders.map((order)=>
          <Grid item xs={12} sm={4} md={3} key={order.orderId}>
            <Card>
              <CardContent>
                <Typography className='font-bold'>
                  # {getIdFromUserId(order.orderId)}
                </Typography>
                <Divider className='my-2'/>
                { order.foodItems.map((foodItem) => 
                  <Typography key={foodItem.itemId}>
                    {foodItem.itemName} - {foodItem.quantity}
                  </Typography>
                )}
                <Typography>
                  Order Value: {order.totalPrice}
                </Typography>
                {order.orderStatus === 'Processing' &&
                <Box className='flex justify-around'>
                  <IconButton onClick={()=>changeOrderStatus(order.orderId, 'orderStatus', ORDER_STATUS.accepted)}>
                    <DoneRoundedIcon />
                  </IconButton>
                  <IconButton onClick={()=>changeOrderStatus(order.orderId, 'orderStatus', ORDER_STATUS.rejected)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                }
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default Orders;