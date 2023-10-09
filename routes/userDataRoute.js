const express=require("express");
const router=express.Router();
const userData=require("../models/userDataModel");

// create
router.post("/",async(req,res)=>{
    console.log(req.body);
    const{name,email,age}=req.body; 
    try{
        const userAdded=await userData.create({
            name:name,
            email:email,
            age:age
        })
        res.status(201).json(userAdded);
    }catch(error){
        console.log(error);
        res.status(400).json({error:error.message});
    }
}
);

// get 
router.get("/",async(req,res)=>{
    try{
        const allUsers=await userData.find();
        res.status(200).json(allUsers);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});

// 
router.get("/:id",async(req,res)=>{
    const{id}=req.params;
    try{
        const singleUser=await userData.findById({_id:id});
        res.status(200).json(singleUser);
    }catch(error){
        res.status(500).json({error:error.message});
    }
});

// 
router.delete("/:id",async(req,res)=>{
    const{id}=req.params;
    try{
        const deleteUser=await userData.findByIdAndDelete({_id:id});
        res.status(201).json(deleteUser);
    }catch(error){
        res.status(400).json({error:error.message});
    }
});

// update

router.patch("/:id",async(req,res)=>{
    const{id}=req.params;
    // console.log("get body",req.body);
    // console.log("get id",id);
    const{name,email,age}=req.body;
    try{
        const updateUser=await userData.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json(updateUser);
    }catch(error){
        res.status(400).json({erroe:error.message});
    }
});


module.exports=router;