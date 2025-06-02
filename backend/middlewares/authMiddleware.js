import jwt from "jsonwebtoken";
import "dotenv/config";

export const protectedRoute = (req, res, next) => {
  try {
    const token = req.headers && req.headers["authorization"].split(" ")[1];

    if (!token) {
      return res.status(401).json({
        message: "No token provided",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }

    console.log("-> Decoded Data : ", decoded);
    req.id = decoded.userId;
    req.role = decoded.role; //ADMIN or USER

    next();
  } catch (err) {
    return res.status(401).json({
      message: "Error from ProtectRoute",
    });
  }
};

export const ROLES = {
  admin: "admin",
  user: "user",
};
