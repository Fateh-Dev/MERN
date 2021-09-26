const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");
const db_offline = config.get("localMongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect(db_offline);
    console.log("mongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
