const mongoose = require("mongoose");
const { MONGO_URL } = require("../../config");


require("./Users");

module.exports = async function () {
  try {
    await mongoose.connect(MONGO_URL);
  } catch (err) {
    console.log("MONGO ERROR: ", err);
  }
};
