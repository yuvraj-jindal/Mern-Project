import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: null,
    error:null,
    loading:false,
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        signInStart: (state) =>  {
            state.loading = true
        },
        signInSuccess: (state,action) =>  {
            state.currentUser = action.payload
            state.loading = false
            state.error = null
        },
        signInFailure: (state,action) =>  {
            state.error = action.payload
            state.loading = false
        },
        updateStart: (state) =>  {
            state.loading = true
        },
        updateSuccess: (state,action) =>  {
            state.currentUser = action.payload
            state.loading = false
            state.error = null
        },
        updateFailure: (state,action) =>  {
            state.error = action.payload
            state.loading = false
        },
        deleteUserStart: (state) =>  {
            state.loading = true
        },
        deleteUserSuccess: (state) =>  {
            state.currentUser = null
            state.loading = false
            state.error = null
        },
        deleteUserFailure: (state,action) =>  {
            state.error = action.payload
            state.loading = false
        },
        signOutUserStart: (state) =>  {
            state.loading = true
        },
        signOutUserSuccess: (state) =>  {
            state.currentUser = null
            state.loading = false
            state.error = null
        },
        signOutUserFailure: (state,action) =>  {
            state.error = action.payload
            state.loading = false
        },
    }
})

export const {signInStart,signInSuccess,signInFailure,
    updateFailure,updateStart,updateSuccess,
    deleteUserFailure,deleteUserStart,deleteUserSuccess,
    signOutUserFailure,signOutUserStart,signOutUserSuccess} = userSlice.actions

const userReducer = userSlice.reducer
export default userReducer