import {Row, Col, Button} from "react-bootstrap"
import './../styles/contact.css'

export default function Contact() {
    return (
        <>
            <div className="contact-banner contact-bg-image"></div>
            <div className="font-face-gm">
                <div className="main-headline">
                    <div className="container">
                        <h2 className="font-face-gm">CONTACT US</h2>
                        <p>
                            Feel free to reach out to the R.E.D
                            Initiative to connect or receive more
                            information.    
                        </p>
                    </div>
                </div>
                <div className="container contact-form">
                    <form>
                        <h2 className="body-headline p-5">Your Information</h2>
                        <label>
                            First Name
                            <input type="text" />
                        </label>
                        <label>
                            Last Name
                            <input type="text" />
                        </label>
                        <label>
                            Email
                            <input type="email" />
                            <label htmlFor="">
                                <input type="checkbox" name="" id="" />
                                It's okay to contact me in the future.
                            </label>
                        </label>
                        <label>
                            Phone Number
                            <input type="phone" />
                        </label>
                        <label>
                            Leave your message.
                            <textarea type="text" />
                        </label>
                        <Button size="lg" className="contact-btn">APPLY</Button>
                    </form>
                </div>
            </div>
        </>
    )
}