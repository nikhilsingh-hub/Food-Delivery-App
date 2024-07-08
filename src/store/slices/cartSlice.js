import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // return { products: [...state.products, {...action.payload, amount: 1}]}
            var isPresent= false;
            state.products.forEach((product) => {
                if(product.id === action.payload.id) isPresent = true;
            })
            if(isPresent) return {products: state.products.map(product => product.id === action.payload.id? {...product, amount: product.amount+1} : product)}

            else return { products: [...state.products, {...action.payload, amount: 1}]}

        },
        clearCart: (state) => {
            return { products: []}
        },
        incrementProductAmount: (state, action) => {
            // console.log('increment');
            return { products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount + 1} : product)}
        },
        decrementProductAmount: (state, action) => {
            return { products: state.products.map(product => product.id === action.payload.id ? {...product, amount: product.amount - 1} : product)}
        }
    }
})

export const cartProducts = state => state.cart.products

export const {  addToCart, clearCart, incrementProductAmount, decrementProductAmount } = cartSlice.actions

export default cartSlice.reducer