import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import  productSlice  from "./components/ProductSlice";


export default configureStore({
    reducer:{
        cart : cartSlice,
        product : productSlice
    }
})