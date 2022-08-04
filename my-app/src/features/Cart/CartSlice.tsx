import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store";
import { ProductType } from "../../types/products";
import { IProductState } from "../products/product.slice";

interface CartProduct extends IProductState {
  amount: number,
}



const cartSlice = createSlice({
  name: "products",
  initialState: [] as CartProduct[],
  reducers: {
    addToCart: (state, action: PayloadAction<ProductType>) => {
      const productIdex = state.findIndex(product => product.id === action.payload.id);
      console.log(productIdex);
      if (productIdex !== -1) {
        state[productIdex].amount += 1;
      } else {
        state.push({ ...action.payload, amount: 1 })
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const productIdex = state.findIndex(product => product.id === action.payload);
      if (state[productIdex].amount > 1) {
        state[productIdex].amount -= 1;
      } else {
        return state.filter(product => product.id !== action.payload)
      }
    }
  },
})

export const getCartProducts = (state: RootState) => state.cart;
export const getTotalPrice = (state: RootState) => state.cart.reduce((acc, next) => acc += (next.amount * next.price), 0)

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;