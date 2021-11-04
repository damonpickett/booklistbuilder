import { Container, Row, Col } from 'react-bootstrap'

function Instructions() {
    return (
      <Container className="instructions">
        <Row>
          <Col>
            <div>
              <h2>Welcome</h2>
              <p>Use BookListBuilder to find books and create a reading list. Not sure what you're looking for? Generate a random quote above and see if anyone's famous words leave you curious for more.</p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Instructions;

  // git remote add origin https://github.com/damonpickett/react-booklistbuilder.git
  // git branch -M main
  // git push -u origin main