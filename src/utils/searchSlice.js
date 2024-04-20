import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
    name: 'search',
    initialState: {

    },
    reducers: {
        cachedResults : (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
})

export default searchSlice.reducer;
export const {cachedResults} = searchSlice.actions;