'use client'
import React, { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box, Card, CardContent, TextField, Typography } from "@mui/material";
import Link from "next/link";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import DeliveryDiningRoundedIcon from '@mui/icons-material/DeliveryDiningRounded';
import StoreMallDirectoryRoundedIcon from '@mui/icons-material/StoreMallDirectoryRounded';
import Button from "@/components/Button";

const LoginPage = () => {
    const [value, setValue] = useState(0);

    return (
        <Box className="flex justify-center items-center h-screen">
            <Card className="rounded-xl">
                <CardContent>
                    <Typography className="text-center mb-4 text-xl font-bold">Food Parcel</Typography>
                    <BottomNavigation
                        className="mb-4"
                        showLabels
                        value={value}
                        onChange={(event, newValue) => {
                            setValue(newValue);
                        }}
                    >
                        <BottomNavigationAction label="Customer" icon={<PersonRoundedIcon />}/>
                        <BottomNavigationAction label="Hotel" icon={<StoreMallDirectoryRoundedIcon />}/>
                        <BottomNavigationAction label="Delivery Agent" icon={<DeliveryDiningRoundedIcon />}/>
                    </BottomNavigation>
                    <TextField
                        label="User name"
                        fullWidth
                        className="mb-4"
                    />
                    <TextField
                        type="password"
                        label="Password"
                        fullWidth
                        className="mb-4"
                    />
                    <Box className="flex justify-between">
                        <Typography className="text-sm self-center">Don&apos;t have an account ? <Link href="">Create</Link></Typography>
                        <Button label="Login" variant="outlined"/>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default LoginPage;