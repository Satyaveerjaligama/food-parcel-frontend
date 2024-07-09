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
          color: '#ff7d29',
          position: 'absolute',
          top: '47%',
          left: '48%',
        }
      }
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: '#0000001a',
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: '10px',
          boxShadow: '10px 10px 20px #babecc,-10px -10px 20px #ffffff'
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
          boxShadow: '3px 3px 0px #FFC96F',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:active' : {
            boxShadow: '0px 0px 0px',
            transform: 'translateX(3px) translateY(3px)',
          }
        },
        contained: {
          borderRadius: '10px',
          textTransform: 'capitalize',
          color: 'white',
          backgroundColor: '#ff7d29',
          boxShadow: '3px 3px 0px #FFC96F',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            boxShadow: '3px 3px 0px #FFC96F',
            backgroundColor: '#ff7d29',
          },
          '&:active' : {
            boxShadow: '0px 0px 0px',
            transform: 'translateX(3px) translateY(3px)',
          }
        },
        containedError: {
          borderRadius: '10px',
          textTransform: 'capitalize',
          color: 'white',
          backgroundColor: 'rgb(239 68 68)',
          boxShadow: '3px 3px 0px #FCAEAE',
          transition: 'transform 0.2s, box-shadow 0.2s',
          '&:hover': {
            boxShadow: '3px 3px 0px #FCAEAE',
            backgroundColor: 'rgb(239 68 68)',
          },
          '&:active' : {
            boxShadow: '0px 0px 0px',
            transform: 'translateX(3px) translateY(3px)',
          }
        },
        outlinedError: {
          borderColor: 'rgb(239 68 68) !important',
          color: 'rgb(239 68 68)',
          backgroundColor: 'white',
          transition: 'transform 0.2s',
          '&:hover': {
            backgroundColor: 'white',
          },
          '&:active' : {
            transform: 'translateX(3px) translateY(3px)',
          }
        },
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
