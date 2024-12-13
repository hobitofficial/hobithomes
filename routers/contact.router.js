import express from "express";
import Contact from "../controllers/contact.js";
const router = express.Router();

// route for signup
router.post("/", Contact);

export default router;
