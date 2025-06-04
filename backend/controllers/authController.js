import User from "../models/User.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = (userId, role) => {
  return jwt.sign({ userId, role }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });
};

export const signupUser = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;

    if (!email || !firstName || !lastName || !password) {
      return res.status(400).json({ msg: "Please fill all the fields." });
    }

    const existingMail = await User.findOne({ email });

    if (existingMail) {
      return res
        .status(400)
        .json({ msg: "Account with this mail already exists." });
    }

    const profileImageUrl = `https://api.dicebear.com/7.x/bottts/svg?seed=${firstName}${lastName}`;

    const user = new User({
      email,
      firstName,
      lastName,
      password,
      profileImageUrl,
    });

    await user.save(); //save in the DB

    const token = generateToken(user._id, user.role);

    return res.status(201).json({
      msg: "User created successfully :)",
      token: token,
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        registeredEvents: user.registeredEvents,
        profileImageUrl: user.profileImageUrl,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("ERROR - ", err);
    return res.status(400).json({ msg: "Error from RegisterUser" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ msg: "Please fill all the fields." });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        msg: "User not found",
      });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid Credentials" });
    }

    const token = generateToken(user._id, user.role);
    return res.status(200).json({
      message: "Login Successful",
      token: token,
      user: {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        registeredEvents: user.registeredEvents,
        role: user.role,
        profileImageUrl: user.profileImageUrl,
      },
    });
  } catch (err) {
    console.error("ERROR - ", err);
    return res.status(400).json({
      msg: "Error from LoginUser",
    });
  }
};

export const numberOfUsers = async (req, res) => {
  try {
    const count = await User.countDocuments();
    res.json({ count });
  } catch (err) {
    console.error("Error fetching the user count : ", err);
    res.status(500).json({ msg: "Error from numberOfUsers" });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const userData = await User.findById(id).populate({
      path: "registeredEvents",
    });

    if (!userData) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: "User fetched successfully using id",
      data: userData,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: null,
    });
  }
};
