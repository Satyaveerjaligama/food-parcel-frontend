/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import StoreMallDirectoryRoundedIcon from '@mui/icons-material/StoreMallDirectoryRounded';
import Button from '@/components/Button';
import { PRODUCT_NAME, USER_TYPES, UserType } from '@/utilities/constants';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserType } from '@/store/slices/centralDataSlice';
import styles from '../../styles/CreateAccount.module.css';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import Customer from '@/app/create-account/Customer';
import Hotel from '@/app/create-account/Hotel';
import DeliveryAgent from '@/app/create-account/DeliveryAgent';
import Link from 'next/link';
import { pacifico } from '@/utilities/fonts';
import register from '@/thunks/registerThunk';
import { AppDispatch } from '@/store/store';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import Snackbar from '@/components/Snackbar';

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
            <BottomNavigation
              className="mb-4"
              showLabels
              value={userType}
              onChange={(event, newValue) => {
                dispatch(updateUserType(newValue));
              }}
            >
              <BottomNavigationAction
                value={USER_TYPES.customer}
                label="Customer"
                icon={<PersonRoundedIcon />}
              />
              <BottomNavigationAction
                value={USER_TYPES.hotel}
                label="Hotel"
                icon={<StoreMallDirectoryRoundedIcon />}
              />
              <BottomNavigationAction
                value={USER_TYPES.deliveryAgent}
                label="Delivery Agent"
                icon={<DeliveryDiningRoundedIcon />}
              />
            </BottomNavigation>
            {userType === USER_TYPES.customer && <Customer />}
            {userType === USER_TYPES.hotel && <Hotel />}
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
