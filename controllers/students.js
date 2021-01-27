const StuSchema = require("../models/stuSchema");

const getStudents = async (req, res) => {
  //   res.send("THIS WORKS!!");
  try {
    const data = await StuSchema.find();
    // console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createStudents = async (req, res) => {
  //   res.send("created");
  const stu = req.body;
  //   console.log(req.body);
  const newColl = new StuSchema(stu);

  try {
    await newColl.save();

    res.status(201).json(newColl);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.getStudents = getStudents;
exports.createStudents = createStudents;
