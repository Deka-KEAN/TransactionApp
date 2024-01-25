
const express = require("express");
const { User } = require("../database/db");
const { JWT_SECRET } = require("../config");
const userRouter= express.Router();
const jwt=require("jsonwebtoken");
const zod = require("zod");
const { authMiddleware }=require("../middleware/middleware");
const { Account } = require("../database/db");

const signupSchema= zod.object({
    username: zod.string(),
    firstName : zod.string(),
    lastName : zod.string(),
    password: zod.string()
});
const signinSchema= zod.object({
    username: zod.string(),
    firstName : zod.string(),
});
const updateUser= zod.object({
    firstName: zod.string().optional(),
    lastName:zod.string().optional(),
    password:zod.string().optional()
});


userRouter.get("/checking",(req,res)=>{
    console.log("hello");
    res.json("Hello");
});

userRouter.post("/signup",async (req,res)=>{
    const data=req.body;
    const success=signupSchema.safeParse(data);
    if(!success){
        return res.status(400).json({
            message : "UserName already taken / Incorrect inputs"
        })
    }
    const username=req.body.username;
    const password=req.body.password;
    const firstName=req.body.firstName;
    const lastName=req.body.lastName;
    const find= await User.findOne({
        username:username
    });
    if(find && find._id){
        console.log("checkin");
        return res.status(411).json({
            message : "UserName already taken / Incorrect inputs"
        });
    }
    const createdUser=await User.create({
        username:username,
        password:password,
        firstName:firstName,
        lastName:lastName
    });
    const balance=1+Math.random()*10000;
    const giveBalance= await Account.create({
        userId : createdUser._id,
        balance : balance
    })
    const userId=createdUser._id;
    const token=jwt.sign({
        userId
    },JWT_SECRET);
    res.json({
        message: "User created successfully",
        token: token,
        balance:balance
    });
});

userRouter.post("/signin",async (req,res)=>{
    const data=req.body;
    const success=signinSchema.safeParse(data);
    if(!success){
        return res.status(400).json({
            message: "Error while logging in"
        })
    }
    const username=req.body.username;
    const password=req.body.password;
    const findUser=await User.findOne({
        username:username,
        password:password
    });
    if(findUser._id){
        const userId=findUser._id;
        const token=jwt.sign({
            userId
        },JWT_SECRET);
        return res.json({
            token : token
        });
    }
    
    return res.status(411).json({
        message: "Error while logging in"
    });
});

userRouter.put("/",authMiddleware, async (req,res)=>{
    const success=updateUser.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Error while updating information"
        });
    }
    await User.updateOne(req.body,{
        _id:req.userId
    });
    return res.json({
        message: "Updated successfully"
    })
});

userRouter.get("/bulk",async(req,res)=>{
    const queryParam=req.query.filter || "";
    const users=await User.find({
        $or: [{
            firstName: {
                $regex: queryParam
            }
        }, {
            lastName: {
                $regex: queryParam
            }
        }]
    });
    res.json({
        user:users.map(user=>({
            username:user.username,
            firstName:user.firstName,
            lastName:user.lastName,
            _id:user._id
        }))
    });
});

module.exports = {
    userRouter
};