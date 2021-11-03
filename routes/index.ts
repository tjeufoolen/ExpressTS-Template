import { Router } from "express";
const router = Router();

/* GET home page. */
router.get("/", (req: any, res: any, next: any) => {
    res.json({ message: "Hello, World!" });
});

export default router;
