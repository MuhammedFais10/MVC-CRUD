const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/addDATA")
  .then(() => {
    console.log("Connected to the database successfully!");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

nameSchama = mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("name", nameSchama);
