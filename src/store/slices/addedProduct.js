import { createSlice } from "@reduxjs/toolkit";

const addedProductSlice = createSlice({
  name: "addedProduct",
  initialState: {
    products: [],
  },
  reducers: {
    setProduct: (state, action) => {
      const productExists = state.products.some(
        (product) => product.id === action.payload.id
      );

      if (!productExists) {
        state.products = [...state.products, action.payload];
      } else {
        console.log("Product already exists:", action.payload); // Important:  Log the duplicate
        //  You might want to dispatch another action here to notify the user
        //  or update the existing product instead of just logging.
      }
    },
    resetProduct: (state) => {
      state.products = [];
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id != action.payload
      );
    },
  },
});

export const { setProduct, resetProduct, removeProduct } =
  addedProductSlice.actions;
export default addedProductSlice.reducer;
