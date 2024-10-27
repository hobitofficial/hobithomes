import express from "express";
import PropertyController from "../controllers/property.controller.js";
import verifyToken from "../middlewares/tokenverify.middleware.js";
const propertycontroller = new PropertyController();
const router = express.Router();

router.post("/addproperty", verifyToken, propertycontroller.addProperty);
router.get("/allproperty", propertycontroller.allProperty);
router.delete("/deleteproperty/:propertyId", propertycontroller.deleteProperty);

export default router;
