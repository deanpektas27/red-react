import ContactFooter from "./ContactFooter"
import Container from "react-bootstrap/Container"
import {Row, Col, Button} from "react-bootstrap"
import Arrow from './../assets/arrowpoint.svg'
import './../styles/apply.css'

export default function Apply() {
    return (
        <>
            <div className="apply-banner apply-bg-image"></div>
            <div className="font-face-gm">
                <div className="main-headline">
                    <div className="container">
                        <h2 className="font-face-gm">APPLICANT QUALIFICATIONS</h2>
                        <p>
                            All R.E.D Initiative students are responsible 
                            for completing the intensive training, 
                            attending all coaching sessions, and 
                            participating in interview preparation.
                        </p>
                        <div className="requirement-list">
                            <h3 className="pb-4">To be eligible, you must meet the following requirements:</h3>
                            <ul>
                                <li>Cumulative GPA of 3.2 (sophomore), 3.4 (junior), 3.6 (senior); freshmen do not have a required minimum GPA</li>
                                <li>Identify as Black/African-American or Hispanic/Latino</li>
                                <li>Majoring in Accounting, Economics, Finance, or another related major</li>
                                <li>Attending an accredited college in the New York City metro area (NJ/CT included)</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="body-content">
                    <div className="container p-2">
                        <h2 className="body-headline font-face-gm p-5">WHAT TO EXPECT</h2>
                    
                    <div className="container p-2 pb-4">
                        <div className="row">
                            <div className="col">
                                <h2 className="m-auto mb-4 underline">DURING R.E.D INITIATIVE</h2>
                                <div className="container expect-content-container">
                                    <h2><span id="triangle-bullet">{`\u2023`}</span> 14 weeks of hybrid mentoring</h2>
                                    <p id="what-to-expect-content">
                                        Each week, you will meet with your 
                                        mentor in-person or virtual group setting. 
                                        There will be a total of 26 workshops 
                                        (20 in-person, 6 virtual)
                                    </p>
                                    <h3><span id="triangle-bullet">{`\u2023`}</span> Gain professional skills</h3>
                                    <p id="what-to-expect-content">
                                        Improve your professionalism, discipline, 
                                        and leadership to graduate as a R.E.D Leader.
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <h2 className="m-auto mb-4 underline">AFTER R.E.D INITIATIVE</h2>
                                <div className="container expect-content-container">
                                    <h3><span id="triangle-bullet">{`\u2023`}</span> 12 months of follow up</h3>
                                    <p id="what-to-expect-content">
                                        Each week, you will meet with your mentor in a 
                                        virtual group setting to go through a guided 
                                        curriculum focused on professional and skill 
                                        development.
                                    </p>
                                    <h3><span id="triangle-bullet">{`\u2023`}</span> Gain professional skills</h3>
                                    <p id="what-to-expect-content">
                                        Improve your professionalism, discipline, 
                                        and leadership to graduate as a R.E.D Leader.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    {/* <Container>
                        <Row className="what-to-expect">
                            <Col md={1} />
                            <Col>
                                <Container>
                                    <h2 className="m-auto mb-4">DURING R.E.D INITIATIVE</h2>
                                    <div className="what-to-expect-left-content">
                                        <h3>{`\u2023`} 14 weeks of hybrid mentoring</h3>
                                        <p>
                                            Each week, you will meet with your 
                                            mentor in-person or virtual group setting. 
                                            There will be a total of 26 workshops 
                                            (20 in-person, 6 virtual)
                                        </p>
                                        <h3>{`\u2023`} Gain professional skills</h3>
                                        <p>
                                            Improve your professionalism, discipline, 
                                            and leadership to graduate as a R.E.D Leader.
                                        </p>
                                    </div>
                                </Container>
                            </Col>
                            <Col>
                                <Container className="pb-5">
                                    <h2 className="m-auto mb-4">AFTER R.E.D INITIATIVE</h2>
                                    <div className="what-to-expect-right-content">
                                        <h3>12 months of follow up</h3>
                                        <p>
                                            Each week, you will meet with your mentor in a 
                                            virtual group setting to go through a guided 
                                            curriculum focused on professional and skill 
                                            development.
                                        </p>
                                        <h3>R.E.D Initiative Alumni</h3>
                                        <p>
                                            Get graduation perks and continue your 
                                            professional journey by engaging in monthly 
                                            meetings with a volunteer mentor.
                                        </p>
                                    </div>  
                                </Container>
                            </Col>
                            <Col md={1}/>
                        </Row>
                    </Container> */}
                </div>
                <Container className="mb-5 mt-5">
                <div className="apply-box">
                    <h2 className="mb-4">JOIN THE R.E.D INITIATIVE</h2>
                    <p>
                        The program cultivates disicipline, resilience, 
                        and excellence, preparing students for success in 
                        the financial services industry. Join the R.E.D 
                        Initiative on a transformative journey to unlock 
                        your potential and embrace a future of opportunities.
                    </p>
                    <Button size="lg" className="apply-btn">APPLY</Button>
                </div>
                </Container>
                <div className="apply-banner-2 apply-bg-image-2"></div>
                <div className="faq-box">
                    <div className="container">
                        <h2 className="title">APPLICANT FAQ</h2>
                        <div>
                            <h2 className="pt-4">When will I hear back once I apply?</h2>
                            <p>
                                NA.
                            </p>
                        </div>
                        <div>
                            <h2>What will I get once I graduate from the program?</h2>
                            <p>
                                Each graduate will receive a $250 stipend, a volunteer mentor, 
                                a graduation plaque, a professional LinkedIn headshot, letter
                                of recommendation, and become an official RED Leader.
                            </p>
                        </div>
                        <div>
                            <h2>What is the time commitment?</h2>
                            <p>
                                The program will be 13 weeks long. You will attend in-person/virtual 
                                workshops on Tuesdays and Thursdays between 6pm and 8:30pm. 
                                There will be a total of 26 workshops (20 in-person, 6 virtual).
                                <br /><br />
                                The first workshop is September 5th. The final workshop is December 7th
                            </p>
                        </div>
                        <div>
                            <h2>Where will the workshops be hosted?</h2>
                            <p>
                                In-person workshops will be hosted in Manhattan, with access to all major 
                                transit lines. Virtual workshops will be hosted via Zoom.
                            </p>
                        </div>
                        <div>
                            <h2>How is this program different from any other program?</h2>
                            <p>
                                Our culture will differ from any organization you have heard of. 
                                Our program will instill discipline, reward on merit, and more importantly, 
                                provide you with valuable and accurate career information.
                            </p>
                        </div>
                        <div>
                            <h2>Who will teach the workshops?</h2>
                            <p>
                                The founder, Nick Guillen, will conduct all of the workshops.
                                However, there will be 5 workshops with volunteer professionals assisting.
                            </p>
                        </div>
                        <div>
                            <h2>Will I receive a mentor?</h2>
                            <p>
                            Upon successful completion of the 13-week program, you will receive 
                            a mentor working in the nancial services industry.
                            </p>
                        </div>
                        <div>
                            <h2>I am a graduate student. Am I eligible?</h2>
                            <p>No.</p>
                        </div>
                        <div>
                            <h2>If I am not Black or Latino, am I eligible for this program?</h2>
                            <p>
                                No, you must identify as Black or Latino.
                            </p>
                        </div>
                        <div>
                            <h2>How many workshops can I miss?</h2>
                            <p>
                                If this is a question you're asking, we are not the program for you.
                            </p>
                        </div>
                        <div>
                            <h2>My question isn't here. How can I get in contact?</h2>
                            <p>
                                Email us at info@theredinitiative.com.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactFooter />
        </>
    )
}