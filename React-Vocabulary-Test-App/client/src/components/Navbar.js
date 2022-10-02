import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <Navbar className='bg-primary navbar-dark  sticky-top' expand="lg">
      <Container  className='align-self-center'>
        <Navbar.Brand className=" rounded fs-1  fw-bold" href="/home">Vocabulary App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='text-light fw-bold border border-2 rounded m-1 text-center' href="/home">Home</Nav.Link>
            <Nav.Link className='text-light fw-bold border border-2 rounded m-1 text-center' href="/addword">Add Word</Nav.Link>
            <Nav.Link className='text-light fw-bold border border-2 rounded m-1 text-center' href="/mywords">My Words</Nav.Link>
            <Nav.Link className='text-light fw-bold border border-2 rounded m-1 text-center' href="/test">Test</Nav.Link>
            <Nav.Link className='text-light fw-bold border border-2 rounded m-1 text-center' onClick={(e)=>{window.open("https://github.com/fevziatanoglu/React-Projects");}}>GitHub</Nav.Link>

            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;