// import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
// import { Link } from 'react-router-dom'

function Navigation() {
  
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
      <Navbar.Brand href="#home">BookListBuilder</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/mylist">My List</Nav.Link>
      </Nav>
      </Container>
    </Navbar>
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