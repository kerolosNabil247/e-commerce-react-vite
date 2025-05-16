import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counters: [], // Renamed from 'counter' to 'counters' for clarity in a Redux context
};
const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers:{
        setCounter: (state, action) => {
      const counter = action.payload; // The new counter object
      const index = state.counters.findIndex(item => item.id === counter.id);

      if (index !== -1) {
        // Update existing counter (immutably)
        state.counters = state.counters.map((item, i) =>
          i === index ? { ...item, ...counter } : item
        );
      } else {
        // Add new counter (immutably)
        state.counters = [...state.counters, counter];
      }
    },
        incrementByOne: (state) => {
            state.counterValue = state.counterValue + 1;
        },
        decrementByOne: (state) => {
            if(state.counterValue > 0){
                state.counterValue = state.counterValue - 1;
            }
        }
    }
});

export const {setCounter,incrementByOne, decrementByOne} = counterSlice.actions;
export default counterSlice.reducer;