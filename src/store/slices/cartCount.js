import { createSlice } from "@reduxjs/toolkit";

const cartCountSlice = createSlice({
    name: 'cartCount',
    initialState: {
        cartCount:null},
    reducers:{
        incrementCart: (state) => {
            state.cartCount = state.cartCount + 1;
        },
        decrementCart: (state) => {
            if(state.cartCount > 0){
                state.cartCount = state.cartCount - 1
            }else{
                state.cartCount = null;
            }
        }
    }

});

export const {incrementCart, decrementCart} = cartCountSlice.actions;
export default cartCountSlice.reducer;