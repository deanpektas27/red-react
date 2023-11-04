import { Link } from "react-router-dom"

export default function Navbar() {
    return (
        <nav className="nav font-face-gm">

            <Link to="/" className="site-logo">RED</Link>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/program">Our Program</Link>
                </li>
                <li>
                    <Link to="/apply">Apply & FAQ</Link>
                </li>
                <li>
                    <Link to="/get-involved">Get Involved</Link>
                </li>
                <li>
                    <Link to="/donate">Donate</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact Us</Link>
                </li>
            </ul>

        </nav>
    )
}