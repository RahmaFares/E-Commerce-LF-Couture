const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//REGISTER
router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(
            req.body.password,
            process.env.PASS_SEC
        ).toString(),
    });

    try {
        const savedUser = await newUser.save();
        console.log("User saved successfully:", savedUser);
        res.status(201).json(savedUser);
    } catch (err) {
        console.error("Error saving user:", err);
        res.status(500).json(err);
    }

});

//LOGIN

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).json("Wrong credentials!");
        }

        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            return res.status(401).json("Wrong credentials!");
        }
        console.log("JWT_SEC:", process.env.JWT_SEC);

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;
        console.log("User logged in successfully:", others);
        res.status(200).json({ ...others, accessToken });
    } catch (err) {
        console.error("Login error:", err);
        if (!res.headersSent) {
            res.status(500).json({ message: "An error occurred during login." });
        }
    }
});

module.exports = router;