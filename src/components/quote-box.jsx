import React from "react";
// import { ReactComponent as Quote } from "../asset/quote.svg";
import { ReactComponent as Twitter } from "../asset/twitter.svg";
// import { ReactComponent as Facebook } from "../asset/facebook.svg";
const colorArr = [
  "#683b47",
  "#583280",
  "#843147",
  "#0a3e4b",
  "#215940",
  "#084341",
  "#657a00",
  "#3d1e7b",
  "#65421d",
  "#2d545e",
  "#161748",
  "#3c6f3c",
  "#091f36",
  "#232d3a",
  "#9e363a",
  "#7d4608",
  "#c53211",
  "#2e3830",
  "#065c6f",
  "#15675a",
];
class QuoteBox extends React.Component {
  constructor() {
    super();
    this.state = {
      randomQuote: null,
    };
  }
  componentDidMount() {
    fetch("https://api.quotable.io/random")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        this.setState({
          randomQuote: res,
          color: colorArr[Math.floor(Math.random() * 21)],
        });
      })
      .catch((err) => {
        console.log("Error occurred while getting quote", err.message);
      });
  }
  fetchQuote = (e) => {
    fetch("https://api.quotable.io/random")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        this.setState({
          randomQuote: res,
          color: colorArr[Math.floor(Math.random() * 21)],
        });
      })
      .catch((err) => {
        console.log("Error occurred while getting quote", err.message);
      });
  };
  render() {
    const color = this.state.color ? this.state.color : "#8a2be2";
    document.body.style.backgroundColor = color;
    return (
      <div id="quote-box">
        <div id="quote-text">
          {/* <Quote className="left-quote" /> */}
          <p id="text" style={{ color: color }}>
            {this.state.randomQuote
              ? this.state.randomQuote.content
              : "Any app that can be written in JavaScript, will eventually be written in JavaScript."}
          </p>
        </div>
        <div id="author" style={{ color: color }}>
          -
          {this.state.randomQuote ? this.state.randomQuote.author : "Anonymous"}
        </div>
        <div className="buttons">
          <a
            style={{ backgroundColor: color }}
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text=${
              this.state.randomQuote
                ? this.state.randomQuote.content
                : "Quote not available yet"
            }`}
            target="_blank"
            rel="noopener noreferrer"
            className="tweet-quote"
            title="Tweet this quote"
          >
            <Twitter />
          </a>
          {/* <a
            id="facebook-quote"
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="tweet-quote ml-5"
          >
            <Facebook />
          </a> */}
          <button
            style={{ backgroundColor: color }}
            onClick={this.fetchQuote}
            id="new-quote"
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
