import './App.css';
import Nav from './Components/Nav';
import Instructions from './Components/Instructions';
import Footer from './Components/Footer';
import RandomQuote from './Components/RandomQuote';
import BookFinder from './Components/BookFinder';
import BookList from './Components/BookList';
// import QuoteFinder from './Components/QuoteFinder';
import { useState } from "react";
import { Route } from "react-router-dom";

function App() {

  const [readingList, setReadingList] = useState([]);

  const addBookToList = (book) => {
    // console.log(book);
    setReadingList([...readingList, book])
  }

  return (
    <div className="App">
      <Nav />
      <RandomQuote />
      <Instructions />
      <Route exact path='/' render={() => <BookFinder addBookToList={addBookToList} />}/>
      <Route exact path='/' render={() => <BookList readingList={readingList} />}/>
      <Footer />
    </div>
  );
}

export default App;
