import './App.css'; 
import Navigation from './Components/Navigation';
import Instructions from './Components/Instructions';
import Footer from './Components/Footer';
import RandomQuote from './Components/RandomQuote';
import BookFinder from './Components/BookFinder';
import BookList from './Components/BookList';
import { useState } from "react";
import { Route } from "react-router-dom";

function App() {

  const [readingList, setReadingList] = useState([]);

  const addBookToList = (book) => {
    setReadingList([...readingList, book])
  }

  const removeBook = (indexToRemove) => {
    let newList = readingList.filter((book, index) => {
      return index !== indexToRemove
    })
    setReadingList(newList)
  }

  return (
    <div className="App">
      <div className='app-container'>
        <Navigation />
        <RandomQuote />
        <Route exact path='/' render={() => <Instructions />}/>
        <Route exact path='/' render={() => <BookFinder addBookToList={addBookToList} />}/>
        <Route exact path='/mylist' render={() => <BookList removeBook={removeBook} readingList={readingList} />}/>
        <Footer />
      </div>
    </div>
  );
}

export default App;
