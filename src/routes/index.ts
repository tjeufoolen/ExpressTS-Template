import { Router, Request, Response } from "express";
const router = Router();

/* GET home page. */
router.get("/", (req: Request, res: Response) => {
    res.json({ message: "Hello World" });
});

export default router;
