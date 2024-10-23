const express = require("express");
const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/userController");
const authenticateJWT = require("../middleware/authMiddleware"); // Import the middleware

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/profile", authenticateJWT, getUserProfile); // Protect this route

module.exports = router;
