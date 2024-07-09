'use client';
import Layout from '@/components/Layout';
import { Box, Card, CardContent, Divider, Typography } from '@mui/material';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import React from 'react';
import { camelToSentenceCase, getIdFromUserId } from '@/utilities/utilityFunctions';
import { PaymentSuccessInfo } from '@/utilities/constants';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import routes from '@/utilities/routes';

const SuccessPage = () => {
  const router = useRouter();
  const paymentSuccessInfo = useSelector((state: RootState) => state.customerSlice.paymentSuccessInfo);

  const navigateToHomePage = () => {
    router.push(`/${routes.home}`);
  };

  return (
    <Layout>
      <Box className='mb-10 sm:w-2/3 md:w-2/5 mx-auto'>
        <Card className='mb-5'>
          <CardContent>
            <Typography className='text-lg'>
            Order Confirmed
              <TaskAltIcon className='ml-2 text-lime-500'/>
            </Typography>
            <Divider className='my-2'/>
            {Object.keys(paymentSuccessInfo).map((key) =>
              <React.Fragment key={key}>
                <Typography className='mt-3'>
                  {camelToSentenceCase(key)}
                </Typography>
                <Typography className='text-gray-400'>
                  {key === 'orderId' ? '# ' + getIdFromUserId(paymentSuccessInfo[key]) : paymentSuccessInfo[key as keyof PaymentSuccessInfo] }
                </Typography>
              </React.Fragment>
            )}
          </CardContent>
        </Card>
        <Button 
          label='Go to Home page'
          variant='contained'
          fullWidth
          onClick={navigateToHomePage}
        />
      </Box>
    </Layout>
  );
};

export default SuccessPage;