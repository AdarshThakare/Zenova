import express from "express";
import {
  createEvent,
  deleteEvent,
  endEvent,
  getAllEvents,
  getEventById,
  getRegisteredEvents,
  registerUser,
  startEvent,
  updateEvent,
} from "../controllers/eventController.js";
import { protectedRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/", protectedRoute, getAllEvents); //✅
router.get("/:eventId", protectedRoute, getRegisteredEvents); //✅
router.get("/id/:eventId", protectedRoute, getEventById); //✅

router.post("/create", protectedRoute, createEvent); //✅
router.put("/edit/:eventId", protectedRoute, updateEvent);
router.delete("/delete/:eventId", protectedRoute, deleteEvent);

router.put("/register/:eventId", protectedRoute, registerUser); //✅
router.put("/start/:eventId", protectedRoute, startEvent); //✅
router.put("/end/:eventId", protectedRoute, endEvent); //✅

export default router;
