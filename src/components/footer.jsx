import { Link } from "react-router-dom"
import { SocialIcon } from "react-social-icons/component"
import 'react-social-icons/instagram'
import 'react-social-icons/twitter'
import 'react-social-icons/facebook'
import 'react-social-icons/linkedin'
import Logo from './../assets/black_logo.png'
import './../styles/footer.css'

export default function Footer() {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <footer className="footer gap-4">
                <div className="container">
                    {/* <div className="col-md-2 left-side">

                    </div> */}
                    <div className="row">
                        <div className="col-lg-2">
                            <img id="footer-logo" className="img-fluid d-block" src={Logo} alt="RED Logo" />
                        </div>
                        <div className="col-lg-10 footer-nav ">
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
                                {/* <li>
                                    <Link to="/donate">Donate</Link>
                                </li> */}
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                <Link to="/contact">Contact Us</Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="row">
                        <div className="socials mb-3">
                            {/* <SocialIcon bgColor="white" fgColor="black" target="_blank" url="https://www.facebook.com/" /> */}
                            <SocialIcon bgColor="white" fgColor="black" target="_blank" url="https://www.linkedin.com/company/theredinitiative/" />
                            {/* <SocialIcon bgColor="white" fgColor="black" target="_blank" url="https://www.twitter.com/theredinitiative/" /> */}
                            <SocialIcon bgColor="white" fgColor="black" target="_blank" url="https://www.instagram.com/theredinitiative/" />
                        </div>
                        <p id="footer-text">
                            © 2024 The RED Initiative. All rights reserved.
                            <br />
                            All other logos are registered trademark of their 
                            respective companies. 
                        </p>
                    </div>


                </div>
        </footer>
    )
}