import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: '',
    password: '',
    isSubscribed: false,
    userEmail:'',
    userPassword:'',
    isLoggedIn: false,
    errorMessage: '',
    users: [], // Tableau vide pour stocker les utilisateurs inscrits
};


const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setEmail(state, action) {
            state.email = action.payload;
        },
        setPassword(state, action) {
            state.password = action.payload;
        },
        registerUser(state) {
            // Validation des champs email et password
            if (state.email !== "" && state.password !== "") {
                state.isSubscribed = true
                return;
            }

            // Créer un objet utilisateur
            // const user = {
            //     email: state.email,
            //     password: state.password,
            // };

            // Ajouter l'utilisateur au tableau
            // state.users.push(user);

            // Réinitialiser les champs
            // state.email = '';
            // state.password = '';
        },

        setUserEmail(state, action) {
            state.userEmail = action.payload;
        },
        setUserPassword(state, action) {
            state.userPassword = action.payload;
        },
        loginUser(state) {
            // comparaison mdp email avec inscription
            if (state.email == state.userEmail && state.password == state.userPassword) {
                
             state.isLoggedIn = true;
            }
            else{
                alert("email is not recognised please sign up first!")
            }
        },
        signOut(state){
            state.isLoggedIn=false,
            state.isSubscribed=false,
            state.email='',
            state.password='',
            state.userEmail='',
            state.userPassword=''
        }

    }
});
export const { setEmail, setPassword, registerUser, loginUser, setUserEmail,setUserPassword,isLoggedIn, signOut} = AuthSlice.actions;
export default AuthSlice.reducer;
