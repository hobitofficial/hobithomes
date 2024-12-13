import dotenv from "dotenv";
import cloudinary from "cloudinary";
import multer from "multer";
dotenv.config();

// Cloudinary configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});
const cloudinaryInstance = cloudinary.v2;

const uploadMultipleMedia = async (req, res, next) => {
  try {
    // Create a folder structure based on email, property name, and location
    // const folderPath = `${email}/${propertyName}/${location}`;

    // Function to upload a single file to Cloudinary
    const uploadFileToCloudinary = (file) => {
      return new Promise((resolve, reject) => {
        const uniqueFileName = `${Date.now()}-${file.originalname}`;
        const uploadStream = cloudinaryInstance.uploader.upload_stream(
          {
            resource_type: "auto", // Auto-detect image or video
            // public_id: `${folderPath}/${uniqueFileName}`,
          },
          (error, result) => {
            if (error) {
              return reject(error);
            }
            resolve(result);
          }
        );

        // Use the file buffer to upload
        uploadStream.end(file.buffer);
      });
    };

    // Upload each file to Cloudinary
    const mediaUrls = [];
    for (const file of req.files) {
      const result = await uploadFileToCloudinary(file);
      mediaUrls.push({
        id: result.asset_id,
        url: result.secure_url,
        type: result.resource_type,
      });
    }
    req.uploadedFiles = mediaUrls;
    next();
    // Send a response with the uploaded file URLs
  } catch (error) {
    console.error("Error uploading files:", error);
    res.status(500).send("Error uploading files");
  }
};

export default uploadMultipleMedia;
