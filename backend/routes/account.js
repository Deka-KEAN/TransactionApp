
const express = require("express");
const { Account } = require("../database/db");
const { User } = require("../database/db");
const { mongoose } = require("mongoose");
const { authMiddleware } = require("../middleware/middleware");
const zod = require("zod");
const accountRouter = express.Router();

const transferValidation = zod.object({
    userId : zod.string(),
    amount : zod.number()
});

accountRouter.get("/balance",authMiddleware,async (req,res)=>{
    const userId=req.userId;
    const account=await Account.findOne({
        userId
    });
    res.json({
        balance : account.balance
    });
});
// This dosen't involves transaction 
accountRouter.post("/transfer", authMiddleware, async (req, res) => {
    
    const success=transferValidation.safeParse(req.body);
    if(!success){
        return res.status(400).json({
            message : "Wrong Inputs"
        });
    }
    const to=req.body.userId
    const amount = req.body.amount;
    console.log(to);
    console.log(amount);
    const account = await Account.findOne({
        userId: req.userId
    });

    if (account.balance < amount) {
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const toAccount = await Account.findOne({
        userId: to
    });

    if (!toAccount) {
        return res.status(400).json({
            message: "Invalid account"
        })
    }

    await Account.updateOne({
        userId: req.userId
    }, {
        $inc: {
            balance: -amount
        }
    })

    await Account.updateOne({
        userId: to
    }, {
        $inc: {
            balance: amount
        }
    })

    res.json({
        message: "Transfer successful"
    })
});
// This is a good solution which involves transactions
// accountRouter.post("/transfer",authMiddleware, async (req,res)=>{
//     const session=await mongoose.startSession();
//     session.startTransaction();
//     const userId=req.userId;
//     const {to, amount} = req.body;

//     const userAccount=await Account.findOne({userId}).session(session);
//     if(!userAccount || userAccount.balance < amount){
//         await session.abortTransaction();
//         return res.status(400).json({
//             message: "Insufficient balance"
//         });
//     }

//     const reciverAccount=await Account.findOne({userId:to}).session(session);
//     if(!reciverAccount){
//         await session.abortTransaction();
//         return res.status(400).json({
//             message: "Invalid account"
//         });
//     }
//     await Account.updateOne({userId},{
//         $inc:{
//             balance : -amount
//         }
//     }).session(session);
//     await Account.updateOne({userId:to},{
//         $inc:{
//             balance : amount
//         }
//     }).session(session);

//     await session.commitTransaction();

//     res.json({
//         message: "Transfer successful"
//     });
// });

module.exports= {
    accountRouter
}