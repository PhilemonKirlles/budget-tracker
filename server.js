//require
const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");
const compression = require("compression");

require ("dotenv").config()

const PORT = process.env.PORT || 3001;
const app = express();

app.use(logger("dev"));
app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/budgetTracker_db', {
  useNewUrlParser: true,
  useFindAndModify: false
});


// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App connected on http://localhost:${PORT}/`);
});