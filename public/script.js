const allButton = document.getElementById("all-quotes");
const randomButton = document.getElementById("random-quote");
const searchNameButton = document.getElementById("search-name");

const quoteContainer = document.getElementById("quote-container");

const renderQuotes = (quotes = []) => {
  if (quotes.length > 0) {
    quotes.forEach((quote) => {
      const newQuote = document.createElement("div");
      newQuote.className = "single-quote";
      newQuote.innerHTML = `
				<div>${quote.quote}</div>
				<div>${quote.person}</div>
			`;
      quoteContainer.appendChild(newQuote);
    });
  } else {
    quoteContainer.innerHTML = "<p>Your request returned no quotes.</p>";
  }
};

allButton.addEventListener("click", () => {
  fetch("/api/quotes")
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log("Request Error.");
      }
    })
    .then((response) => {
      renderQuotes(response.quotes);
    });
});
