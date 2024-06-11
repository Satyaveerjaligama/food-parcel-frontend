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
import Link from "next/link";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import DeliveryDiningRoundedIcon from "@mui/icons-material/DeliveryDiningRounded";
import StoreMallDirectoryRoundedIcon from "@mui/icons-material/StoreMallDirectoryRounded";
import Button from "@/components/Button";
import { USER_TYPES, UserType } from "../../utilities/constants";
import { useSelector, useDispatch } from "react-redux";
import { updateUserType } from "@/store/slices/centralDataSlice";
import TextField from "@/components/TextField";
import styles from "../../styles/LoginPage.module.css";
import EastRoundedIcon from '@mui/icons-material/EastRounded';

const LoginPage = () => {
  const userType: UserType = useSelector((state: any) => state.centralDataSlice.userType);
  const dispatch = useDispatch();

  return (
    <Box className="flex justify-center items-center h-screen">
      <Card className={`${styles.loginCard} rounded-xl`}>
        <CardContent>
          <Typography className="text-center mb-4 text-xl font-bold">
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
          <TextField label="User name" fullWidth className="mb-4" />
          <TextField
            type="password"
            label="Password"
            fullWidth
            className="mb-4"
          />
          <Box className="flex justify-between">
            <Typography className="text-sm self-center">
              Don&apos;t have an account ? <Link href="" className="underline">Create</Link>
            </Typography>
            <Button label="Login" variant="outlined" endIcon={<EastRoundedIcon />}/>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default LoginPage;
