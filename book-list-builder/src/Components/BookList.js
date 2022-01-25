import { Container, Card, Row, Col, Button } from "react-bootstrap";

function BookList(props) {

  let myListHTML = props.readingList.map((book, index) => {
    console.log(index)
    return (
      <Card.Body className="book-list-card">
        <h3>{book.volumeInfo.title}</h3>
        <p>By {book.volumeInfo.authors}</p>
        <p><a href={book.volumeInfo.infoLink} rel='noreferrer' target='_blank'>Buy</a></p>
        <Button variant='secondary' className='book-list-button' onClick={() => props.removeBook(index)}>Remove from list</Button>
      </Card.Body>
    )
  })

  return (
    <>
      <Container>
        <Row>
          <Col lg='auto'>
            <h2>My Reading List</h2>
            {myListHTML}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BookList;