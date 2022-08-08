import { configureStore, combineReducers } from "@reduxjs/toolkit";
import productReducer from "../features/products/product.slice"
import categoryReducer from "../features/category/category.slice"
import cartReducer from "../features/Cart/CartSlice"
import postReducer from "../features/posts/post.slice"
import blogReducer from  "../features/blog/blog.slice"
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist";
const rootReducer = combineReducers({
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    post : postReducer,
    blog: blogReducer
});
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "cart"]
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE]
            }
        })
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store





// import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import productReducer from "../features/products/product.slice"
// import categoryReducer from "../features/category/category.slice"
// import cartReducer from "../features/Cart/CartSlice"
// import postReducer from "../features/posts/post.slice"
// import blogReducer from  "../features/blog/blog.slice"
// export const store = configureStore({
//   reducer: {
//     product: productReducer,
//     category: categoryReducer,
//     cart: cartReducer,
//     post : postReducer,
//     blog: blogReducer
//   },
// });



// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;



