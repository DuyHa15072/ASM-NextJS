import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { listCate, remove, add } from "../../api/category";
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

export const creactCategory = createAsyncThunk("category/creactCategory", async (params: CategoryType) => {
    const data = await add(params);
    return data;
});

export const updateCategory = createAsyncThunk("category/updateCategory", async (params: CategoryType) => {
    const data = await add(params);
    return data;
});



export const removeCategory = createAsyncThunk("category/removeCategory", async (params: any) => {
    const data = await remove(params);
    return data;
});

// export const removeCategory =createAsyncThunk(
//     'category/removeCategory', async (params: any ) => {
//       const {data} = await remove(params);
//       return  data ;
//     }
//   ) ; 


  export const readCate =createAsyncThunk(
    'category/readCate', async (params: any ) => {
      const {data} = await remove(params);
      return  data ;
    }
  ) ; 
const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategory.fulfilled, (state, action) => {
            state.value = action.payload;
        });

        builder.addCase(creactCategory.fulfilled, (state, action) => {
            state.value.push(action.payload);
            console.log("state", state.value);
            
        });
        builder.addCase(updateCategory.fulfilled, (state, action) => {
            state.value = state.value.map(item => item._id === action.payload._id ? action.payload : item)
        });
        builder.addCase(removeCategory.fulfilled, (state, action) => {
            state.value = state.value.filter(item => item._id !== action.payload._id)
        });
    },
});

export default categorySlice.reducer;
