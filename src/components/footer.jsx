import { Link } from "react-router-dom"
import { SocialIcon } from "react-social-icons/component"
import 'react-social-icons/instagram'
import 'react-social-icons/twitter'
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'
import './../styles/footer.css'

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="site-logo left-side">
                    <img src="src/assets/black_logo.png" alt="RED Logo" />
                </div>
                <div className="right-side">
                <ul>
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
                <div className="socials">
                <SocialIcon bgColor="white" fgColor="black" url="https://www.facebook.com/" />
                <SocialIcon bgColor="white" fgColor="black" url="https://www.linkedin.com/" />
                <SocialIcon bgColor="white" fgColor="black" url="https://www.twitter.com/theredinitiative/" />
                <SocialIcon bgColor="white" fgColor="black" url="https://www.instagram.com/" />
                </div>
                    <p>
                        © 2023 The Red Initiative. All rights reserved.
                        <br />
                        All other logos are registered trademark of their 
                        respective companies  
                    </p>
                </div>
            </footer>
        </>
    )
}