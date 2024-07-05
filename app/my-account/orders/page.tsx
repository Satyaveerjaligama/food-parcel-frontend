'use client';
import Layout from '@/components/Layout';
import { Card, CardContent, Grid } from '@mui/material';

const Orders = () => {
  return (
    <Layout>
      <Grid container rowSpacing={2} columnSpacing={2}>
        <Grid item xs={12} sm={4} md={3}>
          <Card>
            <CardContent>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Orders;