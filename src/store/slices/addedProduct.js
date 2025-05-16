import { createSlice } from "@reduxjs/toolkit";

const addedProductSlice = createSlice({
  name: "addedProduct",
  initialState: {
    products: []
  },
  reducers: {
    setProduct: (state, action) => {
      state.products = [...state.products,action.payload];
    },
    resetProduct: (state) => {
      state.products = [];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => (
        product.id != action.payload
      ))
    },
    incrementOne: (state, action) => {
      console.log(state.products.length)
      console.log(state.products)
      for (let i = 0; i < state.products.length; i++){
        if(state.products[i].id == action.payload){
          state.products[i].counter += 1;
        }
      }
    }
  },
});

export const {
  setProduct,resetProduct,incrementOne,removeProduct
} = addedProductSlice.actions;
export default addedProductSlice.reducer;
