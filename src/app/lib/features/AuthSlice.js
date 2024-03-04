import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: '',
    isLoggedIn: false,
    errorMessage: '',
    users: [], // Tableau vide pour stocker les utilisateurs inscrits
  };


  const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      setEmail(state, action) {
        state.email = action.payload.email;
      },
      setPassword(state, action) {
        state.password = action.payload.password;
      },
      registerUser(state) {
        // Validation des champs email et password
        if (!state.email || !state.password) {
          return;
        }
  
        // Créer un objet utilisateur
        const user = {
          email: state.email,
          password: state.password,
        };
  
        // Ajouter l'utilisateur au tableau
        state.users.push(user);
  
        // Réinitialiser les champs
        // state.email = '';
        // state.password = '';
      },
      loginUser(state) {
        state.errorMessage = '';
        state.isLoggedIn = false;
        return state
      },
      loginUserSuccess(state) {
        state.isLoggedIn = true;
        return state
      },
      loginUserFailure(state, action) {
        state.errorMessage = action.payload.errorMessage;
      },
    },
  });
  export const {setEmail,setPassword,registerUser, loginUser,loginUserSuccess,loginUserFailure} = AuthSlice.actions;
  export default AuthSlice.reducer;
  