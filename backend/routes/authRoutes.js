import express from "express";

import bcrypt from "bcryptjs";

import User from "../models/User.js";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post(
  "/register",

  async (req, res) => {

    try {

      const {
        name,
        email,
        password
      } = req.body;

      // Hash password
      const hashedPassword =
        await bcrypt.hash(
          password,
          10
        );

      // Create user
      const user =
        await User.create({

          name,
          email,
          password:
            hashedPassword,

        });

      res.json({

        success: true,

      });

    } catch (error) {

      res.status(500).json({

        success: false,
        error: error.message,

      });

    }

  }
);
router.post(
  "/login",

  async (req, res) => {

    try {

      const {
        email,
        password
      } = req.body;

      // Find user
      const user =
        await User.findOne({
          email,
        });

      // User not found
      if (!user) {

        return res.status(400).json({

          success: false,
          error: "User not found",

        });

      }

      // Compare password
      const isMatch =
        await bcrypt.compare(
          password,
          user.password
        );

      // Wrong password
      if (!isMatch) {

        return res.status(400).json({

          success: false,
          error: "Invalid password",

        });

      }

      // Generate token
      const token =
        jwt.sign(

          {
            id: user._id,
          },

          process.env.JWT_SECRET,

          {
            expiresIn: "7d",
          }

        );

      res.json({

        success: true,

        token,

        user: {

          id: user._id,
          name: user.name,
          email: user.email,

        }

      });

    } catch (error) {

      res.status(500).json({

        success: false,
        error: error.message,

      });

    }

  }
);
export default router;