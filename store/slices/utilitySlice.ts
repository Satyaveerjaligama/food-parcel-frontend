import { AlertColor } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

interface UtilitySliceInitialState {
    loader: boolean;
    snackbar: {
      open: boolean,
      message: string,
      status: AlertColor,
    };
    modal: boolean,
}

const utilitySliceInitialState: UtilitySliceInitialState = {
  loader: false,
  snackbar: {
    open: false,
    message: '',
    status: 'success',
  },
  modal: false,
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
    },
    setModal: (state, action) => {
      state.modal = action.payload;
    }
  }
});

export default utilitySlice.reducer;

export const {setLoader, openSnackbar, setModal} = utilitySlice.actions;