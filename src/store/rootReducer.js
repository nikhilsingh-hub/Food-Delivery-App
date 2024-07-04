import { combineReducers } from "redux";
import cartReducer from "./slices/cartSlice";
import productReducer from "./slices/productSlice";
import addressReducer from "./slices/addressSlice";
import authSlice from "./slices/authSlice";

const rootReducer = combineReducers(
    {
        cart: cartReducer,
        products: productReducer,
        address: addressReducer,
        auth: authSlice
    }
);

export default rootReducer;