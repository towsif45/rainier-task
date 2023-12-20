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
router.get("/find/all", async (req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json(courses);
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET A SPECIFIC COURSE BY ID
router.get("/find/:id", async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);
        res.status(200).json(course);
    } catch (err) {
        res.status(500).json(err);
    }
});

// UPDATE AN EXISTING COURSE
router.put("/update/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedCourse);
    } catch (err) {
        res.status(500).json(err);
    }
});

// DELETE AN EXISTING COURSE
router.delete("/delete/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        await Course.findByIdAndDelete(req.params.id);
        res.status(200).json("Course deleted successfully");
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
