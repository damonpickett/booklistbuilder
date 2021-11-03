import { useState, useEffect } from "react";

function RandomQuote() {

  // create a useState
  const [randomQuote, setRandomQuote] = useState('');


  // Call the api - makeAPICall - fetch within this function
  const makeAPICall = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        setRandomQuote(data[Math.floor(Math.random()*data.length)])
      })
  }

  // console.log(randomQuote)

  // create a useEffect
  useEffect(() => {
    makeAPICall();
  }, [])

  return (
    <div className="random-quote">
      <h2>Random Quote</h2>
      <p>{randomQuote.text}</p>
      <p>{randomQuote.author}</p>
      <button onClick={makeAPICall}>New Quote</button>
    </div>
  );
  }
  
  export default RandomQuote;

  // put api calls in makeAPICall and then fetch within that function. 
  // Set the state after the fetch. 
  // Call the makeAPIFunction within useEffect to stop the page from rerendering