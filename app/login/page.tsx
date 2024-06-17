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
import Link from 'next/link';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import StoreMallDirectoryRoundedIcon from '@mui/icons-material/StoreMallDirectoryRounded';
import Button from '@/components/Button';
import {
  Credentials,
  PRODUCT_NAME,
  USER_TYPES,
  UserType,
} from '@/utilities/constants';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateCredentials,
  updateUserType,
} from '@/store/slices/centralDataSlice';
import TextField from '@/components/TextField';
import styles from '../../styles/LoginPage.module.css';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { pacifico } from '../../utilities/fonts';
import { login } from '@/thunks/loginThunk';
import { AppDispatch } from '@/store/store';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import Snackbar from '@/components/Snackbar';

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const userType: UserType = useSelector(
    (state: any) => state.centralDataSlice.userType
  );
  const credentials: Credentials = useSelector(
    (state: any) => state.centralDataSlice.credentials
  );

  const onChangeHandler = (event: any, type: string) => {
    dispatch(updateCredentials({ ...credentials, [type]: event.target.value }));
  };

  const loginBtnClick = () => {
    dispatch(login({router}));
  };

  return (
    <React.Fragment>
      <Loader />
      <Snackbar />
      <Box className={`flex justify-center items-center h-screen ${styles.pageBackground}`}>
        <Card className={`${styles.loginCard} rounded-xl`}>
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
            <TextField
              label="Email id"
              fullWidth
              className="mb-4"
              value={credentials.emailId}
              onChange={(event) => onChangeHandler(event, 'emailId')}
            />
            <TextField
              type="password"
              label="Password"
              fullWidth
              className="mb-4"
              value={credentials.password}
              onChange={(event) => onChangeHandler(event, 'password')}
            />
            <Box className="flex justify-between">
              <Typography className="text-sm self-center">
                Don&apos;t have an account ?{' '}
                <Link href="/create-account" className="underline">
                  Create
                </Link>
              </Typography>
              <Button
                label="Login"
                variant="outlined"
                endIcon={<EastRoundedIcon />}
                onClick={loginBtnClick}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </React.Fragment>
  );
};

export default LoginPage;
