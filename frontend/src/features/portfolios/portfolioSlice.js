import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    portfolios: [],
    isError: false,
    isSucess: false,
    isLoading: false,
    message: ''
}


export const portfolioSlice = createSlice({
    name: 'Portfolio',
    initialState,
    reducers: {
        reset: (state) => initialState
    }
})

export const {reset} = portfolioSlice.actions
export default portfolioSlice.reducer