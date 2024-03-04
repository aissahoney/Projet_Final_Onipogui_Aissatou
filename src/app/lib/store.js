import { configureStore } from "@reduxjs/toolkit"
// import SearchSlice from "./features/SearchSlice/SearchSlice"
// import ConnexionSlice from "./features/ConnexionSlice"
import FavoritesSlice from "./features/FavoritesSlice"
import AuthSlice from "./features/AuthSlice"


export const store = configureStore({
		
		reducer:{
            // search: SearchSlice
       
            auth: AuthSlice,
            favorites: FavoritesSlice
		}
})