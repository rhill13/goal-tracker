const mongoose = require("mongoose");
const { mongo } = require("mongoose");

const goalSchema = mongoose.Schema({
  title: String,
  text: String,
});

const Goal = mongoose.model("Goal", goalSchema);

module.exports = Goal;
