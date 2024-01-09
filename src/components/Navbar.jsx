import { Link, useLocation } from 'react-router-dom';
import {Navbar, Nav, NavItem, Container} from "react-bootstrap";
import Logo from '../assets/red_logo.png'

export default function NavBar() {
    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    console.log(splitLocation)
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav font-face-gm">
            <Link to="/" className={splitLocation[1] === "" ? "active" : ""}>
                <Navbar.Brand className='site-logo' >
                    <img src={Logo} alt="RED Logo" />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav defaultActiveKey="/">
                    <Nav.Link className={splitLocation[1] === "" ? "active" : ""} as={Link} to="/" >Home</Nav.Link>
                    <Nav.Link className={splitLocation[1] === "about" ? "active" : ""} as={Link} to="/about" >About</Nav.Link>
                    <Nav.Link className={splitLocation[1] === "program" ? "active" : ""} as={Link} to="/program" >Program</Nav.Link>
                    <Nav.Link className={splitLocation[1] === "apply" ? "active" : ""} as={Link} to="/apply" >Apply & FAQ</Nav.Link>
                    <Nav.Link className={splitLocation[1] === "get-involved" ? "active" : ""} as={Link} to="/get-involved" >Get Involved</Nav.Link>
                    {/* <Nav.Link className="nav-link-fade-up" as={Link} eventKey="/donate" to="/donate" disabled >Donate</Nav.Link> */}
                    <Nav.Link className={splitLocation[1] === "contact" ? "active" : ""} as={Link} eventKey="/contact" to="/contact" >Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}