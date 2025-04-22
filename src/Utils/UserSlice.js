import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name : 'user',
    initialState : null,
    reducers : {
        AddUser : (state, action) => {
            return action.payload;
        },
        RemoveUser : (state,action) => {
            return null;
        }
    }
});

export const {AddUser, RemoveUser} = UserSlice.actions;
export  default UserSlice.reducer;