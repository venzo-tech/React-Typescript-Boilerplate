import { PayloadAction , createSlice } from "@reduxjs/toolkit";
import { signinState } from "../Types.tsx/SignInUser";

const initialState: signinState = {
    signinValue: {
        token: localStorage.getItem('token') || '',
        email: localStorage.getItem('email') || '',
        uid: localStorage.getItem('uid') || '',
        isTokenExpired:
            Boolean(localStorage.getItem('isTokenExpired')) || false,
        isLoading:false,
    },
};

const signInSlice = createSlice({
    name: "signin",
    initialState,
    reducers: {
        setSignInValue: (state: signinState, action: PayloadAction<any>) => {
            action.payload.token && localStorage.setItem("token", action.payload.token)
            action.payload.email && localStorage.setItem("email", action.payload.email)
            action.payload.uid && localStorage.setItem("uid", action.payload.uid)
            action.payload.isTokenExpired && localStorage.setItem("isTokenExpired", action.payload.username)
        },
        setGlobalLoading: (state: signinState, action: PayloadAction<any>) => {
            state.signinValue.isLoading = action.payload;
        }
    }
})

export const { setSignInValue,setGlobalLoading } = signInSlice.actions;
export default signInSlice.reducer;