/* eslint-disable @typescript-eslint/no-explicit-any */
import { ORDER_STATUS } from '@/utilities/constants';
import { convertTo12HourFormat, getIdFromUserId } from '@/utilities/utilityFunctions';
import { Grid, Card, CardContent, Typography, Box, CardActionArea } from '@mui/material';
import moment from 'moment';
import React from 'react';

const DeliveryAgent = (props: any) => {
  const {myOrders} = props;
  return (
    <React.Fragment>
      {myOrders.length > 0 && myOrders.map((order: any)=>
        <Grid item xs={12} sm={4} md={3} key={order.orderId}>
          <Card>
            <CardActionArea>
              <CardContent>
                <Typography className='font-bold'>
                    # {getIdFromUserId(order.orderId)}
                </Typography>
                <Typography 
                  className={`mb-2 order-status order-${order.orderStatus}`}
                >
                  {order.orderStatus === ORDER_STATUS.delivered ? ORDER_STATUS.delivered : 'Current order'}
                </Typography>
                <Typography className='text-sm'>Pickup Location</Typography>
                <Typography className='text-gray-400 text-sm'>{order.pickupLocation}</Typography>
                <Typography className='mt-2 text-sm'>Delivery Location</Typography>
                <Typography className='text-gray-400 text-sm'>{order.deliveryLocation}</Typography>
                <Box className="flex justify-between mt-2 items-center">
                  <Typography className='text-gray-400 text-sm'>
                    {moment(order.date).format('DD MMM YY')}{' - '}{convertTo12HourFormat(order.time)}
                  </Typography>
                  <Typography>
                    &#8377; {order.totalPrice.toLocaleString('en-IN')}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default DeliveryAgent;