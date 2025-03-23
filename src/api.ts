import express, { Request, Response } from "express";
import { createDesk, getAllDesks, getDeskById } from "./controllers";

const router = express.Router();

router.get("/ping", (req: Request, res: Response) => {
  res.send("pong")
})

router.post('/desks', createDesk);
router.get('/desks', getAllDesks);
router.get('/desks/:desk_id', getDeskById);

export default router;
