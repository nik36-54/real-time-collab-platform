// src/app.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { connectDB } = require("./config/database");
const userRoutes = require("./routes/userRoutes");
const { sequelize } = require("./config/database");
const documentRoutes = require("./routes/documentRoutes");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

connectDB(); // Connect to the database

// Sync the models with the database
const syncDB = async () => {
  await sequelize.sync();
  console.log("Database synced");
};

syncDB(); // Call the syncDB function

// Define routes
app.use("/api/users", userRoutes);
app.use("/api/documents", documentRoutes);

module.exports = app; // Export the app instance
