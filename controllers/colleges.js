const CollSchema = require("../models/collSchema");

const getColleges = async (req, res) => {
  //   res.send("THIS WORKS!!");
  try {
    const data = await CollSchema.find();
    // console.log(data);
    res.status(200).json(data);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createColleges = async (req, res) => {
  //   res.send("created");
  const coll = req.body;
  //   console.log(req.body);
  const newColl = new CollSchema(coll);

  try {
    await newColl.save();

    res.status(201).json(newColl);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.getColleges = getColleges;
exports.createColleges = createColleges;
