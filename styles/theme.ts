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
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: '0px 1px 3px black',
        }
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: '16px',
          }
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        outlined: {
          borderRadius: '10px',
          textTransform: 'capitalize',
          color: '#ff7d29',
          borderColor: '#ff7d29',
        },
        contained: {
          borderRadius: '10px',
          textTransform: 'capitalize',
          color: 'white',
          backgroundColor: '#ff7d29',
          '&:hover': {
            backgroundColor: '#ff7d29',
          }
        },
        containedError: {
          borderRadius: '10px',
          textTransform: 'capitalize',
          color: 'white',
          backgroundColor: 'rgb(239 68 68)',
          '&:hover': {
            backgroundColor: 'rgb(239 68 68)',
          }
        },
        outlinedError: {
          borderColor: 'rgb(239 68 68) !important',
          color: 'rgb(239 68 68)',
          backgroundColor: 'white',
          '&:hover': {
            backgroundColor: 'white',
          }
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderRadius: '10px',
        }
      }
    },
  }
});

export default theme;
