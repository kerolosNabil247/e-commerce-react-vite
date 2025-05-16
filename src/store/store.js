import { configureStore } from "@reduxjs/toolkit";
import addedProductReducer from './slices/addedProduct';
import cartCountReducer from './slices/cartCount'
const store = configureStore({
    reducer:{
        addedProduct: addedProductReducer,
        cartCount: cartCountReducer,
    }
});

export default store;