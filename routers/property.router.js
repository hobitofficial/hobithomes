import express from "express";
import PropertyController from "../controllers/property.controller.js";
import verifyToken from "../middlewares/tokenverify.middleware.js";
<<<<<<< HEAD
import upload from "../middlewares/properties/multer/multer.js";
import uploadMultipleMedia from "../middlewares/properties/upload/uploadMultiples.js";
const propertycontroller = new PropertyController();
const router = express.Router();

router.post(
  "/addproperty",
  // verifyToken,
  upload.array("uploadedFiles"),
  uploadMultipleMedia,
  propertycontroller.addProperty
);
router.get(
  "/periodicProperty/:stayDuration",
  propertycontroller.periodicProperty
);
// router.get("/periodicProperty", propertycontroller.longTimeProperty);
router.get("/allProperty", propertycontroller.allProperty);
router.get("/adminProperty/:userId", propertycontroller.adminProperty);
router.get("/hostelAndPgProperty", propertycontroller.hostelAndPgProperty);
router.get("/hotelProperty", propertycontroller.hotelProperty);
router.get(
  "/houseAndStudioProperty",
  propertycontroller.houseAndStudioProperty
);
router.delete("/deleteproperty/:propertyId", propertycontroller.deleteProperty);
router.put(
  "/updateproperty/:propertyId",
  upload.array("uploadedFiles"),
  uploadMultipleMedia,
  propertycontroller.updateProperty
);
=======
const propertycontroller = new PropertyController();
const router = express.Router();

router.post("/addproperty", verifyToken, propertycontroller.addProperty);
router.get("/allproperty", propertycontroller.allProperty);
router.delete("/deleteproperty/:propertyId", propertycontroller.deleteProperty);
>>>>>>> d8bbec615171b8e35e0a0e1de7cebc6cfa2390ab

export default router;
