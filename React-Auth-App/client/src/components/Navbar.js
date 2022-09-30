
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Navbar1({user , setUser}) {
    return (
        // Navbar
        <Navbar expand="lg" className='bg-primary navbar-dark py-2 '>

            {/* navbar container */}
            <Container fluid>

                {/* Navbar logo */}
                <Navbar.Brand href="/" className=' fw-bold fs-2'>React Auth App</Navbar.Brand>
                {/* Navbar logo */}

                {/* toggle button */}
                <Navbar.Toggle aria-controls="navbarScroll" />
                {/* toggle button */}

                {/* content container */}
                <Navbar.Collapse id="navbarScroll">

                    {/* nav buttons and scroll part*/}
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >

                        <Nav.Link href="/">Main Screen</Nav.Link>

                        <Nav.Link href="#action2">Link</Nav.Link>


                        <NavDropdown title="Link" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Something else here
                            </NavDropdown.Item>
                        </NavDropdown>


                        <Nav.Link href="#" disabled>

                        </Nav.Link>

                        

                    </Nav>
                    {/* nav buttons and scroll part*/}

                        {/* if user exist show sign in button else show sign out button */}

                        {
                            (localStorage.getItem("user")) 
                            ? <Nav.Link onClick={(e)=>{
                                localStorage.removeItem("user") 
                                setUser(null);
                            }
                            }  className='mx-2 btn btn-secondary px-2 py-1'  href="/signin">Sign Out</Nav.Link> 

                            : <Nav.Link  className='mx-2 btn btn-secondary px-2 py-1'  href="/signin">Sign in </Nav.Link> 
                            
                        }
                       
                        
            
                </Navbar.Collapse>
                {/* content container */}
            </Container>
            {/* navbar container */}

        </Navbar>
        // Navbar
    );
}

