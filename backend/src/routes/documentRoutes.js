const express = require("express");
const router = express.Router();
const {
  saveDocument,
  getRecentDocuments,
} = require("../controllers/documentController");
const authenticateJWT = require("../middleware/authMiddleware");

router.post("/", authenticateJWT, saveDocument); // Save document
router.get("/", authenticateJWT, getRecentDocuments); // Get recent documents

module.exports = router;
