import { Box, Grid, IconButton, Typography } from '@mui/material';
import styles from '../styles/Header.module.css';
import { PRODUCT_NAME } from '@/utilities/constants';
import { pacifico } from '@/utilities/fonts';
import TextField from './TextField';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  
  const iconBtnClickHandler = (type: string) => {
    router.push(type);
  };

  return (
    <Box className={`py-4 ${styles.mainDiv}`}>
      <Grid container className="items-center px-4">
        <Grid item sm={4}>
          <Typography className={`text-2xl cursor-pointer ${pacifico.className}`} onClick={()=>iconBtnClickHandler('home')}>
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
          <IconButton onClick={()=>iconBtnClickHandler('my-account')}>
            <AccountCircleRoundedIcon className="text-black text-4xl cursor-pointer" />
          </IconButton>
          <IconButton className='ml-6' onClick={()=>iconBtnClickHandler('cart')}>
            <ShoppingCartRoundedIcon className="text-black text-4xl cursor-pointer" />
          </IconButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Header;
