import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState:{
        showMenu : true
    },
    reducers: {
        toggleMenu: (state) => {
            state.showMenu = !state.showMenu
        },
        closeMenu: (state) => {
            state.showMenu = false;
        },
    }

});

export default appSlice.reducer;
export const {toggleMenu, closeMenu} = appSlice.actions;