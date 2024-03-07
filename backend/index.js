const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database connection with mongodb
mongoose.connect("mongodb+srv://theyashwairagade:Password%40123@cluster0.n5u8jpr.mongodb.net/shopper", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// API creation
app.get("/", (req, res) => {
  res.send("Express app is running");
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port " + port);
  } else {
    console.log("Error: " + error);
  }
});
