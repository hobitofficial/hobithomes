import express from "express";
import AuthController from "../controllers/auth.controller.js";
const authcontroller = new AuthController();
const router = express.Router();

// route for signup
router.post("/signup", authcontroller.signup);

// route for login
router.post("/signin", authcontroller.signin);
router.post("/google", authcontroller.google);

export default router;
