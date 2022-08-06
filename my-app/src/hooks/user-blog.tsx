import axios from "axios";
import useSWR from "swr";
import { create, list, remove, update } from "../api/blog";
import { BlogType } from "../types/blog";

const useBlogs = () => {
    const fetcher = (args) => axios.get(args).then(res => res.data)

    const { data, error, mutate } = useSWR("http://localhost:4000/api/products", fetcher);

    // create
    const add = async (item: BlogType) => {
        const blog = await create(item);
        mutate ([...data, blog]);
    };
    const dele = async (id) => {
        await remove(id);
        mutate (data.filter(item => item._id !== id));    
    };

    const edit = async (item: BlogType) => {
        const {data : blog} = await update(item);
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
