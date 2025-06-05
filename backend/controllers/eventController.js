import { ROLES } from "../middlewares/authMiddleware.js";
import Event from "../models/Event.js";
import User from "../models/User.js";

export const createEvent = async (req, res) => {
  if (req.role !== ROLES.admin) {
    return res.status(403).json({
      msg: "Users are not allowed to create an event",
    });
  }

  const userId = req.id;
  const { title, description, date, time, image } = req.body;

  // Basic validation for image URL
  if (!image.startsWith("http")) {
    return res.status(400).json({ message: "Invalid image URL" });
  }

  if (!title || !description || !date || !time || !image) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const event = await Event.create({
      title,
      description,
      date,
      time,
      image,
      creator: userId,
    });

    return res.status(201).json({
      msg: "Event created successfully",
      data: event,
    });
  } catch (err) {
    console.error("ERROR - ", err);
    return res.status(500).json({ msg: "Problem in CreateEvent" });
  }
};

export const updateEvent = async (req, res) => {
  if (req.role !== ROLES.admin) {
    return res.status(403).json({
      msg: "Users are not allowed to update an event",
    });
  }

  const { eventId } = req.params;
  const { title, description, date, time, image } = req.body;

  if (!image.startsWith("http")) {
    return res.status(400).json({ message: "Invalid image URL" });
  }

  if (!title || !description || !date || !time || !image) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        title,
        description,
        date,
        time,
        image,
      },
      { new: true } // return the updated document
    );

    if (!updatedEvent) {
      return res.status(404).json({ msg: "Event not found" });
    }

    return res.status(200).json({
      msg: "Event updated successfully",
      data: updatedEvent,
    });
  } catch (err) {
    console.error("ERROR - ", err);
    return res.status(500).json({ msg: "Problem in UpdateEvent" });
  }
};

export const deleteEvent = async (req, res) => {
  if (req.role !== ROLES.admin) {
    return res.status(403).json({
      msg: "Users are not allowed to delete an event",
    });
  }

  const { eventId } = req.params;
  const event = await Event.findById(req.params.eventId);

  try {
    const deletedEvent = await Event.findByIdAndDelete(eventId);

    if (!deletedEvent) {
      return res.status(404).json({ msg: "Event not found" });
    }

    //delete image from cloudinary as well
    if (event.image & event.image.includes("cloudinary")) {
      try {
        const publicId = event.image.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(publicId);
      } catch (error) {
        console.error("Error deleting image from Cloudinary:", error);
      }
    }

    return res.status(200).json({
      msg: "Event deleted successfully",
      data: deletedEvent,
    });
  } catch (err) {
    console.error("ERROR - ", err);
    return res.status(500).json({ msg: "Problem in DeleteEvent" });
  }
};

export const registerUser = async (req, res) => {
  const userId = req.id;
  const { eventId } = req.params;

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ msg: "Event not found" });
    }

    const isUserAlreadyRegistered = event.registeredUsers.some(
      (user) => user.toString() === userId
    );

    if (isUserAlreadyRegistered) {
      return res
        .status(400)
        .json({ msg: "User has already registered for this event." });
    }

    event.registeredUsers.push(userId);
    await event.save();

    const user = await User.findById(userId);
    user.registeredEvents.push(eventId);
    await user.save();

    return res
      .status(200)
      .json({ msg: "User registered to the event successfully.", data: user });
  } catch (err) {
    console.error("ERROR - ", err);
    return res.status(500).json({ msg: "Problem in Registering User" });
  }
};

export const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find()
      .populate({ path: "registeredUsers", select: "firstName LastName" })
      .sort({ createdAt: -1 });

    return res.status(200).json({
      msg: "Events fetched successfully.",
      data: events,
    });
  } catch (err) {
    console.error("ERROR - ", err);
    return res.status(500).json({ msg: "Problem in getting the events" });
  }
};

//TODO : USER WANTS TO UNREGISTER

export const getRegisteredEvents = async (req, res) => {
  const userId = req.id;
  try {
    const events = await User.findById(userId)
      .populate("registeredEvents")
      .sort({ createdAt: -1 });

    if (events.registeredEvents.length <= 0) {
      return res.status(404).json({
        msg: "No Events found",
      });
    }

    return res.status(200).json({
      msg: "Registed events fetched successfully.",
      data: events.registeredEvents,
    });
  } catch (err) {
    console.error("ERROR - ", err);
    return res.status(500).json({ msg: "Problem in gettingRegisteredUser" });
  }
};

export const getEventById = async (req, res) => {
  const { eventId } = req.params;

  try {
    const eventData = await Event.findById(eventId).populate({
      path: "registeredUsers",
      select: "firstName lastName role profileImageUrl",
    });

    if (!eventData) {
      return res.status(404).json({
        success: false,
        message: "Event not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Event fetched successfully using id",
      data: eventData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};

export const startEvent = async (req, res) => {
  if (req.role !== ROLES.admin) {
    return res.status(403).json({
      msg: "You are not allowed to start an event.",
    });
  }

  const { eventId } = req.params;

  try {
    await Event.findByIdAndUpdate(eventId, { status: "started" });
    return res.status(200).json({ msg: "Event Started Successfully." });
  } catch (err) {
    console.error("ERROR is - ", err);
    return res.status(500).json({ msg: "Problem at startEvent" });
  }
};

export const endEvent = async (req, res) => {
  if (req.role !== ROLES.admin) {
    return res.status(403).json({
      msg: "You are not allowed to start an event.",
    });
  }

  const { eventId } = req.params;

  try {
    await Event.findByIdAndUpdate(eventId, { status: "ended" });
    return res
      .status(200)
      .json({ msg: "Event ended Successfully.", succrss: true });
  } catch (err) {
    console.error("ERROR is - ", err);
    return res.status(500).json({ msg: "Problem at ant", succrss: false });
  }
};
