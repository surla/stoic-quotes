const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

const { quotes } = require("./data.js");
const { getRandomElement } = require("./utils");

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.send();
});

app.get("/api/quotes", (req, res, next) => {
  res.send({ quotes });
});

app.get("/api/quotes/random", (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send(randomQuote);
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
