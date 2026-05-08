import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // if token exist ...
  try {
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Unauthorized - Token missing",
      });
    }
    const token = authHeader.split(" ")[1];
    // verify token...
    const decoded = jwt.verify(token, process.env.JTW_SECRET);
    // Attach user data in request
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};
