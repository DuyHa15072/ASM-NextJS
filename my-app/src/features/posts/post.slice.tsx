import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create,detail,getAll,remove,update } from "../../api/posts";
import { PostsType } from "../../types/posts";

interface IPostState {
  value: any[];
}
const initialState: IPostState = {
  value: [],
};

// Action
export const getPosts = createAsyncThunk("Post/getPost", async () => {
    const data = await getAll();
    return data;
});

export const creactPost = createAsyncThunk("Post/creactPost", async (params: PostsType) => {
    const data = await create(params);
    console.log("data creat",data);
    
    return data;
});

export const updatePost = createAsyncThunk("Post/updatePost", async (params: PostsType) => {
    const data = await update(params);
    return data;
});

export const getOnePost = createAsyncThunk("Post/getOnePost", async (params: any) => {
    const data = await detail(params);
    return data;
});

export const removePost = createAsyncThunk("Post/removePost", async (params: any) => {
    const data = await remove(params);
    return data;
});


const Postlice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.value = action.payload;
    })
    builder.addCase(creactPost.fulfilled, (state, action) => {
      state.value.push(action.payload);
      console.log("STATE",state.value);
      
    })
  
    builder.addCase(updatePost.fulfilled, (state, action) => {
        state.value = state.value.map(item => item._id === action.payload._id ? action.payload : item);
      })
    builder.addCase(removePost.fulfilled, (state, action) => {
      state.value = state.value.filter(item => item._id !== action.payload._id)
      console.log(state.value)
    });
  },
});

export default Postlice.reducer;


