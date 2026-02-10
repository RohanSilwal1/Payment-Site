import express from "express";
import userRouter from "./user"
import accountRouter from "./accountRouter"
const router = express.Router();

router.use("/user", userRouter)
router.use("/account",accountRouter)
console.log("✅ user routes loaded");

export default router;


