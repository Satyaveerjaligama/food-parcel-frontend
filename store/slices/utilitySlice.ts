import { AlertColor } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';

interface UtilitySliceInitialState {
    loader: boolean;
    snackbar: {
      open: boolean,
      message: string,
      status: AlertColor,
    };
    modal: {
      open: boolean,
      type: string,
    };
    idForFileUpload: string;
}

const utilitySliceInitialState: UtilitySliceInitialState = {
  loader: false,
  snackbar: {
    open: false,
    message: '',
    status: 'success',
  },
  modal: {
    open: false,
    type: ''
  },
  idForFileUpload: '',
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
    },
    updateIdForFileUpload: (state, action) => {
      state.idForFileUpload = action.payload;
    }
  }
});

export default utilitySlice.reducer;

export const {setLoader, openSnackbar, setModal, updateIdForFileUpload} = utilitySlice.actions;