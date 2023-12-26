import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import BodyImage1 from './../assets/02_Our_Program/pexels-pavel-danilyuk-6925375.jpg';
import BodyImage2 from './../assets/02_Our_Program/pexels-tima-miroshnichenko-5439381.jpg';
import BodyImage3 from './../assets/02_Our_Program/pexels-alexander-suhorucov-6457587.jpg';
import BodyImage4 from './../assets/02_Our_Program/taylor-grote-UiVe5QvOhao-unsplash.jpg';
import './../styles/program.css'
import './../styles/home.css'

export default function Program() {
    return (
        <>
            <div className="program-banner bg-image"></div>
            <div className="font-face-gm">
                <div className="main-headline">
                    <div className="container">
                        <h2 className="font-face-gm">THE R.E.D INITIATIVE</h2>
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
                    <div className="container p-2">
                        <h2 className="body-headline font-face-gm p-5">HOW THE PROGRAM WORKS</h2>
                    </div>
                    <Container className='body-content-item pb-5'>
                        <div className="row">
                            <div className="col">
                                <div className="body-text">
                                <h1>1. APPLY</h1>
                                    <p className="pt-3">
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit, sed do eiusmod tempor 
                                        enim incididunt ut labore et dolore magna 
                                        aliqua. Ut enim ad minim veniam, dunt sheitu 
                                        duis aute irure dolor in.
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <div className="body-image">
                                    <img className="d-block img-fluid" src={BodyImage1} alt="" />
                                </div>
                            </div>
                        </div>
                    </Container>   
                    <Container className='body-content-item pb-5 pt-5'>
                        <div className="row">
                            <div className="col">
                                <div className="body-image">
                                    <img className="d-block img-fluid" src={BodyImage2} alt="" />
                                </div>
                            </div>
                            <div className="col">
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
                            </div>
                        </div>
                    </Container>
                    <Container className='body-content-item pb-5 pt-5'>   
                        <div className="row">
                            <div className="col">
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
                            </div>
                            <div className="col">
                                <div className="body-image">
                                    <img className="d-block img-fluid" src={BodyImage3} alt="" />
                                </div>
                            </div>
                        </div>
                    </Container>
                    <Container className='body-content-item pb-5 pt-5'>
                        <div className="row">
                            <div className="col">
                                <div className="body-image">
                                    <img className="d-block img-fluid" src={BodyImage4} alt="" />
                                </div>
                            </div>
                            <div className="col">
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
                            </div>
                        </div>
                    </Container>    
                </div>
                <Container className="mb-5 mt-5">
                    <div className="alternate-contact-footer">
                        <h2 className="mb-4"><span className="highlighted-text">INTERESTED?</span> APPLY NOW TO <br />JOIN OUR EMPOWERING COMMUNITY</h2>
                    </div>
                    <div className="right-side container">
                        <Button size="lg" className="body-btn">Contact Us</Button>
                    </div>
                    <button>Contact Us</button>
                </Container>
            </div>
        </>
    )
}