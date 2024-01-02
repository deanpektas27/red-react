import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import './../styles/home-carousel.css'

export default function HomeCarousel() {
    return(
        <Carousel>
            <Carousel.Item className="carousel-image bg-img-1">
                <Carousel.Caption>
                    <h3>CONGRATULATIONS TO CLASS 001!</h3>
                    <Button size="lg">Read their Stories</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image bg-img-2">
                <Carousel.Caption>
                    <h3>BRING YOUR KNOWLEDGE</h3>
                    <Button size="lg">Volunteer</Button>
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