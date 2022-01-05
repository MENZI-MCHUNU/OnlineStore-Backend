const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const db =
  process.env.DB_TYPE +
  "://" +
  process.env.HOST +
  ":" +
  process.env.MONGO_PORT +
  "/" +
  process.env.MONGO_DB_NAME;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useFindAndModify: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log("DB connected...");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
