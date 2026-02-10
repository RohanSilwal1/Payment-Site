import express from "express";
import { Account } from "../db";
import { middlewares } from "../middlewares";
import mongoose from "mongoose";

const router = express.Router();

router.get("/balance", middlewares, async (req, res) => {

    const userId = req.userId;
    if (!userId) {
        throw new Error("User id is required")
    }

    const account = await Account.findOne({
        userId
    })
    res.json({
        Balance: account?.balance
    })
})

router.post("/transfer", middlewares, async (req, res,) => {

    if (!req.userId) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    const { amount, to } = req.body;

    if (!amount || !to) {
        return res.json({
            message: "please provide amount or transfer Name"
        })
    }
    const account = await Account.findOne({ userId: req.userId }).session(session);

    
    if (!account) {
        await session.abortTransaction();
        
        return res.json({
            message: "account didnot find"
        })
    }
    if (account.balance < amount) {
        await session.abortTransaction();
        return res.json({
            Message: "insufficient Balance"
        })
    }
    
    const toAccount = await Account.findOne({ userId: to }).session(session);
    
    if (!toAccount) {
        await session.abortTransaction();
        return res.json({
            message: "Invalid Transfer account"
        })
    }
    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);

    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction();
    res.json({
        message:"Transfer Successfully"
    })
})
export default router;