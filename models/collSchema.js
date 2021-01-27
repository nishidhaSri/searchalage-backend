const mongoose = require("mongoose");

const collegesSchema = mongoose.Schema({
  cid: Number,
  name: String,
  yearFounded: Number,
  city: String,
  district: String,
  pincode: {
    type: Number,
    default: 0,
  },
  state: String,
  region: String,
  instType: String,
  country: String,
  noOfStudents: Number,
  courses: [String],
});

const CollSchema = mongoose.model("CollSchema", collegesSchema);

module.exports = CollSchema;
