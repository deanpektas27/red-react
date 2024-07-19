import ContactFooter from "./ContactFooter"
import Container from "react-bootstrap/Container"
import {Row, Col, Button} from "react-bootstrap"
import Arrow from './../assets/arrowpoint.svg'
import { Link } from 'react-router-dom';
import './../styles/apply.css'

export default function Apply() {

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <>
            <div className="apply-banner apply-bg-image"></div>
            <div className="font-face-gm">
                <div className="main-headline">
                    <div className="container p-3 pb-5">
                        <h2 className="font-face-gm mt-4 mb-3">GENERAL REQUIREMENTS</h2>
                        <p className="pb-4">
                            To become a RED Leader, you will learn to build character, 
                            increase self-awareness, and develop resilience through 
                            direct and honest feedback, robust individualized coaching, 
                            and real-world experiences. But before you begin this 
                            journey, you must meet general requirements.
                        </p>
                        <h3>To be eligible, you must meet the following requirements:</h3>
                        <ul id="requirement-list">
                            <li>Identify as Black/African-American or Hispanic/Latino</li>
                            <li>Cumulative GPA of 3.2; freshmen do not have a required minimum GPA</li>
                            <li>Majoring in Accounting, Economics, Finance, or another related major</li>
                            <li>Attending an accredited college in the New York City metro area (NJ/CT included)</li>
                        </ul>
                    </div>
                </div>
                <div className="body-content">
                    <div className="container p-2">
                        <h2 className="body-headline font-face-gm mt-4 mb-3">WHAT TO EXPECT</h2>
                    
                    <div className="container p-2 pb-4">
                        <div className="row">
                            <div className="col">
                                <h2 className="m-auto mb-4 underline">DURING FoM</h2>
                                <div className="container expect-content-container">
                                    <h2><span id="triangle-bullet">{`\u2023`}</span> Programming</h2>
                                    <p id="what-to-expect-content">
                                        You will meet twice a week for four months in a virtual setting.
                                    </p>
                                    <h2><span id="triangle-bullet">{`\u2023`}</span> Professional and Leadership Skills</h2>
                                    <p id="what-to-expect-content">
                                        Improve your professionalism, discipline, and leadership to graduate as a RED Leader.
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <h2 className="m-auto mb-4 underline">AFTER FoM</h2>
                                <div className="container expect-content-container">
                                    <h2><span id="triangle-bullet">{`\u2023`}</span> Benefits</h2>
                                    <p id="what-to-expect-content">
                                    You will receive personal and professional development, a graduation plaque, and a recommendation letter.
                                    </p>
                                    <h2><span id="triangle-bullet">{`\u2023`}</span> Career Support</h2>
                                    <p id="what-to-expect-content">
                                        You gain access to any learning/career opportunities provided by RED.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                <Container className="mb-5 mt-5">
                <div className="apply-box">
                    {/* <Link to='/contact'> */}
                        <Button 
                            size="lg" 
                            onClick={handleScrollToTop} 
                            className="apply-btn mb-4" 
                            id="btn" 
                            href="https://docs.google.com/forms/u/1/d/e/1FAIpQLSczpKyLLwvTUjtnfuEn8n8ph0kChcjqZcBPbzswDBzHSqamSA/viewform"
                            target="_blank"
                        >
                                Apply Here
                        </Button>
                        <h3>Deadline to apply: Sunday, August 25 at 11:59pm EST</h3>
                    {/* </Link> */}
                </div>
                </Container>
                <div className="apply-banner-2 apply-bg-image-2"></div>
                <div className="faq-box pt-4 pb-4">
                    <div className="container">
                        <h2 className="title">APPLICANT FAQ</h2>
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
                                The founder, Nick Guillen, will conduct all of the workshops. However, 
                                there will be a few workshops with volunteer professionals assisting.
                            </p>
                        </div>
                        {/* <div>
                            <h2>Will I receive a mentor?</h2>
                            <p>
                                Upon successful completion of the FoM program, you will 
                                receive a mentor working in the financial services industry.
                            </p>
                        </div> */}
                        <div>
                            <h2>I am a graduate student. Am I eligible?</h2>
                            <p>
                                No.
                            </p>
                        </div>
                        <div>
                            <h2>If I am not Black or Latino, am I eligible for this program?</h2>
                            <p>
                                No, you must identify as Black or Latino.
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
            {/* <ContactFooter /> */}
        </>
    )
}