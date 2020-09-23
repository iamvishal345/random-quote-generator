import React from "react";
import "./App.scss";

import QuoteBox from "./components/quote-box";

function App() {
  return (
    <div className="container">
      <QuoteBox />
      <p style={{ color: "#ffff" }}>
        {"By "}
        <a
          style={{ textDecoration: "none", color: "#ffff" }}
          id="tweet-quote"
          href="https://www.linkedin.com/in/vishal345/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vishal
        </a>
      </p>
      <p style={{ color: "#ffff" }}>
        {"Using "}
        <a
          style={{ textDecoration: "none", color: "#ffff" }}
          id="tweet-quote"
          href="https://github.com/lukePeavey/quotable"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quotable API
        </a>
      </p>
    </div>
  );
}

export default App;
