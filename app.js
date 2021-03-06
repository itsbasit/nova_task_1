const express = require("express");
const connectDB = require("./config/db");
const bp = require("body-parser");
const app = express();
require("dotenv").config();

const fs = require("fs");

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));

connectDB();

// Server connection
app.listen(process.env.PORT, () => {
  console.log(`Server is running at ${process.env.PORT}`);
});

app.get("/", (req, res) => {
  res.send("Nova Internship Task 00");
});

const mime = require("mime");

// parse application/x-www-form-urlencoded
app.use(bp.urlencoded({ extended: false }));

// parse application/json
app.use(bp.json());



// Registering Routes from route folder
var userRouter = require("./routes/User");
var authRouter = require("./routes/Auth");
var actorRouter = require("./routes/Actor");
var movieRouter = require("./routes/Movie");

app.use("/register", userRouter);
app.use("/auth", authRouter);
app.use("/actors", actorRouter);
app.use("/movies", movieRouter);