import { configureStore } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import cartSlice from './cartSlice';
import globalSlice from './globalSlice';

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        cart: cartSlice.reducer,
        global: globalSlice.reducer
    }
})

export default store