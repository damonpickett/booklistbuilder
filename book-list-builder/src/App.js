import './App.css';
import Nav from './Components/Nav';
import Instructions from './Components/Instructions';
import Footer from './Components/Footer';
import RandomQuote from './Components/RandomQuote';
import BookFinder from './Components/BookFinder';
import QuoteFinder from './Components/QuoteFinder';

function App() {
  return (
    <div className="App">
      <Nav />
      <RandomQuote />
      <Instructions />
      <BookFinder />
      <QuoteFinder />
      <Footer />
    </div>
  );
}

export default App;
