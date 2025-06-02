import express from "express";
import {
  loginUser,
  numberOfUsers,
  signupUser,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", signupUser);
router.post("/login", loginUser);
router.get("/count", numberOfUsers);

export default router;
