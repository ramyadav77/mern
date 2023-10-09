const mongoose=require("mongoose");
// create schema 
const userDataSchema=new mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,unique:true,required:true},
        age:{type:Number},

    },{timestamps:true}

);
// create Model
const userData=mongoose.model("UserData",userDataSchema);
module.exports=userData;