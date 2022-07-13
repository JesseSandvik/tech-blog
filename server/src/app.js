const express = require("express");
const notFound = require("./errors/notFound/notFound");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!" });
});

app.use(notFound);

module.exports = app;
