import express from "express";
import UserController from "../controllers/user.controller.js";
const usercontroller = new UserController();
const router = express.Router();

// route for signup
router.post("/signup", usercontroller.signup);

// route for login
router.post("/signin", usercontroller.signin);
//route for signout
router.post("/signout", usercontroller.signout);
router.post("/google", usercontroller.google);

export default router;
