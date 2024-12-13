import multer from "multer";

// // Multer storage configuration
// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Directory to store uploaded files temporarily
//   },
//   filename: function (req, file, cb) {
//     cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
//   },
// });

// // File filter to accept only images and videos
// const fileFilter = (req, file, cb) => {
//   const allowedTypes = [
//     "image/jpeg",
//     "image/png",
//     "image/gif",
//     "video/mp4",
//     "video/mpeg",
//   ];
//   if (allowedTypes.includes(file.mimetype)) {
//     cb(null, true); // Accept file
//   } else {
//     cb(
//       new Error("Unsupported file type! Only images and videos are allowed."),
//       false
//     ); // Reject file
//   }
// };

// // Multer instance
// const upload = multer({
//   storage,
//   fileFilter,
//   limits: { fileSize: 100 * 1024 * 1024 }, // Limit file size to 100MB
// });

// export default upload;

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
export default upload;
