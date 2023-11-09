import ContactFooter from "./ContactFooter";
import HomeCarousel from "./HomeCarousel";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import BodyImage1 from './../assets/01_Home_page/pexels-darlene-alderson-7970846.jpg';
import BodyImage2 from './../assets/01_Home_page/pexels-alexander-suhorucov-6457488.jpg';
import BodyImage3 from './../assets/01_Home_page/pexels-thirdman-7994325.jpg';
import BodyImage4 from './../assets/01_Home_page/pexels-edmond-dantès-8553862.jpg';
import './../styles/home.css'

export default function Home() {
    return (
        <>
            <HomeCarousel />
            <div className="main-headline">
                <div className="container">
                    <h2 className="font-face-gm">WHERE GRIT MEETS OPPORTUNITY</h2>
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
                <div className="container p-2">
                    <h2 className="body-headline font-face-gm p-5">JOIN OUR EMPOWERING COMMUNITY</h2>
                </div>
                <Container className="body-content-item pb-5">
                    <div className="body-text">
                        <h2 className="underlined-title">BECOME A MENTEE</h2>
                        <p className="pt-3">
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            dolore incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, 
                            duis aute irure dolor in.
                        </p>
                        <Button size="lg" className="body-btn">Learn More</Button>
                    </div>
                    <div className="body-image">
                        <img className="d-block img-fluid" src={BodyImage1} alt="Body Image 1" />
                    </div>
                </Container>
                <Container className="body-content-item pb-5 pt-5">
                    <div className="body-image">
                        <img className="d-block img-fluid" src={BodyImage2} alt="Body Image 1" />
                    </div>
                    <div className="body-text">
                        <h2 className="underlined-title">BECOME A MENTOR</h2>
                        <p className="pt-3">
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            dolore incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, 
                            duis aute irure dolor in.
                        </p>
                        <Button size="lg" className="body-btn">Learn More</Button>
                    </div>
                </Container>
                <Container className="body-content-item pb-5 pt-5">
                    <div className="body-text">
                        <h2 className="underlined-title">BECOME A PARTNER</h2>
                        <p className="pt-3">
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            dolore incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, 
                            duis aute irure dolor in.
                        </p>
                        <Button size="lg" className="body-btn">Find Talent</Button>
                    </div>
                    <div className="body-image">
                        <img className="d-block img-fluid" src={BodyImage3} alt="Body Image 1" />
                    </div>
                </Container>
                <Container className="body-content-item pb-5 pt-5">
                    <div className="body-image">
                        <img className="d-block img-fluid" src={BodyImage4} alt="Body Image 1" />
                    </div>
                    <div className="body-text">
                        <h2 className="underlined-title">MAKE A CHANGE</h2>
                        <p className="pt-3">
                            Lorem ipsum dolor sit amet, consectetur 
                            adipiscing elit, sed do eiusmod tempor 
                            dolore incididunt ut labore et dolore 
                            magna aliqua. Ut enim ad minim veniam, 
                            duis aute irure dolor in.
                        </p>
                        <Button size="lg" className="body-btn">Donate</Button>
                    </div>
                </Container>
            </div>
            <ContactFooter />
        </>
    )
}