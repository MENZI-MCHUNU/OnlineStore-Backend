const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const app = express();
const router = require('./REST/routes/adminRoutes');
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

//REST api routes
app.use('/',router);

app.listen(process.env.PORT, () => {
  console.log("Listening on port : " + process.env.PORT);
});
