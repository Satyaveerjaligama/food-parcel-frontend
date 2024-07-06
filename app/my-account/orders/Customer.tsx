/* eslint-disable @typescript-eslint/no-explicit-any */
import { convertTo12HourFormat, getIdFromUserId } from '@/utilities/utilityFunctions';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import moment from 'moment';
import React from 'react';

const Customer = (props: any) => {
  const {myOrders} = props;
  return (
    <React.Fragment>
      {myOrders.length > 0 && myOrders.map((order: any)=>
        <Grid item xs={12} sm={4} md={3} key={order.orderId}>
          <Card>
            <CardContent>
              <Typography className='font-bold'>
                    # {getIdFromUserId(order.orderId)}
              </Typography>
              <Typography 
                className={`mb-2 order-status order-${order.orderStatus}`}
              >
                {order.orderStatus}
              </Typography>
              {order.foodItems.map((item: any)=>
                <Typography className="text-gray-400 text-sm" key={item.itemId}>
                  {item.quantity} x {item.itemName}
                </Typography>
              )}
              <Box className="flex justify-between mt-2 items-center">
                <Typography className='text-gray-400 text-sm'>
                  {moment(order.date).format('DD MMM YY')}{' - '}{convertTo12HourFormat(order.time)}
                </Typography>
                <Typography>
                    &#8377; {order.totalPrice.toLocaleString('en-IN')}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      )}
    </React.Fragment>
  );
};

export default Customer;