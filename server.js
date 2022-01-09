const express = require("express");
const app = express();

const PORT = process.env.PORT || 4001;

const { quotes } = require("./data.js");
const { getRandomElement } = require("./utils");

app.use(express.static("public"));

app.get("/", (req, res, next) => {
  res.send();
});

app.get("/api/quotes", (req, res) => {
  if (req.query.person !== undefined) {
    const quotesByPerson = quotes.filter(
      (quote) => quote.person === req.query.person
    );
    res.send({
      quotes: quotesByPerson,
    });
  } else {
    res.send({
      quotes: quotes,
    });
  }
});

app.get("/api/quotes/random", (req, res, next) => {
  const randomQuote = getRandomElement(quotes);
  res.send({ randomQuote });
});

app.post("/api/quotes", (req, res) => {
  const newQuote = {
    quote: req.query.quote,
    person: req.query.person,
  };
  if (newQuote.quote && newQuote.person) {
    quotes.push(newQuote);
    res.send({ quote: newQuote });
  } else {
    res.status(400).send();
  }
  res.send("POST Request to Add-quote");
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
