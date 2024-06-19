'use client';
import Button from '@/components/Button';
import Layout from '@/components/Layout';
import { Card, Grid, Typography } from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useRouter } from 'next/navigation';

const MyAccount = () => {
  const router = useRouter();
  const logoutBtnClick = () => {
    router.push('login');
  };

  return (
    <Layout>
      <Grid container columnSpacing={2} rowSpacing={2} className='my-5 w-2/4 mx-auto'>
        <Grid item xs={12} md={6}>
          <Card className='p-4'>
            <Typography>
                Orders
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className='p-4'>
            <Typography>
                Change password
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className='p-4'>
            <Typography>
                Update account details
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<DeleteRoundedIcon />}
            label='Delete Account'
            variant='contained'
            fullWidth
            color='error'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Button
            startIcon={<LogoutRoundedIcon />}
            label='Logout'
            variant='outlined'
            fullWidth
            onClick={logoutBtnClick}
          />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default MyAccount;