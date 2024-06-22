/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import Button from '@/components/Button';
import { PRODUCT_NAME, USER_TYPES, UserType } from '@/utilities/constants';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/CreateAccount.module.css';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import Customer from '@/app/create-account/Customer';
import Restaurant from '@/app/create-account/Restaurant';
import DeliveryAgent from '@/app/create-account/DeliveryAgent';
import Link from 'next/link';
import { pacifico } from '@/utilities/fonts';
import register from '@/thunks/registerThunk';
import { AppDispatch } from '@/store/store';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import Snackbar from '@/components/Snackbar';
import UserNavigation from '@/components/UserNavigation';

const CreateAccount = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const userType: UserType = useSelector(
    (state: any) => state.centralDataSlice.userType
  );

  const registerBtnClick = () => {
    dispatch(register({router}));
  };

  return (
    <React.Fragment>
      <Loader />
      <Snackbar />
      <Box className={`flex justify-center items-center h-screen ${styles.pageBackground}`}>
        <Card className={`${styles.createAccountCard} rounded-xl`}>
          <CardContent>
            <Typography
              className={`text-center mb-4 text-2xl ${pacifico.className}`}
            >
              {PRODUCT_NAME}
            </Typography>
            <UserNavigation />
            {userType === USER_TYPES.customer && <Customer />}
            {userType === USER_TYPES.restaurant && <Restaurant />}
            {userType === USER_TYPES.deliveryAgent && <DeliveryAgent />}
            <Box className="flex justify-between mt-3">
              <Typography className="text-sm self-center">
              Already have an account ?{' '}
                <Link href="/login" className="underline">
                Login
                </Link>
              </Typography>
              <Button
                label="Register"
                variant="outlined"
                endIcon={<EastRoundedIcon />}
                onClick={registerBtnClick}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </React.Fragment>
  );
};

export default CreateAccount;
