const express = require("express");
const errorHandler = require("./errors/errorHandler/errorHandler");
const notFound = require("./errors/notFound/notFound");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.use(notFound);

app.use(errorHandler);

module.exports = app;
