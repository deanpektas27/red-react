import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from 'react-router-dom';
import './../styles/contact-footer.css'

export default function ContactFooter() {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <Container className="mb-5 mt-5">
            <Row>
                <Col md={1}></Col>
                <Col md={5}>
                    <div className="left-side">
                        <h2 className="pt-0 pb-0 mb-0">Connect with The <span className="highlighted-text">RED Initiative</span></h2>
                        <p id="contactfooter-p">
                            Reach out for more information
                        </p>
                    </div>
                </Col>
                <Col md={5}>
                    <div className="right-side container">
                        <Link to='/contact'>
                            <Button size="lg" onClick={handleScrollToTop} className="body-btn">Contact Us</Button>
                        </Link>
                    </div>
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>
    )
}