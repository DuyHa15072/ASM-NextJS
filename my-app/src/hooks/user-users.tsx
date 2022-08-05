import useSWR from "swr";
import { add, remove, update } from "../api/category";
 import { SignupType } from "../types/signUp";

const Users = () => {
    // swr api

    const { data, error, mutate } = useSWR("/users");

    //delete
    const deleteUser = async (id: any) => {
        const user  = await remove(id);
        mutate(item => item.id !== user.id);
    };

        //edit
        const updateUser = async (item: SignupType) => {
            const category  = await update(item);
            mutate([(item: any)  => item.id === user.id ? category : item] );
        };
        

    

    return {
        updateUser,
        deleteUser,
        data,
        error,
    };
};

export default Users;