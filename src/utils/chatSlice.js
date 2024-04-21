import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

export const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: []
    },
    reducers: {
        addMessage: (state, action) => {
            if(state.messages.length > LIVE_CHAT_COUNT){
                state.messages.shift();
            }
            state.messages.push(action.payload);
        }
    }
});

export default chatSlice.reducer;
export const {addMessage} = chatSlice.actions;