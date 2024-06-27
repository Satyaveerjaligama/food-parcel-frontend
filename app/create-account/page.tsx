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
import {customerRegistionSchema, deliveryAgentRegistrationSchema, restaurantRegistrationSchema} from '@/utilities/validations/registerSchema';

const CreateAccount = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [errors, setErrors] = useState<any>({});
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
    let schema: any;
    let detailsToValidate;
    switch(userType) {
    case USER_TYPES.customer:
      schema = customerRegistionSchema;
      detailsToValidate = {...customerDetails};
      break;
    case USER_TYPES.restaurant:
      schema = restaurantRegistrationSchema;
      detailsToValidate = {...restaurantDetails};
      break;
    case USER_TYPES.deliveryAgent:
      schema = deliveryAgentRegistrationSchema;
      detailsToValidate = {...deliveryAgentDetails};
      break;
    }

    const isDetailsValid = await schema.isValid(detailsToValidate);
    if (isDetailsValid) {
      setErrors({});
      dispatch(register({ router }));
    } else {
      try {
        await schema.validate(detailsToValidate, { abortEarly: false });
      } catch(errors: any) {
        const formErrors: any = {};
        errors.inner.forEach((error: any) => {
          formErrors[error.path] = error.message;
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
              <Restaurant restaurantDetails={restaurantDetails} errors={errors} />
            )}
            {userType === USER_TYPES.deliveryAgent && (
              <DeliveryAgent deliveryAgentDetails={deliveryAgentDetails} errors={errors} />
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
