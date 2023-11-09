import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './../styles/home-carousel.css'

export default function HomeCarousel() {
    return(
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
    )
}