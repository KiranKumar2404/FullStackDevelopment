import { createSlice } from "@reduxjs/toolkit";

const initialValue = {
    isAuthenticated: false,
    token: '',
    role: '',
    name: '',
    email: '',
    number: ''
}

const UserSlice = createSlice({
    name: 'auth',
    initialState: initialValue, // Use initialState instead of initialValue
    reducers: {
        setAuthenticated: (state, action) => {
            state.isAuthenticated = action.payload;
        },
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
        },
        setUserDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.number = action.payload.number;
        }
    }
});

export const { setAuthenticated, setRole, setToken, setUserDetails } = UserSlice.actions;

export default UserSlice.reducer;
