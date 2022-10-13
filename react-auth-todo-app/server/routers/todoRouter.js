import express, { application } from "express"
import mongoose, { trusted } from "mongoose"
import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import Todo from "../models/todoModel.js";

const router = express.Router();

router.post("/addtodo", async (req, res) => {

    try {
        const { text, email } = req.body;



        const user = await User.findOne({ email });

        const newTodo = await Todo.create({
            text: text,
            user: user.id,
            check: false

        });

        return res.send({ message: "todo added successful", todo: newTodo })


    } catch (e) {
        return res.status(404).json({ error: e })
    }

})







router.post("/gettodo", async (req, res) => {

    try {

        const { email } = req.body;



        const user = await User.findOne({ email });



        const todos = await Todo.find({ user: user.id })

        return res.send({ todos: todos })



    } catch (e) {
        return res.status(404).json({ error: e })
    }

})

router.post("/deletetodo", async (req, res) => {
    try {


        const { id, user } = req.body;


        console.log(req.body)


        const todo = await Todo.findByIdAndDelete(id)


        return res.send({ message: "delete successful!", newTodos: await Todo.find({ user }) });


    } catch (e) {
        return res.send({ error: e })
    }

})



router.post("/checktodo", async (req, res) => {

    try {
        console.log(req.body);
        const { id } = req.body;
          
        const todo = await Todo.findById(id);
        console.log(todo);



        console.log("-----------------------------------------")


       


        const newTodo = await Todo.findByIdAndUpdate(id,{check: !todo.check});
        console.log(todo);
      





        return res.send({ message: "check success!" });
    } catch (e) {
        return res.send({ error: e })
    }


})

export default router;