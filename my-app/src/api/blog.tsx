import { BlogType } from "../types/blog";
import instance from "./instance";



export const getAll = () => {
    const url = "blog";
    return instance.get(url);
}

export const remove = (_id:number) => {
    const url = `blog/${_id}`;
    return instance.delete(url)
}

export const detail = (id: any ) => {
    const url = `/blog/${id}`;
    return instance.get(url);
}

export const create = (blog: BlogType) => {
    const url = `blog`;
    return instance.post(url, blog)
}

export const update = (blog: BlogType) => {
    const url = `blog/${blog._id}`;
    return instance.put(url, blog)
}

