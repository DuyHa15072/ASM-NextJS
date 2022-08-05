import useSWR from "swr";
import {remove, update } from "../api/auth";
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
            const user  = await update(item);
            mutate([(item: any)  => item.id === user.id ? user : item] );
        };
        

    

    return {
        updateUser,
        deleteUser,
        data,
        error,
    };
};

export default Users;