import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        listProductInCart: [],
        totalProductInCart: [],
    },
    reducers: {
        changeListProductInCart: (state, action) => {
            state.listProductInCart = action.payload
        },
        changeTotalProductInCart: (state, action) => {
            state.totalProductInCart = action.payload
        },
    }
})

export default cartSlice;