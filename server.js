const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

const data = require("./data.js");

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.send();
});

app.get("/api/quotes", (req, res, next) => {
  res.send(data);
});

app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
