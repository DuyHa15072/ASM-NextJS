import { CategoryType } from "../types/category";
import instance from "./instance";


export const listCate = ()=> {
    const url = "/categorys";
    return instance.get(url)
}


export const add = (category : CategoryType) => {
    return instance.post("/categorys", category);
}


export const remove = (id : number) =>{
    return instance.delete(`/categorys/${id}`)
}


export const update = (category: CategoryType) => {
    const url = `categorys/${category._id}`;
    return instance.put(url, category); 
}