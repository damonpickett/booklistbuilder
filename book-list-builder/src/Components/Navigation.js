import {  Container, Row, Col, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Navigation() {
  
  return (
    <div className="nav">
      <Link className='logo-link' to='/'><h1>BookListBuilder</h1></Link>
    </div>
  )
}
  
  export default Navigation;