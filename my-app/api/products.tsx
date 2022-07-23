import { ProductType } from "../types/products";
import instance from "./instance";


export const add = (product : ProductType) => {
    return instance.post("/products", product);
}

export const remove = (id : number) =>{
    return instance.delete(`/products/${id}`)
}

export const update = (product: ProductType) => {
    const url = `products/${product.id}`;
    return instance.put(url, product); 
}