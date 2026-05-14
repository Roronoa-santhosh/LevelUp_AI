import jwt from "jsonwebtoken";

export async function auth(
  req,
  res,
  next
) {

  try {

    // Get token
    const authHeader =
      req.headers.authorization;

    // No token
    if (!authHeader) {

      return res.status(401).json({

        success: false,
        error: "No token provided",

      });

    }

    // Extract token
    const token =
      authHeader.split(" ")[1];

    // Verify token
    const decoded =
      jwt.verify(

        token,
        process.env.JWT_SECRET

      );

    // Attach user
    req.user = decoded;

    next();

  } catch (error) {

    res.status(401).json({

      success: false,
      error: "Invalid token",

    });

  }

}