import { Link, useLocation } from 'react-router-dom';
import {Navbar, Nav, NavItem, Container} from "react-bootstrap";
import Logo from '../assets/red_transparent_logo.png'

export default function NavBar() {

    const removeActive = () => {
        let activeNavBtn = document.querySelector('.active');
        console.log(activeNavBtn);
        activeNavBtn.classList.remove('nav-link active');
        console.log(activeNavBtn);
    }

    //assigning location variable
    const location = useLocation();

    //destructuring pathname from location
    const { pathname } = location;

    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    console.log(splitLocation);
    
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" className="nav font-face-gm">
            <Link to="/" className={splitLocation[1] === "" ? "active" : ""} as={Link} eventKey="/" onClick={removeActive}>
                <Navbar.Brand className='site-logo' >
                    <img src={Logo} alt="RED Logo" />
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav defaultActiveKey="/">
                    <Nav.Link className={splitLocation[1] === "" ? "active" : ""} as={Link} to="/" eventKey="/" >Home</Nav.Link>
                    <Nav.Link className={splitLocation[1] === "about" ? "active" : ""} as={Link} to="/about" eventKey="/about" >About</Nav.Link>
                    <Nav.Link className={splitLocation[1] === "program" ? "active" : ""} as={Link} to="/program" eventKey="/program" >Program</Nav.Link>
                    <Nav.Link className={splitLocation[1] === "apply" ? "active" : ""} as={Link} to="/apply" eventKey="/apply" >Apply & FAQ</Nav.Link>
                    <Nav.Link className={splitLocation[1] === "get-involved" ? "active" : ""} as={Link} to="/get-involved" eventKey="/get-involved" >Get Involved</Nav.Link>
                    <Nav.Link className={splitLocation[1] === "donate" ? "active" : ""} as={Link} eventKey="/donate" to="https://secure.givelively.org/donate/resilience-excellence-and-diversity-initiative-inc" target='_blank' >Donate</Nav.Link>
                    <Nav.Link className={splitLocation[1] === "contact" ? "active" : ""} as={Link} to="/contact" eventKey="/contact" >Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}