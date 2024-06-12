"use client";
import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DeliveryDiningRoundedIcon from "@mui/icons-material/DeliveryDiningRounded";
import StoreMallDirectoryRoundedIcon from "@mui/icons-material/StoreMallDirectoryRounded";
import Button from "@/components/Button";
import { USER_TYPES, UserType } from "../../utilities/constants";
import { useSelector, useDispatch } from "react-redux";
import { updateUserType } from "@/store/slices/centralDataSlice";
import styles from "../../styles/CreateAccount.module.css";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import Customer from "@/components/pages/create-account/Customer";
import Hotel from "@/components/pages/create-account/Hotel";
import DeliveryAgent from "@/components/pages/create-account/DeliveryAgent";
import Link from "next/link";
import { pacifico } from "@/utilities/fonts";

const CreateAccount = () => {
  const dispatch = useDispatch();
  const userType: UserType = useSelector(
    (state: any) => state.centralDataSlice.userType
  );

  return (
    <Box className="flex justify-center items-center h-screen">
      <Card className={`${styles.createAccountCard} rounded-xl`}>
        <CardContent>
          <Typography
            className={`text-center mb-4 text-2xl ${pacifico.className}`}
          >
            Food Parcel
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
              Already have an account ?{" "}
              <Link href="/login" className="underline">
                Login
              </Link>
            </Typography>
            <Button
              label="Create"
              variant="outlined"
              endIcon={<EastRoundedIcon />}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CreateAccount;
