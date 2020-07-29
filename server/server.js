const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

const goalsRouter = require("./routes/goals-routes");

const app = express();

app.use(bodyParser.json());

app.use(goalsRouter);

app.use((req, res, next) => {
  res.send("Page not found...");
});

// Connect to mongodb using connection string located in .env file
// Once successfully connected, listen on port 5000
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", () => console.log("Failed"));
db.once("open", () => {
  console.log("Connected to database...");
  app.listen(process.env.PORT_NUM, () =>
    console.log(`Listening on port ${process.env.PORT_NUM}`)
  );
});
