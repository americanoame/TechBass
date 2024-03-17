import { comparePassword, hashPassword } from '../helpers/authHelper.js';
import JWT from 'jsonwebtoken';

import userModel from '../models/userModel.js';

export const registerController = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all the required fields',
      });
    }

    // check existing user
    const existingUser = await userModel.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: true,
        message: 'User already existed, please login',
      });
    }

    // register user
    const hashedPassword = await hashPassword(password);

    const user = await new userModel({ name, email, password: hashedPassword }).save();

    res.status(200).json({
      success: true,
      message: 'User registered successfully',
      user,
    });
  } catch (error) {
    console.log('Error in registration',error);
    res.status(500).json({
      success: false,
      message: 'Error in registration',
      error,
    });
  }
};


// POST login
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({
        success: false,
        message: 'Please fill all the required fields',
      });
    }

    const user = await userModel.findOne({ email });
    console.log({ user });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found',
      });
    }

    // If password is not correct
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email or Password',
      });
    }

    const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    return res.status(200).json({
      success: true,
      message: 'Logged in successfully',
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    console.error('Error in login',error);
    res.status(500).json({
      success: false,
      message: 'Error in login',
      error,
    });
  }
};
