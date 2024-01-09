import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import { Link } from 'react-router-dom';
// import BodyImage1 from './../assets/02_Our_Program/pexels-pavel-danilyuk-6925375.jpg';
// import BodyImage2 from './../assets/02_Our_Program/pexels-tima-miroshnichenko-5439381.jpg';
// import BodyImage3 from './../assets/02_Our_Program/pexels-alexander-suhorucov-6457587.jpg';
// import BodyImage4 from './../assets/02_Our_Program/taylor-grote-UiVe5QvOhao-unsplash.jpg';
import './../styles/program.css'
import './../styles/home.css'

export default function Program() {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <div className="program-banner bg-image"></div>
            <div className="font-face-gm">
                <div className="main-headline">
                    <div className="container p-5">
                        <h2 className="body-headline font-face-gm mb-3">OUR PROGRAM</h2>
                        <p className='mb-0'>
                            The Leadership and Career Accelerator Program inspires 
                            candidates to aim for and achieve higher ambitions, 
                            empowering them to thrive in their personal and 
                            professional lives.
                        </p>
                    </div>
                </div>
                <div className="body-content program-content pb-3">
                    <div className="container">
                        <h2 className="body-headline font-face-gm pt-5 pb-3">HOW LCAP WORKS</h2>
                    </div>
                    <Container className='body-content-item pb-3'>
                        <div className="row">
                            <div className="col-lg-6 pb-3">
                                <div className="body-text">
                                <h1>1. CRAWL PHASE</h1>
                                    <p className="pt-3">
                                    Candidates will participate in workshops covering the 
                                    fundamentals of professional development: communication, 
                                    team building, leadership, and public speaking.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6 pb-3">
                                <div className="body-text">
                                    <h1>2. WALK PHASE</h1>
                                    <p className="pt-3">
                                        Candidates will be introduced to guest speakers and 
                                        workshops covering the recruiting process, resume writing, 
                                        interviewing, and networking.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>   
                    <Container className='body-content-item mb-5'>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="body-text">
                                    <h1>3. RUN PHASE</h1>
                                    <p className="pt-3">
                                        Candidates will learn technical-based skills such as Excel and 
                                        PowerPoint and gain insights into different career paths in 
                                        financial services.
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="body-text">
                                    <h1>4. GRADUATION</h1>
                                    <p className="pt-3">
                                    Upon passing the three phases, Candidates will graduate to become 
                                    RED Leaders and receive their stipend and a mentor.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Container>   
                </div>
                <Container className="mb-5 mt-5">
                    <div className="alternate-contact-footer">
                        {/* <h2 className="mb-4"><span className="highlighted-text">INTERESTED?</span> APPLY NOW TO <br />JOIN OUR EMPOWERING COMMUNITY</h2> */}
                    </div>
                    <div className="right-side container">
                        <Link to='/apply'>
                            <Button size="lg" onClick={handleScrollToTop} className="body-btn">Apply & FAQ</Button>
                        </Link>
                    </div>
                </Container>
            </div>
        </>
    )
}