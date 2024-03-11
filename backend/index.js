const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./src/routes");
const mongoose = require("mongoose");
const multer = require("multer");
const path = require("path");

app.use(express.json());
app.use(cors());

const port = 4000;
const connectionString="your connection string of mongoDB database";

// Connection to database
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// API creation
app.use("/", routes);
// Image storage engine
const storage=multer.diskStorage({
    destination:'./src/upload/images',
    filename:(req,file,cb)=>{
      return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
})
// Creating upload endpoint for images
const upload=multer({storage:storage})
app.use('/images',express.static('src/upload/images'))
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
      success: 1,
      image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});
// Start the express server
app.listen(port, (error) => {
  if (!error) {
    console.log("Server running on port " + port);
  } else {
    console.log("Error: " + error);
  }
});