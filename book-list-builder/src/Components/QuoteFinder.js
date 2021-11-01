import { useState, useEffect } from "react";

function QuoteFinder() {

  // First, let's try to get it so you can search by author
  // So user types in author name --> copy structure from book finder

  const [quote, setQuote] = useState('');
  const [results, setResults] = useState([]);

  function handleChange(event) {
    const quote = event.target.value;
    setQuote(quote)
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setResults(data)
      })
  }

  const searchResultsHTML = results.map(quote => {
    return (
      <div className='quote-card' key={quote.text}>
        <p>{quote.text}</p>
        <p>{quote.author}</p>
      </div>
    )
  })

  return (
    <div className="quote-finder">
      <h2>QuoteFinder</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Search for quote"/>
        <button>Search</button>
      </form>
      {searchResultsHTML}
    </div>
  );
}
  
  export default QuoteFinder;