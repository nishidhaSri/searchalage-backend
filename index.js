const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const collRoutes = require("./routes/colleges.js");
const stuRoutes = require("./routes/students.js");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: "true" }));
app.use(cors());

const connect_url =
  "mongodb+srv://nishidha:nishidha@cluster0.bd2zl.mongodb.net/cutshot?retryWrites=true&w=majority";
const port = process.env.PORT || 8000;

mongoose
  .connect(connect_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(app.listen(port, () => console.log(`DB listening at ${port}`)))
  .catch((err) => console.log(err.message));

mongoose.set("useFindAndModify", false);

app.use("/colleges", collRoutes);
app.use("/students", stuRoutes);
