const express = require("express");

const {
  registerUser,
  loginUser
} = require("../controllers/userController");

const authenticateToken = require("../middleware/authMiddleware");
const requireRole = require("../middleware/roleMiddleware");

const router = express.Router();

router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/me", authenticateToken, (req, res) => {
  res.json({
    message: "Protected route accessed",
    user: req.user
  });
});


router.get("/admin-test", authenticateToken, requireRole("admin"), (req, res) => {
  res.json({
    message: "Admin route accessed successfully",
    user: req.user
  });
});

module.exports = router;