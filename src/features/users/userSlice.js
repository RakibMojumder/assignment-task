import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getUsers = createAsyncThunk("users", async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return data;
});


const userSlice = createSlice({
    name: "Users",
    initialState: {
        users: [],
        loading: false
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.loading = true
        },
        [getUsers.fulfilled]: (state, action) => {
            state.loading = false;
            state.users = action.payload
        },
        [getUsers.rejected]: (state, action) => {
            state.loading = false
        }
    }
});

export default userSlice.reducer;