const express = require("express");
const { userRouter } = require("./user");
const { accountRouter } = require("./account");


const app=express();

const mainRouter = express.Router();



mainRouter.get("/signup",(req,res)=>{
    res.json("Hello");
});

mainRouter.use("/user",userRouter);

mainRouter.use("/account",accountRouter);

module.exports = {
    mainRouter
};

