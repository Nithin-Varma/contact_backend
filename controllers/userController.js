import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js'
import bcrypt from 'bcrypt';
import jwt  from 'jsonwebtoken';

export const registerUser = asyncHandler(async (req, res) => {
    const {username, email, password} = req.body;
    if(!username || !email || !password) {
        res.status(400);
        throw new Error("You missed some mandatory fields, please fill those.")
    }
    const UserAvailable = await User.findOne({email});
    if(UserAvailable) {
        res.status(400);
        throw new Error("User Already Registered...")
    }

    const hashPassword = await bcrypt.hash(password, 14);
    console.log(hashPassword);
    const user = await User.create({
        username,
        email,
        password: hashPassword,
    })

    console.log(`User Created: ${user}`);
    if(user) {
        res.status(201).json({ _id: user.id, email: user.email })
    } else {
        res.status(400);
        throw new Error("error while creating")
    }

    res.json({
        message: "Register the user"
    })
});

export const loginUser = asyncHandler(async (req, res) => {

    const { email, password } = req.body;
    if(!email || !password) {
        res.status(400);
        throw new Error("all fields are mandatory")
    }
    const user = await User.findOne({ email });

    if(user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({

            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            }
        }, process.env.ACCESS_TOKEN_SCERET, {expiresIn: "1m"})
        res.status(200).json({ accessToken })
    } else {
        res.status(401);
        throw new Error("Email or Password is not Valid")
    } 
});

export const currentUser = asyncHandler(async (req, res) => {
    res.json({
        message: "Current user Information"
    })
});