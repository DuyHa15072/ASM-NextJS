import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increase: (state) => {
            state.value += 1;
        },
        increaseByAmount: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const { increase, increaseByAmount } = counterSlice.actions;

export default counterSlice.reducer;
