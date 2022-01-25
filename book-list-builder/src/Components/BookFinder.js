import { useState } from "react";
import { Container, Form, Button, Card, Row, Col, CardGroup } from 'react-bootstrap'

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
        setResult(data.items)
      })
  }

  const searchResultsHTML = result.map(book => {
    return(
      
          <Card className='search-results-cards' key={book.id}>
            {book.volumeInfo.imageLinks ? <Card.Img className='search-results-img' src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/> : <p>No image available<br />{book.volumeInfo.title} by {book.volumeInfo.authors}</p>}
            <Button variant='dark' className='search-results-button' onClick={() => props.addBookToList(book)}>Add to Reading List</Button>
            {/* <p key={book.id}>{book.volumeInfo.description}</p> */}
          </Card>
        
    )
  })

  

  return (
    <Container className='book-finder'>
      <Row>
        <Col>
          <div className="book-finder">
            {/* create a form with input and button */}
            <Form className='book-search-form' onSubmit={handleSubmit}>
              <Form.Control className='book-search-input' onChange={handleChange} type="text" placeholder="Search for books" />
              <Button variant='success' className='book-search-button'type="submit">Search</Button>
            </Form>
            <Row xs={1} sm={3}>
              {Array.from({ length: 1 }).map((book, idx) => (
                <Col>
                  {searchResultsHTML}
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
  
  export default BookFinder;

  // used https://www.youtube.com/watch?v=LGcgChoD_qY&t=740s as a guide for this component

  // <input onChange={handleChange} type="text" placeholder="Search for books" />