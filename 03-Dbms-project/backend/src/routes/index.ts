import express, { Router } from "express";
const router = Router();
import userRouter from "./users"

router.use('/users', userRouter);

export default router;