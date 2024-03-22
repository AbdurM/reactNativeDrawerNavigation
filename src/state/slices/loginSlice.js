/* eslint-disable prettier/prettier */
import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
    name: 'loginSlice',
    initialState: {
    },
    reducers: {
        saveLoginDetails(state, action) {
            state.value = action.payload;
        },
    },
}
);

export const { saveLoginDetails } = loginSlice.actions;
export default loginSlice.reducer;
