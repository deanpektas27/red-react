import { Link } from 'react-router-dom';
import {Navbar, Nav, NavItem, Container} from "react-bootstrap";
import Logo from '../assets/red_logo.png'

export default function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav font-face-gm">
            <Navbar.Brand className='site-logo' >
                <img src={Logo} alt="RED Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav defaultActiveKey="/">
                    <Nav.Link className="nav-link-fade-up" as={Link} eventKey="/" to="/" >Home</Nav.Link>
                    <Nav.Link className="nav-link-fade-up" as={Link} eventKey="/about" to="/about" >About</Nav.Link>
                    <Nav.Link className="nav-link-fade-up" as={Link} eventKey="/program" to="/program" >Program</Nav.Link>
                    <Nav.Link className="nav-link-fade-up" as={Link} eventKey="/apply" to="/apply" >Apply & FAQ</Nav.Link>
                    <Nav.Link className="nav-link-fade-up" as={Link} eventKey="/get-involved" to="/get-involved" >Get Involved</Nav.Link>
                    {/* <Nav.Link className="nav-link-fade-up" as={Link} eventKey="/donate" to="/donate" disabled >Donate</Nav.Link> */}
                    <Nav.Link className="nav-link-fade-up" as={Link} eventKey="/contact" to="/contact" >Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}