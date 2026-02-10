import express from "express";
import { success, z } from "zod"
import { Account, userModel } from "../db";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { middlewares } from "../middlewares";


declare global {
    namespace Express {
        interface Request {
            userId?: string;
        }
    }
}

dotenv.config();

const router = express.Router();
console.log("✅ user routes loaded");

const SignupBody = z.object({
    username: z.string(),
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
})

router.post("/signup", async (req, res) => {
    const { success } = SignupBody.safeParse(req.body);

    if (!success) {
        return res.status(411).json({
            message: "incorrect input"
        })
    }
    const ExistingUser = await userModel.findOne({
        username: req.body.username
    })
    if (ExistingUser) {
        return res.status(411).json({
            message: "user already exist"
        })
    }

    const user = await userModel.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
    })

    const userId = user._id;
    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
    res.status(200).json({
        message: "user created sucessfully"
    })
})

const SigninBody = z.object({
    username: z.string(),
    password: z.string()
})


router.post("/signin", async (req, res) => {

    const JWT_SECRET = process.env.JWT_SECRET as string;
    const { success } = SigninBody.safeParse(req.body);

    if (!success) {
        return res.status(411).json({
            message: "invalid input"
        })
    }
    const user = await userModel.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if (!user) {
        return res.status(411).json({
            message: "user does not exist"
        })
    }
    if (user) {
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET)
        res.json({
            token: "Bearer " + token
        })
    }
})

const PutBody = z.object({
    password: z.string(),
    firstName: z.string(),
    lastName: z.string(),
})
router.put("/", middlewares, async (req, res) => {

    const { success } = PutBody.safeParse(req.body);

    if (!success) {
        return res.status(411).json({
            message: "invalid input"
        })
    }
    try {
        await userModel.updateOne({ _id: req.userId }, {
            password: req.body.password,
            firstName: req.body.firstName,
            lastName: req.body.lastName
        });
        res.status(200).json({
            message: "updated successfully "
        })
    } catch (err) {
        res.status(411).json({
            message: "error while updating "
        })

    }
})
router.get("/bulk", async (req, res) => {

    const filter = (req.query.filter as string) || "";


    const users = await userModel.find({
        $or: [{
            firstName: {
                $regex: `^${filter}`, $options: 'i'
            }
        }, {
            lastName:
                { $regex: `^${filter}`, $options: "i" }
        }
        ]
    })
    res.json({
        users: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

router.get("/test", async (req, res) => {

    res.json({
        message: "test is working"
    })
})
export default router;

