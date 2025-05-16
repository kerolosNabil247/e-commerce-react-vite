import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/counter';
import addedProductReducer from './slices/addedProduct';
import cartCountReducer from './slices/cartCount'
const store = configureStore({
    reducer:{
        counter: counterReducer,
        addedProduct: addedProductReducer,
        cartCount: cartCountReducer,
    }
});

export default store;