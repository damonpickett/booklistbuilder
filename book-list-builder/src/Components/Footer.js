import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
    return (
      <div className="footer">
        <div>
          <ul>
            <Link className='footer-link' to='/'><li>Home</li></Link>
            <Link className='footer-link' to='/mylist'><li>My List</li></Link>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Footer;