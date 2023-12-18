const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// Routes
const authRoute = require("./routes/authentication");

app.use("/api/auth", authRoute);

// mongoose.connect()

app.listen(5050, () => {
    console.log("Backend server running...");
});
