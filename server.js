const mongoose = require("mongoose");
const express = require("express");
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

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/budgetTracker_db';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
  // useCreateIndex: true
});

mongoose.set('debug', true);

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App connected to Budget Tracker on http://localhost:${PORT}/`);
});