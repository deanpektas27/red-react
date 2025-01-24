import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './../styles/home-carousel.css'

export default function HomeCarousel() {
    return(
        <Carousel>
            <Carousel.Item className="carousel-image bg-img-1">
                <Carousel.Caption>
                    <h3>Meet the RED Leaders</h3>
                    <Link to='/stories'>
                        <Button size="lg" id="carousel-btn">Read their Stories</Button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image bg-img-2">
                <Carousel.Caption>
                    <h3>PARTNER WITH US</h3>
                    {/* <Button size="lg" id="carousel-btn" target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSdjLuI0Pg36Z5qF7Ph4WwneAaaCDizPREO9CPMZPEpnArulFg/viewform">Volunteer</Button> */}
                    <Link to='/contact'>
                        <Button size="lg" id="carousel-btn">Learn More</Button>
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            {/* <Carousel.Item className="carousel-image bg-img-3">
                <Carousel.Caption>
                    <h3>CONTRIBUTE TO STUDENTS' FUTURE</h3>
                    <Button size="lg">Donate</Button>
                </Carousel.Caption>
            </Carousel.Item> */}
        </Carousel>
    )
}