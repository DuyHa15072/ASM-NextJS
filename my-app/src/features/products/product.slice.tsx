import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list,NamePro,add, productCate } from "../../api/products";
import { ProductType } from "../../types/products";

interface IProductState {
    value: any[];
}
const initialState: IProductState = {
    value: [],
};

// Action
export const getProducts = createAsyncThunk("product/getProduct", async () => {
    const data = await list();
    return data;
});
export const nameProducts = createAsyncThunk("product/nameProducts", async (params: ProductType) => {
  const data = await NamePro(params);
  return data;
});
export const creactProducts = createAsyncThunk("product/creactProducts", async (params: ProductType) => {
  const data = await add(params);
  return data;
});

export const filterProduct = createAsyncThunk(
  "product/filterProducts", async (category: string) => {
      const  data  = await productCate(category)
      return  data;
  } ) ;

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.value = action.payload;
        });
        builder.addCase(nameProducts.fulfilled, (state, action) => {
        state.value = action.payload;
        });
        builder.addCase(creactProducts.fulfilled, (state, action) => {
        state.value.push(action.payload);
        });
        builder.addCase(filterProduct.fulfilled, (state, action) => {
          state.value = action.payload;
          console.log(state.value)
          });
    },
});

export default productSlice.reducer;


