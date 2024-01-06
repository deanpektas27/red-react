import ContactFooter from "./ContactFooter"
import './../styles/about.css'

export default function About() {
    return (
        <>
            <div className="font-face-gm">
                <div className="about-banner about-bg-image"></div>
                <div className="main-headline">
                    <div className="container p-3 pb-5">
                        <h2 className="body-headline font-face-gm p-5 mb-0">ABOUT US</h2>
                        <p>
                            The Resilience, Excellence, and Diversity Initiative is a 
                            501(c)(3) nonprofit organization founded in July 2023. 
                            Our mission is to foster the personal and professional 
                            development of ambitious Black and Latino college students 
                            through direct and intense coaching.
                        </p>
                    </div>
                </div>
                <div className="body-content pb-5">
                    <div className="container p-2">
                        <h2 className="body-headline font-face-gm p-5">FOUNDER</h2>
                        <div className="row">
                            <div className="col-lg-5 mb-5">
                                <div className="about-image nick container"></div>
                            </div>
                            <div className="col-lg-7">
                                <div className="container">
                                    <p id="nick-summary">
                                        Nick is a first-generation college graduate whose journey 
                                        has been marked by resilience and determination. 
                                        Born and raised in The Bronx, Nick navigated the 
                                        challenges of pursuing higher education with no connections 
                                        or knowledge of the financial services industry.
                                    </p>
                                    <p id="nick-summary">
                                        In 2020, Nick graduated from CUNY Lehman College, 
                                        earning a B.S. in Accounting and an M.S. in Human Resources. 
                                        Along the way, Nick became involved in student organizations, 
                                        leadership roles, and community service initiatives.
                                    </p>
                                    <p id="nick-summary">
                                        Since graduating, Nick has worked as a Campus Recruiter 
                                        in the financial services industry. Additionally, 
                                        he serves as a 2nd Lieutenant in the New York Army National Guard.
                                    </p>
                                    <p id="nick-summary">
                                        Nick founded RED, believing that Black and Latino college students 
                                        should be challenged more to be the best versions of themselves.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ContactFooter />
        </>
    )
}