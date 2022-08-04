import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { list, NamePro } from "../../api/products";
import { ProductType } from "../../types/products";

export interface IProductState extends ProductType {
  id: string;
  category: string,
  name: string;
  img: string;
  price: number;
  quantity: number;
  desc: string;
}

export enum validationState {
  Fulfilled,
  Pending,
  Rejected
}

// Action
export const getProducts = createAsyncThunk("product/getProduct", async (initialProduct: IProductState) => {
  const data = await list();
  return data;
});

export const nameProducts = createAsyncThunk("product/nameProducts", async (params: ProductType) => {
  const data = await NamePro(params);
  return data;
});

interface productsSliceState {
  products: IProductState[],
  validationState?: validationState,
  errorMessage?: string

}

const initialProducts: IProductState[] = []

const initialState: productsSliceState = {
  products: initialProducts,
  validationState: undefined,
  errorMessage: undefined
}

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
  },
});

export default productSlice.reducer;
