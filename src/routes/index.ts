import { User } from "../models/User";
import { Router, Request, Response } from "express";
import { IUser } from "../interfaces/IUser";
const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello, World!" });
});

router.get("/users", async (req: Request, res: Response) => {
    const users: IUser[] = await User.find({});
    res.status(200).json(users);
});

export default router;
