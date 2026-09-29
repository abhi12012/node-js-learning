const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../config/env");

function authenticateToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Authentication required"
    });
  }

  const parts = authHeader.trim().split(/\s+/);

  if (parts.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({
      message: "Invalid authorization format"
    });
  }

  const token = parts[1].replace(/^"|"$/g, "");

  

  try {
    const decoded = jwt.verify(token, JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    console.log("JWT verify error:", error.message);

    return res.status(401).json({
      message: "Invalid or expired token"
    });
  }
}

module.exports = authenticateToken;