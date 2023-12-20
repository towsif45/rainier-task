const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const JWT_KEY = "tellmewheredowedrawtheline?";

// REGISTER
router.post("/register", async (req, res) => {
    const hashed_password = await bcrypt.hash(req.body.password, 10);
    const newUser = new User({
        username: req.body.username,
        isAdmin: req.body.isAdmin,
        password: hashed_password,
    });
    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            res.status(400).json("User doesn't exist!");
        } else {
            const password_check = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!password_check) {
                res.status(421).json("Wrong Password!");
            } else {
                const { password, ...others } = user._doc;
                const accessToken = jwt.sign(
                    { id: user._id, isAdmin: user.isAdmin },
                    JWT_KEY,
                    { expiresIn: "12h" }
                );
                console.log(accessToken);
                res.status(200).json({ others, accessToken });
            }
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
