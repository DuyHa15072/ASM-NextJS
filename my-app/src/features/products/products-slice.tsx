import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import { add,list, remove, update, namProducts  } from '../../api/products'
import { ProductType } from '../../types/products'

export const listProducts = createAsyncThunk('products/listProducts', async () => {
    const {data} = await list();
    return data;
})

export const creactProducts = createAsyncThunk('products/creactProducts', async (params: ProductType) => {
    const {data} = await add(params);
    return data;
} )

export const deleteProducts = createAsyncThunk('products/deleteProducts', async (params: ProductType) => {
    const {data} = await remove(params);
    return data;
})

export const updateProducts = createAsyncThunk('products/updateProducts', async (params: ProductType) => {
    const {data}= await update(params);
    return data;
})

export const nameProducts = createAsyncThunk('products/nameProducts', async (params: ProductType) => {
    const {data} = await namProducts(params);
    return data;
})

const productsSlice = createSlice({
    name: "products",
    initialState: { 
        value: [],
        loading: true,
        error: "",
    },
    reducers : {},
    extraReducers: {

    }


})

export default productsSlice.reducer;