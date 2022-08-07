import { PostsType } from "../types/posts";
import instance from "./instance";



export const getAll = () => {
    const url = "posts";
    return instance.get(url);
}

export const remove = (_id:number) => {
    const url = `posts/${_id}`;
    return instance.delete(url)
}

export const detail = (id: any ) => {
    const url = `/posts/${id}`;
    return instance.get(url);
}

export const create = (post: PostsType) => {
    const url = `posts`;
    return instance.post(url, post)
}

export const update = (post: PostsType) => {
    const url = `posts/${post._id}`;
    return instance.put(url, post)
}

