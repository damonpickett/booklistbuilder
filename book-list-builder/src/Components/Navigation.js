import { Link } from 'react-router-dom'

function Navigation() {
  
  return (
    <div className="nav">
      <Link className='logo-link' to='/'><h1>BookListBuilder</h1></Link>
      <Link className='navbar-link' to='/mylist'><li>My List</li></Link>  
    </div>
  )
}
  
  export default Navigation;