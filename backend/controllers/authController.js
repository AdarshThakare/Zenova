import User from "../models/User.js";
import jwt from "jsonwebtoken";
import "dotenv/config";

const generateToken = (userId, role) => {
  console.log(process.env.JWT_SECRET);
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

    const user = new User({
      email,
      firstName,
      lastName,
      password,
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
