import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function Footer() {
    return (
      <Container>
        <div className="footer">
          <ul>
            <Link to='/'><li>Home</li></Link>
            <Link to='/mylist'><li>My Lists</li></Link>
          </ul>
        </div>
      </Container>
    );
  }
  
  export default Footer;