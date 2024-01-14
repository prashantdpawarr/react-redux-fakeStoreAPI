import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk("fetchProducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    return response.json();
})


const product = createSlice({
    name: 'Product',
    initialState: {
        isLoading: false,
        isError: false,
        data: null,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state, action) => {
            state.isLoading = true;
        })
        builder.addCase(fetchProducts.rejected, (state, action) => {
            console.log("error", action.payload);
            state.isError = true;
        });
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
    }
})

export default product.reducer;