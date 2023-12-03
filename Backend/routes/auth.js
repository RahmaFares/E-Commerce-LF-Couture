const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

        const accessToken = jwt.sign(
            {
                id: user._id,
                isAdmin: user.isAdmin,
            },
            process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        const { password, ...others } = user._doc;
        res.status(200).json({ ...others, accessToken, isAdmin: user.isAdmin });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "An error occurred during login." });
    }
});


// Password Reset Request
router.post('/forgot-password', async (req, res) => {
    const { email } = req.body;
    let user;
    try {
        user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json("User not found!");
        }

        const resetToken = crypto.randomBytes(32).toString("hex");
        const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

        user.resetPasswordToken = hashedToken;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save({ validateBeforeSave: false });

        // Send email using SendGrid
        const resetURL = `${req.protocol}://${req.get('host')}/reset-password/${resetToken}`;
        const msg = {
            to: email,
            from: 'rahmaa.fares114@gmail.com',
            subject: 'Password Reset',
            text: `Please click on the following link to reset your password: ${resetURL}`
        };

        await sgMail.send(msg);

        res.status(200).json({ message: "Token sent to email!" });
    } catch (err) {
        if (user) {
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;
            await user.save({ validateBeforeSave: false });
        }
        console.error("Error during password reset request:", err);
        res.status(500).json("Error during password reset request.");
    }
});

router.patch('/reset-password/:token', async (req, res) => {
    const resetToken = req.params.token;
    const hashedToken = crypto.createHash('sha256').update(resetToken).digest('hex');

    try {
        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpires: { $gt: Date.now() }
        });

        if (!user) {
            return res.status(400).json({ error: "Token is invalid or has expired" });
        }

        user.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        // Send confirmation email
        const msg = {
            to: user.email,
            from: 'rahmaa.fares114@gmail.com',
            subject: 'Password Reset Successful',
            text: 'Your password has been successfully reset. You can now log in with your new password.'
        };

        await sgMail.send(msg);

        res.status(200).json({ message: "Password reset successful. Please log in with your new password." });
    } catch (err) {
        console.error("Error during password reset:", err);
        res.status(500).json("There was an error resetting the password.");
    }
});
module.exports = router;