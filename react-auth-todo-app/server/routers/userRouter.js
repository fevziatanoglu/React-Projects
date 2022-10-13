import express, { application } from "express"
import mongoose, { trusted } from "mongoose"
import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import Todo from "../models/todoModel.js";

const router = express.Router();


// singup
router.post("/signup", async (req, res) => {

    try {
        const { email, password, confirmPassword } = req.body;

        const isUserExist = await User.findOne({ email })

        if (isUserExist) {
            return res.status(400).json({ message: "User already exists!" })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "confirm password is not same. Please check again." })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
            email: email,
            password: hashedPassword
        });

        return res.status(202).json({ message: "Registration successful!", user: newUser });
    }

    catch (e) {
        return res.status(202).json({ message: e })
    }


})

// sign in
router.post("/signin", async (req, res) => {

    try {
        const { email, password } = req.body;

        console.log(email);
        console.log(password);

        const user = await User.findOne({ email })

        console.log(user);
        if (!user) {
            return res.status(404).json({ message: "This user is not exist." });
        }

        const isPasswordCorrect = await bcrypt.compareSync(password, user.password);

        if (!isPasswordCorrect) {
            return res.status(404).json({ message: "Wrong password!" });
        }

        console.log({ userId: user._id });
        return res.status(202).json({ message: "authentication successful", userId: user._id })
    }


    catch (e) {
        return res.status(404).json({ error: e })
    }



})



export default router;