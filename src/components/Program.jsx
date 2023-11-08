import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './../styles/home.css'

export default function Program() {
    return (
        <>
            <div className="font-face-gm">
                <div className="main-headline">
                    <div className="container">
                        <h2>THE R.E.D INITIATIVE</h2>
                        <p>
                            The program cultivates disicipline, 
                            resilience, and excellence, preparing 
                            students for success in the financial 
                            services industry. Join the R.E.D Initiative 
                            on a transformative journey to unlock your
                            potential and embrace a future of opportunities.
                        </p>
                    </div>
                </div>
                <div className="body-content program-content">
                    <div className="container">
                        <h2>HOW THE PROGRAM WORKS</h2>
                    </div>
                    <Row>
                        <Col md={5}>
                            <div className="body-text">
                                <h1>1. APPLY</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor 
                                    enim incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, dunt sheitu 
                                    duis aute irure dolor in.
                                </p>
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
                                <h1>2. PREPARE</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor 
                                    enim incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, dunt sheitu 
                                    duis aute irure dolor in.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <div className="body-text">
                                <h1>3. LEARN</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor 
                                    enim incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, dunt sheitu 
                                    duis aute irure dolor in.
                                </p>
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
                                <h1>4. EXPLORE</h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur 
                                    adipiscing elit, sed do eiusmod tempor 
                                    enim incididunt ut labore et dolore magna 
                                    aliqua. Ut enim ad minim veniam, dunt sheitu 
                                    duis aute irure dolor in.
                                </p>
                            </div>
                        </Col> 
                    </Row>
                </div>
                <div>
                    <h2>INTERESTED? APPLY NOW TO JOIN OUR EMPOWERING COMMUNITY</h2>
                    <button>Contact Us</button>
                </div>
            </div>
        </>
    )
}