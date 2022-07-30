import useSWR from "swr";
import { add, remove, update , readProduct} from "../api/products";
 import { ProductType } from "../types/products";

const userProducts = () => {
    // swr api

    const { data, error, mutate } = useSWR("/products");

    //create
    const create = async (item: ProductType) => {
        const product  = await add(item);
        mutate([...data, product]);
    };

    //delete
    const deleteProduct = async (id: any) => {
        const product  = await remove(id);
        mutate((item: any) => item.id !== data.id);
    };

        //edit
        const updates = async (item: ProductType) => {
            const product  = await update(item);
            mutate([(item: any) => item.id === product.id ? product : item] );
        };
    
        
        //edit
        const read = async (id: any) => {
            const product  = await readProduct(id);
            mutate([product] );
        };
    
    return {
        create,
        updates,
        deleteProduct,
        read,
        data,
        error,
    };
};

export default userProducts;