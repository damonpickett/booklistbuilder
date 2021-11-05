import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
      <Container className="footer">
        <Row>
          <Col >
            <div>
              <ul>
                <Link className='footer-link' to='/'><li>Home</li></Link>
                <Link className='footer-link' to='/mylist'><li>My List</li></Link>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
  
  export default Footer;