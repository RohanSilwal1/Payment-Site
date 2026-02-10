import mongoose, { model, mongo } from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const DB_URL=process.env.DB_URL as string;
mongoose.connect(DB_URL);

const userSchema= new mongoose.Schema({

    username:String,
    password:String,
    firstName:String,
    lastName:String
})

export const userModel=mongoose.model("users",userSchema)

const accountSchema =new mongoose.Schema({
    
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:userModel,
        required:true
    },
    balance:{
        type:Number,
        required:true
    }
})
export const Account =mongoose.model("Account",accountSchema);

