import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    // etat initial qui va determiner si le mdp est bon
    isAuthenticated: false,
  
};

const connexionSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

        login: (state) => {
            state.isAuthenticated = true;
          
        },
        logout: (state) => {
            state.isAuthenticated = false;

        },
    },
});

export const { login, logout, isAuthenticated} = connexionSlice.actions;

export default connexionSlice.reducer;