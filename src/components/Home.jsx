import ContactFooter from "./ContactFooter"
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './../styles/home.css'

export default function Home() {
    return (
        <div className="font-face-gm">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <Carousel.Caption>
                        <h3>LEARN FROM THE BEST IN THE INDUSTRY</h3>
                        <Button size="lg">Get Inspired</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <Carousel.Caption>
                        <h3>BRING YOUR KNOWLEDGE</h3>
                        <Button size="lg">Volunteer</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src="https://images.pexels.com/photos/374598/pexels-photo-374598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    <Carousel.Caption>
                        <h3>CONTRIBUTE TO STUDENTS' FUTURE</h3>
                        <Button size="lg">Donate</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="main-headline">
                <div className="container">
                    <h2>WHERE GRIT MEETS OPPORTUNITY</h2>
                    <p>
                        The R.E.D Initiative is an empowering program 
                        designed for underrepresented college students 
                        who aspire to pursue careers in finance. 
                        It offers practical training, real-world 
                        experiences, and unwavering support.
                    </p>
                </div>
            </div>
            <div className="body-content">
                <div className="container">
                    <h2>JOIN OUR EMPOWERING COMMUNITY</h2>
                </div>
                <Row>
                    <Col md={5}>
                        <div className="body-text">
                            <h2 className="underlined-title">BECOME A MENTEE</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor 
                                dolore incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, 
                                duis aute irure dolor in.
                            </p>
                            <Button size="lg" className="body-btn">Learn More</Button>
                        </div>
                    </Col>
                    <Col md={7}>
                        <img className="d-block img-fluid" src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        <img className="d-block img-fluid" src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Col>
                    <Col md={5}>
                        <div className="body-text">
                            <h2 className="underlined-title">BECOME A MENTOR</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor 
                                dolore incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, 
                                duis aute irure dolor in.
                            </p>
                            <Button size="lg" className="body-btn">Volunteer</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={5}>
                        <div className="body-text">
                            <h2 className="underlined-title">BECOME A PARTNER</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor 
                                dolore incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, 
                                duis aute irure dolor in.
                            </p>
                            <Button size="lg" className="body-btn">Find Talent</Button>
                        </div>
                    </Col>
                    <Col md={7}>
                        <img className="d-block img-fluid" src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Col>
                </Row>
                <Row>
                    <Col md={7}>
                        <img className="d-block img-fluid" src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                    </Col>
                    <Col md={5}>
                        <div className="body-text">
                            <h2 className="underlined-title">MAKE A CHANGE</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur 
                                adipiscing elit, sed do eiusmod tempor 
                                dolore incididunt ut labore et dolore 
                                magna aliqua. Ut enim ad minim veniam, 
                                duis aute irure dolor in.
                            </p>
                            <Button size="lg" className="body-btn">Donate</Button>
                        </div>
                    </Col>
                </Row>
            </div>
            <ContactFooter />
        </div>
    )
}