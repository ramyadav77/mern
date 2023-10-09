const express=require("express");

const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
dotenv.config(); 
// model imported here
const userDataRoute=require("./routes/userDataRoute")
app.use(express.json());

mongoose.connect(process.env.URI).then(()=>{
    console.log("connected successfully");
    app.listen(process.env.PORT||5000,(err)=>{
        if(err)console.log(err);
        console.log(`running at port ${process.env.PORT}`);
    });
})
.catch((error)=>{
    console.log("failed to connect",error);
});

app.use(userDataRoute);

