import { createSlice } from '@reduxjs/toolkit';

interface UtilitySliceInitialState {
    loader: boolean;
}

const utilitySliceInitialState: UtilitySliceInitialState = {
  loader: false,
};

const utilitySlice = createSlice({
  name: 'utilitySlice',
  initialState: utilitySliceInitialState,
  reducers: {
    setLoader: (state, action) => {
      state.loader = action.payload;
    }
  }
});

export default utilitySlice.reducer;

export const {setLoader} = utilitySlice.actions;