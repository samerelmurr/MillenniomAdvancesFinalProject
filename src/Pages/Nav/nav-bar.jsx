import "./nav-bar.css"
import logo from "./MillenniomLogoLQ2 1.png"
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {
    return (
        <Navbar bg ="logoPink" variant="dark" sticky="top" expand="md">
            <Container>
                <Navbar.Brand><img src={logo} alt="logo" width="40px" height="50px"/>{' '} 
                Millenniom</Navbar.Brand>

                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/AboutUS">AboutUS</Nav.Link>
                        <Nav.Link href="/Login">Login</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                
                
            </Container>
        </Navbar>
    );
  }
  
  export default NavBar;
  