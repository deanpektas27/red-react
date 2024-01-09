import { Link } from 'react-router-dom';
import ContactFooter from "./ContactFooter"
import Button from "react-bootstrap/Button"
import './../styles/involve.css'

export default function Involve() {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <div className="font-face-gm">
            <div className="involve-banner involve-bg-image"></div>
            <div className="main-headline">
                <div className="container p-5">
                    <h2 className="font-face-gm mb-3">MAKE AN IMPACT WITH US</h2>
                    <p className='mb-0'>
                        Help us in our mission by volunteering your time or 
                        providing opportunities for our RED Leaders.
                    </p>
                </div>
            </div>
            <div className="body-content pb-5">
                <div className="container p-3 pb-5">
                    <h2 className="body-headline font-face-gm mt-4 mb-3">VOLUNTEER AS A MENTOR</h2>
                    <div className="involve-images involve-image1 mb-4"></div>
                    <p className=" pb-3">
                        Support RED Leaders as they navigate the early part of their 
                        careers. We are seeking professionals working in financial 
                        services that are committed to both our mission and values.
                    </p>
                    <div id="get-involved-btn">
                        <Button size="lg" className="apply-btn mb-5" target='_blank' href="https://docs.google.com/forms/d/e/1FAIpQLSdjLuI0Pg36Z5qF7Ph4WwneAaaCDizPREO9CPMZPEpnArulFg/viewform">Volunteer</Button>       
                    </div>
                </div>
                <div className="container p-2">
                    <h2 className="body-headline font-face-gm mt-4 mb-3">BECOME A RED PARTNER</h2>
                    <div className="involve-images involve-image2 mb-4"></div>
                    <p className=" pb-3">
                        Companies looking for diverse talent to hire will benefit 
                        greatly from partnering with us. RED Leaders make for 
                        exceptional candidates for internship/job opportunities.
                    </p>
                    <div id="get-involved-btn">
                        <Link to='/contact'>
                            <Button size="lg" className="apply-btn mb-5" onClick={handleScrollToTop}>Partner</Button>
                        </Link>
                    </div>
                </div>
            </div>
            </div>
            <ContactFooter />
        </>
    )
}