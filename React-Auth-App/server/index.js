import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";
import userRouter from "./router/userRouter.js"


// reach to private variables in test.env
dotenv.config();

const app = express();


app.use(express.json());
app.use("/users",userRouter);

app.listen(5000 , () =>{
    mongoose.connect("mongodb+srv://fevzi:123123asd@mycluster.q7hwcfl.mongodb.net/ReactAuthApp?retryWrites=true&w=majority" ,{useUnifiedTopology:true,useNewUrlParser:true})
    .then(()=> console.log("Connected DB"))
    .catch((error) => console.log(error));
})