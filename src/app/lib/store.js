import { configureStore } from "@reduxjs/toolkit"
// import SearchSlice from "./features/SearchSlice/SearchSlice"
import ConnexionSlice from "./features/ConnexionSlice"


export const store = configureStore({
		
		reducer:{
            // search: SearchSlice
            // json: jsonSlice,
            auth: ConnexionSlice
		}
})