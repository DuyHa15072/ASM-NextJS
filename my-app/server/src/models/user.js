/** @format */

import mongoose from "mongoose";
import { createHmac } from "crypto";
import {v4 as uuidv4 } from "uuid";


const userSchema = mongoose.Schema(
    {
    name:{
        type: String,
        required: true,
        maxLength: 30
    },
    phonenumber: {
        type: Number,    
        required: true,
        maxLength: 30
    },
    address: {
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type: String,
        required: true,
    },
    salt:{
        type :String
    },
    role: {
        type: Number,
        default: 0
    },

    },{ timestamps: true }
);
userSchema.methods = {
    encryptPassword(password){ //b2
        if(!password) return;
        try {
            return createHmac('sha256',this.salt).update(password).digest('hex'); 
        } catch (error) {
            console.log(error);
        }
    },
    authenticate(password){
        return this.password == this.encryptPassword(password);
    },
}
userSchema.pre("save", async function save(next){ 
    try {
            this.salt = uuidv4();
            this.password = this.encryptPassword(this.password); 
            return next();
    } catch (error) {
            return next(error)
    }
});
export default mongoose.model('User', userSchema);
