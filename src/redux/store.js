import productData from "./slice/product";
import { configureStore } from "@reduxjs/toolkit"

export const store = configureStore({
    reducer: {
        products: productData,
    }
})