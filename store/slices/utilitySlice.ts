import { AlertColor } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

interface UtilitySliceInitialState {
    loader: boolean;
    snackbar: {
      open: boolean,
      message: string,
      status: AlertColor,
    };
}

const utilitySliceInitialState: UtilitySliceInitialState = {
  loader: false,
  snackbar: {
    open: false,
    message: '',
    status: 'success',
  },
};

const utilitySlice = createSlice({
  name: 'utilitySlice',
  initialState: utilitySliceInitialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    },
    openSnackbar: (state, action) => {
      state.snackbar = action.payload;
    }
  }
});

export default utilitySlice.reducer;

export const {setLoader, openSnackbar} = utilitySlice.actions;