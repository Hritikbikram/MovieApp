import { configureStore } from "@reduxjs/toolkit";
import { movieapi } from "./MovieApi";


export const store=configureStore({
  reducer:{
    [movieapi.reducerPath]:movieapi.reducer
  },
  middleware:(getDefault)=>
     getDefault().concat(movieapi.middleware)
  
})