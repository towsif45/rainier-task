const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

// mongoose.connect()

app.listen(5050, () => {
    console.log("Server running...");
});
