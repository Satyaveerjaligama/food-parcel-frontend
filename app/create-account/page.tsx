/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import Button from '@/components/Button';
import {
  CustomerDetails,
  DeliveryAgentDetails,
  PRODUCT_NAME,
  RestaurantDetails,
  USER_TYPES,
  UserType,
} from '@/utilities/constants';
import { useSelector, useDispatch } from 'react-redux';
import styles from '../../styles/CreateAccount.module.css';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import Customer from '@/app/create-account/Customer';
import Restaurant from '@/app/create-account/Restaurant';
import DeliveryAgent from '@/app/create-account/DeliveryAgent';
import Link from 'next/link';
import { pacifico } from '@/utilities/fonts';
import register from '@/thunks/registerThunk';
import { AppDispatch, RootState } from '@/store/store';
import Loader from '@/components/Loader';
import { useRouter } from 'next/navigation';
import Snackbar from '@/components/Snackbar';
import UserNavigation from '@/components/UserNavigation';
import registerSchema from '@/utilities/validations/registerSchema';

export interface Errors {
  fullName: string;
  emailId: string;
  phoneNumber: string;
  address: string;
  pincode: string;
  password: string;
  reEnteredPassword: string;
}

const errorInitialState: Errors = {
  fullName: '',
  emailId: '',
  phoneNumber: '', 
  address: '',
  pincode: '',
  password: '',
  reEnteredPassword: '',
};

const CreateAccount = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [errors, setErrors] = useState<Errors>(errorInitialState);
  const userType: UserType = useSelector(
    (state: RootState) => state.centralDataSlice.userType
  );
  const customerDetails: CustomerDetails = useSelector(
    (state: RootState) => state.centralDataSlice.customerDetails
  );
  const restaurantDetails: RestaurantDetails = useSelector(
    (state: RootState) => state.centralDataSlice.restaurantDetails
  );
  const deliveryAgentDetails: DeliveryAgentDetails = useSelector(
    (state: RootState) => state.centralDataSlice.deliveryAgentDetails
  );

  const registerBtnClick = async() => {
    const isDetailsValid = await registerSchema.isValid(customerDetails);
    if (isDetailsValid) {
      setErrors(errorInitialState);
      dispatch(register({ router }));
    } else {
      try {
        await registerSchema.validate(customerDetails, { abortEarly: false });
      } catch(errors: any) {
        const formErrors: Errors = {...errorInitialState};
        errors.inner.forEach((error: any) => {
          formErrors[error.path as keyof Errors] = error.message;
        });
        setErrors(formErrors);
      }
    }
  };

  return (
    <React.Fragment>
      <Loader />
      <Snackbar />
      <Box
        className={`flex justify-center items-center h-screen ${styles.pageBackground}`}
      >
        <Card className={`${styles.createAccountCard} rounded-xl`}>
          <CardContent>
            <Typography
              className={`text-center mb-4 text-2xl ${pacifico.className}`}
            >
              {PRODUCT_NAME}
            </Typography>
            <UserNavigation />
            {userType === USER_TYPES.customer && (
              <Customer customerDetails={customerDetails} errors={errors}/>
            )}
            {userType === USER_TYPES.restaurant && (
              <Restaurant restaurantDetails={restaurantDetails} />
            )}
            {userType === USER_TYPES.deliveryAgent && (
              <DeliveryAgent deliveryAgentDetails={deliveryAgentDetails} />
            )}
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
