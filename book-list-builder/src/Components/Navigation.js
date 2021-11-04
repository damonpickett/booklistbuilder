import {  Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  
  return (
    <div className="nav">
      <Container>
        <Row>
          <Col>
            <Link className='logo-link' to='/'><h1>BookListBuilder</h1></Link>
          </Col>
          <Col>
            <ul>
              <Link className='navbar-link' to='/'><li>Home</li></Link>
              <Link className='navbar-link' to='/mylist'><li>My List</li></Link>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )

  // return (
  //   <div className="nav">
  //     <h1>BookListBuilder</h1>
  //     <ul>
  //       <Link to='/'><li>Home</li></Link>
  //       <Link to='/mylist'><li>My Lists</li></Link>
  //     </ul>
  //   </div>
  // );
}
  
  export default Navigation;