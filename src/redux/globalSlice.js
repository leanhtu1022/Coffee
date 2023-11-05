import { createSlice } from '@reduxjs/toolkit'

const globalSlice = createSlice({
    name: 'global',
    initialState: {
        page: 0,
        reRender: true,
    },
    reducers: {
        changePage: (state, action) => {
            state.page = action.payload;
        },
        changeRerender: (state, action) => {
            state.reRender = action.payload
        },
    }
})


export default globalSlice;