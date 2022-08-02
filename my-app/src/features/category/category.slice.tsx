import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listCate } from "../../api/category";
import { CategoryType } from "../../types/category";

interface ICategoryState {
    value: any[];
}
const initialState: ICategoryState = {
    value: [],
};

// Action
export const getCategory = createAsyncThunk("category/getCategory", async () => {
    const data = await listCate();
    return data;
});


const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.value = action.payload;
        });
    },
});

export default categorySlice.reducer;
