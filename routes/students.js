const express = require("express");
const { createStudents, getStudents } = require("../controllers/students");

const router = express.Router();

router.get("/", getStudents);
router.post("/create", createStudents);

module.exports = router;
