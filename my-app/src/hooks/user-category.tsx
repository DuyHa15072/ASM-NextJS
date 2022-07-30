import useSWR from "swr";
import { add, remove, update } from "../api/category";
 import { CategoryType } from "../types/category";

const userCategory = () => {
    // swr api

    const { data, error, mutate } = useSWR("/categorys");

    //create
    const create = async (item: CategoryType) => {
        const category  = await add(item);
        mutate([...data, category]);
    };

    //delete
    const deleteCate = async (id: any) => {
        const product  = await remove(id);
        mutate(item => item.id !== data.id);
    };

        //edit
        const updateCate = async (item: CategoryType) => {
            const product  = await update(item);
            mutate([item => item.id === data.id ? data : item] );
        };
    

    return {
        create,
        updateCate,
        deleteCate,
        data,
        error,
    };
};

export default userCategory;