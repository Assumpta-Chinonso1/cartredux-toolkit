import { createSlice } from "@reduxjs/toolkit";


// Read saved user
const savedUser = JSON.parse(localStorage.getItem("user"))


const initialState = {
              
    user: savedUser || null,
    isAuthenticated: savedUser ? true : false,  
    loading: false,         
    error: null              
};

// 2 Creating the auth slice
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {

        // When login starts
        loginStart: (state) => {
            state.loading = true;
            state.error = null;
        },

        // When login is successful
        loginSuccess: (state, action) => {
            state.loading = false;
            state.user = action.payload;
            state.isAuthenticated = true;
            state.error = null;

            localStorage.setItem("user", JSON.stringify(action.payload))

          
        },

         // When login fails
        loginFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
            state.isAuthenticated = false;
        },

        // Logout user
        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            state.loading = false;
            state.error = null;
            
            localStorage.removeItem("user")
            
        }
    }
});

export const { loginStart, loginSuccess, loginFailure, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
