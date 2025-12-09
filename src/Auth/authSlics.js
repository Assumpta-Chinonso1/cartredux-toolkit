import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart: (state) => {
            state.loading = true
            state.error = null
        },
        loginSuccess: (state, action ) => {
            state.loading = false
            state.user =  action.payload
            state.isAuthenticated = true   
            state.error = null
        },
        loginFaluire: (state, action) => {
            state.loading = false
            state.error = action.payload
            state.isAuthenticated = false

        },
        loginOut: (state) => {
            state.user = null
            state.isAuthenticated = false
        }
    }
})

export const {loginStart, loginSuccess, loginFaluire, loginOut} = authSlice.actions
export const authReducer = authSlice.reducer