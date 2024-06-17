import { alexandria } from '@/utilities/fonts';
import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: alexandria.style.fontFamily,
  },
  components: {
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: '#74c85d',
          position: 'absolute',
          top: '47%',
          left: '48%',
        }
      }
    }
  }
});

export default theme;
