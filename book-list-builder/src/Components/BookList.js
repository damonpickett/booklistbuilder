import { Container, Card, Row, Col, Button, CardGroup } from "react-bootstrap";

function BookList(props) {

  let myListHTML = props.readingList.map((book, index) => {
    console.log(index)
    return (
      <div className='search-results-cards' key={book.id}>
          <Card style={{ width: '12rem'}}>
            {book.volumeInfo.imageLinks ? <img className='search-results-img' src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title}/> : <p>No image available<br />{book.volumeInfo.title} by {book.volumeInfo.authors}</p>}
            <p><a href={book.volumeInfo.infoLink} rel='noreferrer' target='_blank'>Buy</a></p>
            <button className='book-list-button' onClick={() => props.removeBook(index)}>Remove from list</button>
            {/* <p key={book.id}>{book.volumeInfo.description}</p> */}
          </Card>
        </div>
    )
  })

  return (
    <>
      <Container className='book-list-container'>
        <Row>
          <Col>
            <h2>My Reading List</h2>
            <CardGroup>
              {myListHTML}
            </CardGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BookList;