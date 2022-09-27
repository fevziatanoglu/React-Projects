import mongoose from "mongoose";
import express from "express";
import bcrypt from "bcryptjs";
import User from "../models/userModel.js"

const router = express.Router();

// POST!! SIGNUP
router.post("/signup", async (req, res) => {

    try {
        console.log(req.body);

        // name password email degerlerini bodyiden al
        const { name, password, email } = req.body;

        // email i kullanarak kullanici bul
        const isUserExist = await User.findOne({ email });

        // isUserExist geri bir deger dondururse (yani ayni emailde baska bir kullanıcı varsa hata dondur)
        if (isUserExist) {
            return res.status(400).json({ message: "user already exists." })
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
        return res.status(201).json(createdUser);

    } catch (e) {
        console.log(e);

        //hata var ise yazir ve dondur 
        return res.json({ message: "User could not created." });
    }

})
// POST!! SIGNUP

// POST!! SIGNIN
router.post("/signin", async (req, res) => {

    const { email, password } = req.body;

    // email ile useri bul ve user degiskenine ata
    const user = await User.findOne({ email });

    // girilen password ile user degiskeninin passwordunu karsılastır
    const isPasswordCorrect = bcrypt.compare(password, user.password);

    // user bos ise veya passwordler ayni degil ise hata dondur
    if (!user || !isPasswordCorrect) {
        req.status(404).json({ message: "Wrong email or password." });
    }

    // diger durumlar saglanamz ise giris yap
    return res.status(200).json({ message: "authentication successful" });

})
// POST!! SIGNIN

export default router;