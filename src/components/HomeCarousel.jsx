import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CarouselImage1 from './../assets/01_Home_page/Carousel/pexels-gustavo-fring-4173169.jpg'
import CarouselImage2 from './../assets/01_Home_page/Carousel/pexels-christina-morillo-1181605.jpg'
import CarouselImage3 from './../assets/01_Home_page/Carousel/cytonn-photography-n95VMLxqM2I-unsplash.jpg'
import './../styles/home-carousel.css'

export default function HomeCarousel() {
    return(
<Row>
        <Carousel>
            <Carousel.Item className="carousel-image bg-img-1">
                {/* <img className="" src={CarouselImage1} alt="" /> */}
                <Carousel.Caption>
                    <h3>LEARN FROM THE BEST IN THE INDUSTRY</h3>
                    <Button size="lg">Get Inspired</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image bg-img-2">
                {/* <img className="" src={CarouselImage2} alt="" /> */}
                <Carousel.Caption>
                    <h3>BRING YOUR KNOWLEDGE</h3>
                    <Button size="lg">Volunteer</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="carousel-image bg-img-3">
                {/* <img className="" src={CarouselImage3} alt="" /> */}
                <Carousel.Caption>
                    <h3>CONTRIBUTE TO STUDENTS' FUTURE</h3>
                    <Button size="lg">Donate</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
        </Row>
    )
}