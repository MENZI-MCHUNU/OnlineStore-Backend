const express = require("express");
//const connectDB = require("./config/db");
//const cors = require("cors");
const app = express();
const adminRouter = require('./REST/routes/adminRoutes');
const shopRouter = require('./REST/routes/shopRoutes');
//const dotenv = require("dotenv");
//dotenv.config();
const path = require('path');

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.static(path.join(__dirname,'public')))
//Connect to the database
//connectDB();

// enable CORS
//app.use(cors());

//REST api routes
app.use('/admin',adminRouter);
app.use(shopRouter);

//error page for unknown route
app.use((req,res,next) =>{
  res.status(404).sendFile(path.join(__dirname,'views', '404.html'));
})

app.listen(3000/*process.env.PORT*/, () => {
  console.log("Listening on port : ", 3000 /*+ process.env.PORT*/);
});
