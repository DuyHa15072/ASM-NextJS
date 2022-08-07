import axios from "axios";
import useSWR from "swr";
import { create,  remove, update } from "../api/posts";
// import { BlogType } from "../types/blog";
import { PostsType } from "../types/posts";

const useBlogs = () => {
    const fetcher = (args) => axios.get(args).then(res => res.data)

    const { data, error, mutate } = useSWR("http://localhost:4000/api/products", fetcher);

    // create
    const add = async (item: PostsType) => {
        const post = await create(item);
        mutate ([...data, post]);
    };
    const dele = async (id) => {
        await remove(id);
        mutate (data.filter(item => item._id !== id));    
    };

    const edit = async (item: PostsType) => {
        const {data : post} = await update(item);
        return data;
    };


    return {
        edit,
        add,
        dele,
        data,
        error,
    };
};

export default useBlogs;
