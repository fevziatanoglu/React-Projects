import mongoose from "mongoose";
import express from "express"
import userRouter from "./routers/userRouter.js";
import todoRouter from "./routers/todoRouter.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors())

app.listen(5000, () => {
    mongoose.connect("mongodb+srv://************@mycluster.q7hwcfl.mongodb.net/?retryWrites=true&w=majority"
        , { useUnifiedTopology:true,useNewUrlParser:true})
        .then(response => console.log("Server is running on port 5000"))
        .catch(error => console.log(error));
})



app.use("/users", userRouter);
app.use("/todo", todoRouter);