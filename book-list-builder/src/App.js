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

  const removeBook = (indexToRemove) => {
    let newList = readingList.filter((book, index) => {
      // console.log(index)
      return index !== indexToRemove
    })
    // console.log(newList)
    setReadingList(newList)
  }

  return (
    <div className="App">
      <Nav />
      <RandomQuote />
      <Route exact path='/' render={() => <Instructions />}/>
      <Route exact path='/' render={() => <BookFinder addBookToList={addBookToList} />}/>
      <Route exact path='/mylist' render={() => <BookList removeBook={removeBook} readingList={readingList} />}/>
      <Footer />
    </div>
  );
}

export default App;
