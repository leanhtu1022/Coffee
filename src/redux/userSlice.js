import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: '',
        name: '',
        email: '',
        isAdmin: false,
    },
    reducers: {
        updateUser: (state, action) => {
            const { id, fullname, email, isAdmin } = action.payload;
            state.id = id;
            state.name = fullname;
            state.email = email;
            state.isAdmin = isAdmin;
        },
        resetUser: (state) => {
            state.id = '';
            state.name = '';
            state.email = '';
            state.isAdmin = false;
        }
    }
})

export default userSlice;