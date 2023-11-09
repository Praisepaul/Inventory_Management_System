import "./NavbarStyles.css"; 
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/icons/logo.png';
function Navbar() {
  return (
    <nav className="navbar">
        <div className="logo"><img style={{ width: '80px', height: '60px' }} src={logo}></img></div>
        <ul className="menu" style={{textDecoration: 'none'}}>
          <li><Link to={'/dashboard'}>Home</Link></li>
          <li><Link to={'/orders'}>Orders</Link></li>
          <li><Link to={'/stocks'}>Stocks</Link></li>
          <li><Link to={'/login'}>
            <Button>Logout</Button>
            </Link></li>
        </ul>
      </nav>
  )
}

export default Navbar
