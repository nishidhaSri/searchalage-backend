const express = require("express");
const { createColleges, getColleges } = require("../controllers/colleges");

const router = express.Router();

router.get("/", getColleges);
router.post("/create", createColleges);

module.exports = router;
