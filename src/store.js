import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Features/Theme/Cart/cartSlice'
import themeReducer from './Features/Theme/ThemeSlice'
import { authReducer } from './Auth/authSlics';


export const store = configureStore({
  reducer: {
   
    cart: cartReducer,
    theme: themeReducer,
    auth: authReducer
  
  },
});