import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list } from "../../api/posts";

import { PostsType } from "../../types/posts";


interface IPostState {
    value: any[];
}
const initialState: IPostState = {
    value: [],
};

// Action
export const getPosts = createAsyncThunk("post/getPosts", async () => {
    const data = await list();
    return data;
});




const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.value = action.payload;
        });

      
    },
});

export default postSlice.reducer;
