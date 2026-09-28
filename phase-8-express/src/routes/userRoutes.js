const express = require("express");

const {
  registerUser,
  loginUser
} = require("../controllers/userController");

const authenticateToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", authenticateToken, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});

module.exports = router;