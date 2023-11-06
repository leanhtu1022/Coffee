import { createSlice } from '@reduxjs/toolkit'

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        page: 0,
        reRender: true,
        categories: []
    },
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload;
        },
        changeRerender: (state, action) => {
            state.reRender = action.payload
        },
        changeCategories: (state, action) => {
            state.categories = action.payload
        },
    }
})


export default globalSlice;