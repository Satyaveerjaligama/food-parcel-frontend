/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import Button from '@/components/Button';
import {
  Credentials,
  PRODUCT_NAME,
} from '@/utilities/constants';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateCredentials,
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
import UserNavigation from '@/components/UserNavigation';

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
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
            <UserNavigation />
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
