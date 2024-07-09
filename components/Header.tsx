import { Box, Grid, IconButton, Typography, useMediaQuery } from '@mui/material';
import styles from '../styles/Header.module.css';
import { useTheme } from '@mui/material/styles';
import { PRODUCT_NAME, USER_TYPES } from '@/utilities/constants';
import { pacifico } from '@/utilities/fonts';
import TextField from './TextField';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import routes from '@/utilities/routes';

const Header = () => {
  const router = useRouter();
  const userType = useSelector((state: RootState) => state.centralDataSlice.userType);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  
  const iconBtnClickHandler = (type: string) => {
    router.push(type);
  };

  const accountAndCartIcons = () => {
    return (
      <>
        <IconButton onClick={()=>iconBtnClickHandler(`/${routes.myAccount}`)}>
          <AccountCircleRoundedIcon className="text-black text-4xl cursor-pointer" />
        </IconButton>
        {userType === USER_TYPES.customer && 
          <IconButton className='ml-6' onClick={()=>iconBtnClickHandler(`/${routes.cart}`)}>
            <ShoppingCartRoundedIcon className="text-black text-4xl cursor-pointer" />
          </IconButton>
        }
      </>
    );
  };

  return (
    <Box className={`py-4 ${styles.mainDiv}`}>
      <Grid container className="items-center px-4" rowSpacing={1}>
        <Grid item xs={6} sm={4}>
          <Typography className={`text-2xl cursor-pointer ${pacifico.className}`} onClick={()=>iconBtnClickHandler(`/${routes.home}`)}>
            {PRODUCT_NAME}
          </Typography>
        </Grid>
        {isXs &&
        <Grid item xs={6} className="text-right">
          {accountAndCartIcons()}
        </Grid>
        }
        <Grid item xs={12} sm={4}>
          {userType === USER_TYPES.customer &&
          <TextField
            size="small"
            placeholder="Search Restaurant or food item"
            fullWidth
          />
          }
        </Grid>
        {!isXs &&
        <Grid item sm={4} className="text-right">
          {accountAndCartIcons()}
        </Grid>
        }
      </Grid>
    </Box>
  );
};

export default Header;
