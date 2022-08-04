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
        const category  = await remove(id);
        mutate(item => item.id !== category.id);
    };

        //edit
        const updateCate = async (item: CategoryType) => {
            const category  = await update(item);
            mutate([(item: any)  => item.id === category.id ? category : item] );
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