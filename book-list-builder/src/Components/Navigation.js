import {  Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  
  return (
    <div className="nav">
      <Container>
        <Row>
          <Col xs sm md={8}>
            <Link className='logo-link' to='/'><h1>BookListBuilder</h1></Link>
          </Col>
          <Col xs sm md={4}>
            <ul>
              <Link className='navbar-link' to='/mylist'><li>My List</li></Link>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
  
  export default Navigation;