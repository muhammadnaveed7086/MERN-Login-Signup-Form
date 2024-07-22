const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb+srv://naveedmusla456:muhammadnaveed456@cluster0.ifqrs1s.mongodb.net/")
    .then(() => {
        console.log("DB connected");
    })
    .catch(err => {
        console.error("Error connecting to database:", err);
    });

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (user) {
            if (password === user.password) {
                res.send({ message: "Login Successful", user: user });
            } else {
                res.send({ message: "Password didn't match" });
            }
        } else {
            res.send({ message: "User not registered" });
        }
    } catch (err) {
        res.status(500).send({ message: "Server error", error: err });
    }
});

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            res.send({ message: "User already registered" });
        } else {
            const newUser = new User({
                name,
                email,
                password
            });
            await newUser.save();
            res.send({ message: "Successfully Registered, Please login now." });
        }
    } catch (err) {
        res.status(500).send({ message: "Server error", error: err });
    }
});

app.listen(9002, () => {
    console.log("BE started at port 9002");
});
