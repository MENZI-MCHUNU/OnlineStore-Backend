const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//Connect to the database
connectDB();

// enable CORS
app.use(cors());

app.listen(process.env.PORT, () => {
  console.log("Listening on port : " + process.env.PORT);
});
