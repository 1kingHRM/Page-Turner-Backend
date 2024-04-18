const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const corsOptions = require("./src/config/cors");
const app = express();

require("dotenv").config(); 

const routes = require("./src/routes/api.routes");

const port = process.env.PORT || 3030;

// Set up your routes and middleware here
app.use(cors(corsOptions));
app.use(express.urlencoded({ limit: "50mb", extended: false }));
app.use(express.json({ limit: "50mb", extended: true }));

// Run MongoDB
mongoose.connect(
  process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/page-turner-backend`
);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Database running Successfully");
});

// render the html file
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.use("/api", routes);

// Run Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
