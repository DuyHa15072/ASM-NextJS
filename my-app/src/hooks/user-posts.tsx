import useSWR from "swr";
import { add, readPost, remove, update } from "../api/posts";
import { PostsType } from "../types/posts";


const userProducts = () => {
    // swr api

    const { data, error, mutate } = useSWR("/posts");

    //create
    const create = async (item: PostsType) => {
        const post = await add(item);
        mutate([...data, post]);
    };

    //delete
    const deletePost = async (id: any) => {
        const post = await remove(id);
        mutate((item: any) => item.id !== data.id);
    };

    //edit
    const updates = async (item: PostsType) => {
        const post = await update(item);
        mutate([(item: any) => item.id === post.id ? post : item]);
    };


    //edit
    const read = async (id: any) => {
        const post = await readPost(id);
        mutate([post]);
    };



    return {
        create,
        updates,
        deletePost,
        read,
        data,
        error,
    };
};

export default userProducts;