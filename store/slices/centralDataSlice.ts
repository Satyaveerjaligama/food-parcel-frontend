import { USER_TYPES, UserType } from "@/utilities/constants";
import { createSlice } from "@reduxjs/toolkit";

interface CentralSliceInitialState {
    userType: UserType;
}

const initialState: CentralSliceInitialState = {
    userType: USER_TYPES.customer,
}

const centralSlice = createSlice({
    name: "centralData",
    initialState: initialState,
    reducers: {
        updateUserType: (state, action) => {
            state.userType = action.payload;
        }
    }
})

export default centralSlice.reducer;

export const {updateUserType} = centralSlice.actions;