import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import './../styles/contact-footer.css'

export default function ContactFooter() {
    return (
        <Container className="mb-5 mt-5">
            <Row>
                <Col md={1}></Col>
                <Col md={5}>
                    <div className="left-side">
                        <h2 className="pt-0 pb-0 mb-0">Connect with The <span className="highlighted-text">R.E.D Initiative</span></h2>
                        <p>
                            Reach out for more information
                        </p>
                    </div>
                </Col>
                <Col md={5}>
                    <div className="right-side container">
                        <Button size="lg" className="body-btn">Contact Us</Button>
                    </div>
                </Col>
                <Col md={1}></Col>
            </Row>
        </Container>
    )
}