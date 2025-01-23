import ContactFooter from "./ContactFooter";
import HomeCarousel from "./HomeCarousel";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import BodyImage1 from './../assets/01_Home_page/Final1.png';
import BodyImage2 from './../assets/01_Home_page/pexels-alexander-suhorucov-6457488-min.jpg';
import BodyImage3 from './../assets/01_Home_page/RED-05.jpg';
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
                <div className="container p-4">
                    {/* <h2 className="font-face-gm mt-4 mb-3">Become a RED Leader</h2> */}
                    <p className="mb-0">
                        The RED Initiative inspires Black and Latino college 
                        students to aim for and achieve higher ambitions, 
                        empowering them to thrive personally and professionally.
                    </p>
                </div>
            </div>
            <div className="body-content">
                <div className="container p-2">
                    <h2 className="text-center font-face-gm mt-4 mb-4">JOIN THE RED COMMUNITY</h2>
                </div>
                <Container className="body-content-item pb-4">
                    <div className="row">
                        <div className="col">
                            <div className="body-text">
                                <h2 className="underlined-title">BECOME A RED LEADER</h2>
                                <p className="pt-2" id="home-body-paragraph">
                                    Challenge yourself by applying for our transformative program. You will develop the skills and confidence needed to succeed in your career.
                                </p>
                                <Link to='/program'>
                                    <Button size="lg" onClick={handleScrollToTop} className="body-btn" id="home-btn">Learn More</Button>
                                </Link>

                            </div>
                        </div>
                        <div className="col col-image">
                            <div className="body-image">
                                <img className="d-block img-fluid" id="home-image" src={BodyImage1} alt="Body Image 1" />
                            </div>
                        </div>
                    </div>
                </Container>
                {/* <Container className="body-content-item pb-4">
                    <div className="row">
                        <div className="col col-image">
                            <div className="body-image">
                                <img className="d-block img-fluid" id="home-image" src={BodyImage2} alt="Body Image 1" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="body-text">
                                <h2 className="underlined-title">BECOME A MENTOR</h2>
                                <p className="pt-2" id="home-body-paragraph">
                                    Empower the next generation by sharing your wisdom and experiences 
                                    as a mentor to a RED Leader.
                                </p>
                                <Link to='/get-involved'>
                                    <Button size="lg" onClick={handleScrollToTop} className="body-btn" id="home-btn">Make an Impact</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Container> */}
                <Container className="body-content-item pb-5 pt-5">
                    <div className="row">
                        <div className="col col-image">
                            <div className="body-image">
                                <img className="d-block img-fluid" id="home-image" src={BodyImage3} alt="Body Image 3" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="body-text">
                                <h2 className="underlined-title">BECOME A PARTNER</h2>
                                <p className="pt-2" id="home-body-paragraph">
                                    Learn how you can tap into our diverse pool of talent. Our RED Leaders possess the expertise and drive to make a meaningful impact within your organization.
                                </p>
                                <Link to='/get-involved'>
                                    <Button size="lg" onClick={handleScrollToTop} className="body-btn" id="home-btn">Find Talent</Button>
                                </Link>

                            </div>
                        </div>
                    </div>
                </Container>
                {/* <Container className="body-content-item pb-5 pt-5">
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
                                <Button size="lg" className="body-btn">Donate</Button>
                            </div>
                        </div>
                    </div>
                </Container> */}
            </div>
            <ContactFooter />
        </>
    )
}