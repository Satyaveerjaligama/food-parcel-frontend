import TextField from "@/components/TextField";
import { updateCustomerDetails } from "@/store/slices/centralDataSlice";
import { CustomerDetails } from "@/utilities/constants";
import { Box } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Customer = () => {
  const dispatch = useDispatch();
  const customerDetails: CustomerDetails = useSelector(
    (state: any) => state.centralDataSlice.customerDetails
  );

  const onChangeHandler = (event: any, type: string) => {
    dispatch(
      updateCustomerDetails({ ...customerDetails, [type]: event.target.value })
    );
  };

  return (
    <Box className="height-50vh scroll-bar overflow-y-auto py-2">
      <TextField
        label="Full name"
        size="small"
        fullWidth
        className="mb-4"
        value={customerDetails.fullName}
        onChange={(event) => onChangeHandler(event, "fullName")}
      />
      <TextField
        label="Email id"
        fullWidth
        size="small"
        className="mb-4"
        value={customerDetails.emailId}
        onChange={(event) => onChangeHandler(event, "emailId")}
      />
      <TextField
        label="Phone number"
        fullWidth
        size="small"
        className="mb-4"
        value={customerDetails.phoneNumber}
        onChange={(event) => onChangeHandler(event, "phoneNumber")}
      />
      <TextField
        type="password"
        label="Password"
        size="small"
        fullWidth
        className="mb-4"
        value={customerDetails.password}
        onChange={(event) => onChangeHandler(event, "password")}
      />
      <TextField
        type="password"
        label="Re-enter Password"
        size="small"
        fullWidth
        className="mb-4"
        value={customerDetails.reEnteredPassword}
        onChange={(event) => onChangeHandler(event, "reEnteredPassword")}
      />
    </Box>
  );
};

export default Customer;
