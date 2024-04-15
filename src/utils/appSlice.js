import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState:{
        showMenu : true
    },
    reducers: {
        toggleMenu: (state) => {
            state.showMenu = !state.showMenu
        }
    }

});

export default appSlice.reducer;
export const {toggleMenu} = appSlice.actions;