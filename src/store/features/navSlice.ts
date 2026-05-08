import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavState {
    category: 'top' | 'new' | 'best';
    limit: number;
}

const initialState: NavState = {
    category: 'top',
    limit: 20,
};

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setGlobalCategory: (state, action: PayloadAction<NavState['category']>) => {
            state.category = action.payload;
            state.limit = 20;
        },
        setGlobalLimit: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
    },
});

export const { setGlobalCategory, setGlobalLimit } = navSlice.actions;
export default navSlice.reducer;
