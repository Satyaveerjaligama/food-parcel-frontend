import { openSnackbar } from '@/store/slices/utilitySlice';
import { RootState } from '@/store/store';
import { SNACKBAR_STATUS } from '@/utilities/constants';
import { Alert, Snackbar as MuiSnackBar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';

interface SnackbarProps {
  className?: string;
}

const Snackbar = (props: SnackbarProps) => {
  const { className } = props;
  const dispatch = useDispatch();
  const snackbar = useSelector(
    (state: RootState) => state.utilitySlice.snackbar
  );

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(
      openSnackbar({
        open: false,
        message: '',
        status: SNACKBAR_STATUS.success,
      })
    );
  };

  return (
    <MuiSnackBar
      className={className}
      open={snackbar.open}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert severity={snackbar.status} variant="filled">
        {snackbar.message}
      </Alert>
    </MuiSnackBar>
  );
};

export default Snackbar;
