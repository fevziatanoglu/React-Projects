import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js"


const router = express.Router();

// POST!! SIGNUP
router.post("/signup", async (req, res) => {

    try {
        // name password email degerlerini bodyiden al
        const { name, password, email } = req.body;

        // email i kullanarak kullanici bul
        const isUserExist = await User.findOne({ email });

        // isUserExist geri bir deger dondururse (yani ayni emailde baska bir kullanıcı varsa hata dondur)
        if (isUserExist) {
            return res.status(400).json({ message: "User already exists." , });
        }

        // sifreyi hashle
        // 10 => sifre databasede saklanırken sifrenin sonuna random karakter ekler
        const hashedPassword = await bcrypt.hash(password, 10);

        // kullanici olustur
        // email ve name'i bodyden aldigin degerleri kullan
        // password kisminda hashlenmis passwordu kullan
        const createdUser = await User.create({
            name,
            email,
            password: hashedPassword,
        })

        // olusturulan kullaniciyi dondur
        return res.status(201).json({message : "User created success.", user:createdUser});

    } catch (e) {
        //hata var ise yazir ve dondur 
        return res.status(400).json({ message: e.message, user:createdUser });
    }

})
// POST!! SIGNUP






// POST!! SIGNIN
router.post("/signin", async (req, res) => {

    try{
        const { email, password } = req.body;

    // email ile useri bul ve user degiskenine ata
    const user = await User.findOne({ email });

    if(!user){
        return res.status(404).json({ message: "This email not exist." });
    }
    
    const isPasswordCorrect = bcrypt.compareSync(password,user.password)

    // girilen password ile user degiskeninin passwordunu karsılastır
    // const isPasswordCorrect = bcrypt.compare(password, user.password);
    

     // user bos ise veya passwordler ayni degil ise hata dondur
    if (!isPasswordCorrect) {
        return res.status(404).json({ message: "Wrong password."});
    }

    

    // if(!isPasswordCorrect){
    //     req.status(404).json({ message: "Wrong password" });
    // }

    // diger durumlar saglanamz ise giris yap
    return res.status(200).json({ message: "authentication successful",user:user });

    }catch(e){
        return res.status(400).json({ message: e.message });
    }
    

})
// POST!! SIGNIN

export default router;