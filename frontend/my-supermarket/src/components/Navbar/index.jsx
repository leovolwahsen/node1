import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Shopping App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/store">Store</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button style={{
          width: "3rem",
          height: "3rem",
          position: "relative"   
        }}
        variant='outlined-primary'
        className='rounded-circle'
        >
        <FontAwesomeIcon icon={faCartShopping} size="2x" />
        <div className='rounded-circle bg-danger d.flex justify-content-center align-item-center'>3</div>
        </Button>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;