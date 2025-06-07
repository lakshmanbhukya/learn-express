const express = require("express");
const router = express.Router();
const Student = require("../models/Student");

// Get all students
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Error fetching students" });
  }
});

// Get single student
router.get("/:id", async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ error: "Error fetching student" });
  }
});

// Create student
router.post("/", async (req, res) => {
  try {
    const { name, email, dob } = req.body;
    const student = await Student.create({ name, email, dob });
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ error: "Error creating student" });
  }
});

// Update student
router.put("/:id", async (req, res) => {
  try {
    const { name, email, dob } = req.body;
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { name, email, dob },
      { new: true, runValidators: true }
    );
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.json(student);
  } catch (error) {
    res.status(400).json({ error: "Error updating student" });
  }
});

// Delete student
router.delete("/:id", async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: "Error deleting student" });
  }
});

module.exports = router;
