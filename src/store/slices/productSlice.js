import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    error: null,
    status: 'idle',
};

// Define the fetchProducts thunk state.products = [...action.payload];
export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
    const response = await fetch('http://localhost:8080/apiP/product-by-category');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data;
});

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'fulfilled';
                // console.log("action.payload", [...action.payload.data])
                state.products = [...action.payload.data];
                state.error = null;
            })
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'pending';
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { getProducts } = productsSlice.actions;

export default productsSlice.reducer;

export const selectAllProducts = state => state.products;













// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const initialState = {
//     products: [],
//     error: null,
//     status: 'idle',
// }

// export const productsSlice = createSlice({
//     name: 'products',
//     initialState,
//     reducers: {},
//     extraReducers: (builder) => {
//         builder.addCase(fetchProducts.fulfilled, (state, action) => {
//             state.status = 'fulfilled'
//             state.products = [...action.payload.data]
//         });
//         builder.addCase(fetchProducts.pending, (state, action) => {
//             state.status = 'pending'
//         })
//     }
// })

// export const { getProducts } = productsSlice.actions

// export default productsSlice.reducer

// export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
//     const response = await fetch('http://localhost:8080/api/products-by-categories')
//     const data = await response.json()
//     return data
// })

// export const selectAllProducts = state => state.products
