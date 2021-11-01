import { useState } from "react";

function BookFinder(props) {


  const [book, setBook] = useState('');
  const [result, setResult] = useState([])
  const apiKey = 'AIzaSyCUAkQ_kTnVDaR6bOZL_1efEXJbVWwwx6c'

  function handleChange(event) {
    const book = event.target.value;
    setBook(book)
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${book}&key=${apiKey}&maxResults=20`)
      .then(res => res.json())
      .then(data => {
        console.log(data.items)
        setResult(data.items)
      })
  }

  const searchResultsHTML = result.map(book => {
    return(
      <div className='book-card' key={book.id}>
        {book.volumeInfo.imageLinks ? <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/> : <p>No image available<br />{book.volumeInfo.title} by {book.volumeInfo.authors}</p>}
        <button onClick={() => props.addBookToList(book)}>Add to Reading List</button>
        {/* <p key={book.id}>{book.volumeInfo.description}</p> */}
      </div>
    )
  })

  // console.log(searchResultsHTML)

  return (
    <div className="book-finder">
      {/* create a form with input and button */}
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" placeholder="Search for books" />
        <button type="submit">Search</button>
      </form>
      {searchResultsHTML}
    </div>
  );
}
  
  export default BookFinder;

  // used https://www.youtube.com/watch?v=LGcgChoD_qY&t=740s as a guide for this component