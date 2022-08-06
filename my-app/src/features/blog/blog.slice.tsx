import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { create,detail,getAll,remove,update } from "../../api/blog";
import { BlogType } from "../../types/blog";

interface IBlogState {
  value: any[];
}
const initialState: IBlogState = {
  value: [],
};

// Action
export const getBlog = createAsyncThunk("Blog/getBlog", async () => {
    const data = await getAll();
    return data;
});

export const creactBlog = createAsyncThunk("Blog/creactBlog", async (params: BlogType) => {
    const data = await create(params);
    console.log("data creat",data);
    
    return data;
});

export const updateBlog = createAsyncThunk("Blog/updateBlog", async (params: BlogType) => {
    const data = await update(params);
    return data;
});

export const getOneBlog = createAsyncThunk("Blog/getOneBlog", async (params: any) => {
    const data = await detail(params);
    return data;
});

export const removeBlog = createAsyncThunk("Blog/removeBlog", async (params: any) => {
    const data = await remove(params);
    return data;
});


const Bloglice = createSlice({
  name: "blog",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.value = action.payload;
    })
    builder.addCase(creactBlog.fulfilled, (state, action) => {
      state.value.push(action.payload);
      console.log("STATE",state.value);
      
    })
  
    builder.addCase(updateBlog.fulfilled, (state, action) => {
        state.value = state.value.map(item => item._id === action.payload._id ? action.payload : item);
      })
    builder.addCase(removeBlog.fulfilled, (state, action) => {
      state.value = state.value.filter(item => item._id !== action.payload._id)
      console.log(state.value)
    });
  },
});

export default Bloglice.reducer;


