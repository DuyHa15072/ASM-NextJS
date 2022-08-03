import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productReducer from "../features/products/product.slice";
import categoryReducer from "../features/category/category.slice"
import postReducer from "../features/posts/post.slice"

export const store = configureStore({
    reducer: {
        product: productReducer,
        category: categoryReducer,
        post:postReducer
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
