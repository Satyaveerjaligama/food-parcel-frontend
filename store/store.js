import { configureStore } from '@reduxjs/toolkit';
import centralDataSlice from './slices/centralDataSlice';

const store = configureStore({
    reducers:{
        centralDataSlice: centralDataSlice
    },
})

export default store;