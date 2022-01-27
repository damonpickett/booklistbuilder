import {  Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  
  return (
    <div className="nav">
      <Container>
        <Row>
          <Col xs={7} sm md={9}>
            <Link className='logo-link' to='/'><h1>BookListBuilder</h1></Link>
          </Col>
          <Col xs={5} sm md={3}>
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