import { Box, Button, Card, CardContent, TextField, Typography } from "@mui/material";
import Link from "next/link";

const LoginPage = () => {
    return (
        <Box className="flex justify-center items-center h-screen">
            <Card className="rounded-xl">
                <CardContent>
                    <Typography className="text-center mb-4 text-xl font-bold">Food Parcel</Typography>
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
                        <Button variant="outlined">Login</Button>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default LoginPage;