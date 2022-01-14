const fetchAllButton = document.getElementById("all-quotes");
const fetchRandomButton = document.getElementById("random-quote");
const fetchPersonButton = document.getElementById("search-name");

const quoteContainer = document.getElementById("quote-container");

const resetQuotes = () => {
  quoteContainer.innerHTML = "";
};

const renderQuotes = (quotes = []) => {
  if (quotes.length > 0) {
    quotes.forEach((quote) => {
      const newQuote = document.createElement("div");
      newQuote.className = "single-quote";
      newQuote.innerHTML = `
				<div class="quote-text">${quote.quote}</div>
				<div class="attribution">- ${quote.person}</div><hr>
			`;
      quoteContainer.appendChild(newQuote);
    });
  } else {
    quoteContainer.innerHTML = "<p>Your request returned no quotes.</p>";
  }
};

fetchAllButton.addEventListener("click", () => {
  resetQuotes();
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

fetchRandomButton.addEventListener("click", () => {
  resetQuotes();
  fetch("/api/quotes/random")
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response.json();
      } else {
        console.log("Request Error.");
      }
    })
    .then((response) => {
      renderQuotes([response.randomQuote]);
    });
});

fetchPersonButton.addEventListener("click", () => {
  resetQuotes();
  const person = document.getElementById("person").value;
  fetch(`/api/quotes?person=${person}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        console.log(`Request Error.`);
      }
    })
    .then((response) => {
      renderQuotes(response.quotes);
    });
});
