require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT;

// MongoDB DataBase :
const mongoose = require("mongoose");
//Mongoose connection :
require("./db/conn");
// Schema of our database :
const users = require("./model/userSchema");

// Routes
const router = require("./routes/router");

app.use(cors());
app.use(express.json());

app.use(router);

app.listen(port, () => {
  console.log(`Server is started on port ${port}`);
});
