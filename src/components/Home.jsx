import ContactFooter from "./ContactFooter";
import HomeCarousel from "./HomeCarousel";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import BodyImage1 from './../assets/01_Home_page/pexels-darlene-alderson-7970846-min.jpg';
import BodyImage2 from './../assets/01_Home_page/pexels-alexander-suhorucov-6457488-min.jpg';
import BodyImage3 from './../assets/01_Home_page/pexels-thirdman-7994325-min.jpg';
import BodyImage4 from './../assets/01_Home_page/pexels-edmond-dantès-8553862-min.jpg';
import './../styles/home.css'

export default function Home() {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <HomeCarousel />
            <div className="main-headline">
                <div className="container">
                    <h2 className="font-face-gm">Become a RED Leader</h2>
                    <p>
                        The RED Initiative inspires Black and Latino college 
                        students to aim for and achieve higher ambitions, 
                        empowering them to thrive personally and professionally.
                    </p>
                </div>
            </div>
            <div className="body-content">
                <div className="container p-2">
                    <h2 className="body-headline font-face-gm p-5">JOIN THE RED COMMUNITY</h2>
                </div>
                <Container className="body-content-item pb-5">
                    <div className="row">
                        <div className="col">
                            <div className="body-text">
                                <h2 className="underlined-title">BECOME A RED LEADER</h2>
                                <p className="pt-3">
                                    Challenge yourself by applying for our transformative program.
                                </p>
                                <Link to='/program'>
                                    <Button size="lg" onClick={handleScrollToTop} className="body-btn">Learn More</Button>
                                </Link>

                            </div>
                        </div>
                        <div className="col">
                            <div className="body-image">
                                <img className="img-fluid" src={BodyImage1} alt="Body Image 1" />
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className="body-content-item pb-5 pt-5">
                    <div className="row">
                        <div className="col">
                            <div className="body-image">
                                <img className="d-block img-fluid" src={BodyImage2} alt="Body Image 1" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="body-text">
                                <h2 className="underlined-title">BECOME A MENTOR</h2>
                                <p className="pt-3">
                                    Empower the next generation by sharing your wisdom and experiences 
                                    as a mentor to a RED Leader.
                                </p>
                                <Link to='/get-involved'>
                                    <Button size="lg" onClick={handleScrollToTop} className="body-btn">Learn More</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className="body-content-item pb-5 pt-5">
                    <div className="row">
                        <div className="col">
                            <div className="body-text">
                                <h2 className="underlined-title">BECOME A PARTNER</h2>
                                <p className="pt-3">
                                    Learn how you can tap into our diverse pool of talent.
                                </p>
                                <Link to='/get-involved'>
                                    <Button size="lg" onClick={handleScrollToTop} className="body-btn">Find Talent</Button>
                                </Link>

                            </div>
                        </div>
                        <div className="col">
                            <div className="body-image">
                                <img className="d-block img-fluid" src={BodyImage3} alt="Body Image 1" />
                            </div>
                        </div>
                    </div>
                </Container>
                <Container className="body-content-item pb-5 pt-5">
                    <div className="row">
                        <div className="col">
                            <div className="body-image">
                                <img className="d-block img-fluid" src={BodyImage4} alt="Body Image 1" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="body-text">
                                <h2 className="underlined-title">MAKE A CHANGE</h2>
                                <p className="pt-3">
                                Donate to help us impact the lives of more college students.
                                <br />
                                (Coming Soon)
                                </p>
                                {/* <Button size="lg" className="body-btn">Donate</Button> */}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <ContactFooter />
        </>
    )
}