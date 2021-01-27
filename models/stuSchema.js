const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  sid: Number,
  name: String,
  yearOfBatch: Number,
  cid: Number,
  skills: String,
});

const StuSchema = mongoose.model("StuSchema", studentSchema);

module.exports = StuSchema;
