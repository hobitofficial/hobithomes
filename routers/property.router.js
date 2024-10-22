import express from "express";
import PropertyController from "../controllers/property.controller.js";
const propertycontroller = new PropertyController();
const router = express.Router();

router.post("/addproperty", propertycontroller.addProperty);

export default router;
