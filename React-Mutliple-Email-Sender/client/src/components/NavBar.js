import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';




export default function NavBar() {
  return (
    <Navbar className='bg-primary sticky-top' expand="lg">
      <Container>
        <Navbar.Brand className='display-4 fs-3 text-light' href="/">Multiple Email Sender</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link className='text-light fw-light' href="/home">Home</Nav.Link>
            <Nav.Link className='text-light fw-light' href="/senderemail">Sender Email</Nav.Link>
            <Nav.Link className='text-light fw-light' href="/mailadresses">Email Adresses</Nav.Link>
            <Nav.Link className='text-light fw-light' href="/sendmessage">Send Message</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

