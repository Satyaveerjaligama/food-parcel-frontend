import { Box, Grid, Typography } from '@mui/material';
import styles from '../styles/Header.module.css';
import { PRODUCT_NAME } from '@/utilities/constants';
import { pacifico } from '@/utilities/fonts';
import TextField from './TextField';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';

const Header = () => {
  return (
    <Box className={`py-4 ${styles.mainDiv}`}>
      <Grid container className="items-center px-4">
        <Grid item sm={4}>
          <Typography className={`text-2xl ${pacifico.className}`}>
            {PRODUCT_NAME}
          </Typography>
        </Grid>
        <Grid item sm={4}>
          <TextField
            size="small"
            placeholder="Search Hotel or food item"
            fullWidth
          />
        </Grid>
        <Grid item sm={4} className="text-right">
          <AccountCircleRoundedIcon className="text-4xl cursor-pointer" />
          <ShoppingCartRoundedIcon className="text-4xl ml-6 cursor-pointer" />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
