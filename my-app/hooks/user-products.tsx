import useSWR from "swr";
import { add, remove, update } from "../api/products";
import { ProductType } from "../types/products";

const userProducts = () => {
    const { data, error, mutate } = useSWR("/products");


    //create
    const create = async (item: ProductType) => {
        const product = await add(item);
        mutate([...data, product]);
    };


    const deleteProduct = async (id: any) => {
        const product = await remove(id);
        mutate(item => item.id !== data.id)
    }
    //edit
    const updates = async (item: ProductType) => {
        const product = await update(item);
        mutate([item => item.id === data.id ? data : item]);
    };

    return {
        create,
        updates,
        deleteProduct,
        data,
        error,
    };

}

export default userProducts;