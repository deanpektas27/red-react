import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, Container} from "react-bootstrap";

export default function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="nav font-face-gm">
                {/* <Container> */}
                    <Navbar.Brand as={Link} to="/" className='site-logo'><img src="src/assets/red_logo.png" alt="RED Logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav className="">
                            <Nav.Link as={Link} to="/" >Home</Nav.Link>
                            <Nav.Link as={Link} to="/program" >Program</Nav.Link>
                            <Nav.Link as={Link} to="/apply" >Apply & FAQ</Nav.Link>
                            <Nav.Link as={Link} to="/get-involved" >Get Involved</Nav.Link>
                            <Nav.Link as={Link} to="/donate" >Donate</Nav.Link>
                            <Nav.Link as={Link} to="/contact" >Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                {/* </Container> */}
            </Navbar>
        </>
    )
}