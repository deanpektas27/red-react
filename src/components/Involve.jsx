import ContactFooter from "./ContactFooter"
import Button from "react-bootstrap/Button"
import './../styles/involve.css'

export default function Involve() {
    return (
        <>
            <div className="font-face-gm">
            <div className="involve-banner involve-bg-image"></div>
                <div className="main-headline">
                    <div className="container">
                        <h2 className="font-face-gm">GET INVOLVED</h2>
                        <p>
                            Contribute by helping us provide R.E.D Initiative
                            students with the skills and confidence they need 
                            for their future.
                        </p>
                    </div>
                </div>
                <div className="body-content pb-5">
                    <div className="container p-2">
                        <h2 className="body-headline font-face-gm p-5">VOLUNTEER AS A MENTOR</h2>
                        <div className="involve-images involve-image1 mb-4">
                        </div>
                        <p className="pt-5 pb-5">
                            Lorem ipsum dolor sit amet, consectetur 
                            aute adipiscing elit, sed do eiusm tempor enim incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            Duis aute irure dolor in reprehenderit in volupt. 
                            Lorem ipsum dolor sit amet, consectetur unite adipiscing 
                            elit, sed do eiusmod tempor auteurs incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, dei Duis 
                            aute irure dolor in reprehenderit in volupt. Lorem ipsum 
                            dolor sit ane.
                        </p>
                        <Button size="lg" className="apply-btn mb-5">Volunteer</Button>
                    </div>
                    <div className="container p-2">
                        <h2 className="body-headline font-face-gm p-5">PARTNER WITH THE R.E.D INITIATIVE</h2>
                        <div className="involve-images involve-image2 mb-4"></div>
                        <p className="pt-5 pb-5">
                            Lorem ipsum dolor sit amet, consectetur 
                            aute adipiscing elit, sed do eiusm tempor enim incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            Duis aute irure dolor in reprehenderit in volupt. 
                            Lorem ipsum dolor sit amet, consectetur unite adipiscing 
                            elit, sed do eiusmod tempor auteurs incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, dei Duis 
                            aute irure dolor in reprehenderit in volupt. Lorem ipsum 
                            dolor sit ane.
                        </p>
                        <Button size="lg" className="apply-btn mb-5">Partner</Button>
                    </div>
                    <div className="container p-2">

                        <h2 className="body-headline font-face-gm p-5">MAKE A CHANGE</h2>
                        <div className="involve-images involve-image3 mb-4"></div>
                        <p className="pt-5 pb-5">
                            Lorem ipsum dolor sit amet, consectetur 
                            aute adipiscing elit, sed do eiusm tempor enim incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                            Duis aute irure dolor in reprehenderit in volupt. 
                            Lorem ipsum dolor sit amet, consectetur unite adipiscing 
                            elit, sed do eiusmod tempor auteurs incididunt ut labore 
                            et dolore magna aliqua. Ut enim ad minim veniam, dei Duis 
                            aute irure dolor in reprehenderit in volupt. Lorem ipsum 
                            dolor sit ane.
                        </p>
                        <Button size="lg" className="apply-btn mb-5">Donate</Button>
                    </div>
                </div>
            </div>
            <ContactFooter />
        </>
    )
}