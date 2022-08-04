import { PostsType } from "../types/posts";
import instance from "./instance";



export const list = ()=> {
    const url = `/posts`;
    return instance.get(url)
}

export const add = (post : PostsType) =>{
    const url = `/posts`;
    return instance.post(url,post)
};
export const remove = (id: any) => {
    const url = `posts/${id}`;
    return instance.delete(url); 
}

export const update = (post: PostsType) => {
    const url = `posts/${post._id}`;
    return instance.put(url, post); 
}

export const readPost = (id: any) => {
    const url = `/posts/${id}`;
    return instance.get(url);
}
