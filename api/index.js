const express = require("express");
const mongoose = require("mongoose");
const app = express();

const MONGODB_URL =
    "mongodb+srv://admin:admin1234@cluster0.kjgiv7q.mongodb.net/?retryWrites=true&w=majority";

mongoose
    .connect(MONGODB_URL)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(express.json());

// Routes
const authRoute = require("./routes/authentication");
const courseRoute = require("./routes/course");

app.use("/api/auth", authRoute);
app.use("/api/course", courseRoute);

app.listen(5050, () => {
    console.log("Backend server running...");
});
