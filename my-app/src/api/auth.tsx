import { SignupType} from "../types/signUp";
import { SigninType } from "../types/signIn"
import instance from "./instance";

export const signup = (user: SignupType) => {
    const url = `/signup`;
    return instance.post(url, user)
}
export const signin = (user: SigninType) => {
    const url = `/signin`;
    return instance.post(url, user)
}
export const remove = (id : number) =>{
    return instance.delete(`/users/${id}`)
}
export const update = (user: SignupType) => {
    const url = `users/${user._id}`;
    return instance.put(url, user); 
}