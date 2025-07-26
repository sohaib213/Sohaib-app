import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function AppNavbar() {


  const cartN = useSelector(state => state.cart.length);

  return (
    <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
      <Container>
        <Link className='navbar-brand' to="/">CartApp</Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='nav-link' to="/products">Products</Link>
            <Link className='nav-link' to="/cart">Cart {cartN > 0 && cartN}</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;