import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signup = async(req, res) => {
    const{firstname, lastname, email, mobilenumber, password} = req.body;

    try{
        const userExists = await User.findOne({email});
        if(userExists){
            return res.status(400).json({message: "User Already Exists"});
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            firstname,
            lastname,
            email,
            mobilenumber,
            password: hashedPassword
        });
        res.status(201).json({message: "User Registered successfully"})
    }catch(error){
        res.status(500).json({message: "server error!"});
    }
};

export const login = async(req, res) => {
    const{email, password} = req.body;

    try{
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({message: "Invalid Credentials"})
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid Credentials"})
        }

        const token = jwt.sign(
            {id: user._id},
            process.env.JWT_SECRET,
            {expiresIn: "1d"}
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: false,
            sameSite: "strict"
        });

        res.json({message:"Login Successfull"})
    }catch(error){
        res.status(500).json({message: "Server Error"});
    }
}