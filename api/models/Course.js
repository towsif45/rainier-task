const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        required: true,
    },
    topics: [String],
    schedule: {
        startDate: {
            type: Date,
            required: true,
        },
        endDate: {
            type: Date,
            required: true,
        },
        classDays: [String],
        classTime: {
            type: String,
        },
    },
});

module.exports = mongoose.model("Course", CourseSchema);
