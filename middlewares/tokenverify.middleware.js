import jwt, { decode } from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token; // Extract token from cookie
  if (!token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Decode JWT token
    req.userId = decoded.id; // Store userId in the request
    next(); // Pass control to the next middleware
  } catch (err) {
    return res.status(400).json({ message: "Invalid token." });
  }
};

export default verifyToken;
