const Course = require("../models/Course");
const { verifyTokenAndAdmin } = require("./verifyToken");
const router = require("express").Router();

// CREATE A COURSE
router.post("/create", verifyTokenAndAdmin, async (req, res) => {
    const newCourse = new Course(req.body);
    try {
        const savedCourse = await newCourse.save();
        res.status(201).json(savedCourse);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET A LIST OF ALL COURSES
router.get("/allcourses", async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
