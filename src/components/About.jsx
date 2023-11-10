import ContactFooter from "./ContactFooter"
import './../styles/about.css'

export default function About() {
    return (
        <>
            <div className="font-face-gm">
                <div className="about-banner about-bg-image"></div>
                <div className="main-headline">
                    <div className="container">
                        <h2 className="font-face-gm">ABOUT R.E.D INITIATIVE</h2>
                        <p>
                            The Resilience, Excellence, and Diversity 
                            Initiative is a nonprofit organization founded 
                            by Nick Guillen. Our mission is to foster the 
                            personal and professional development of ambitious 
                            Black and Latino college students through direct and intense coaching.
                        </p>
                    </div>
                </div>
                <div className="body-content pb-5">
                    <div className="container p-2">
                        <h2 className="body-headline font-face-gm p-5">FOUNDER</h2>
                        <p className=" pb-5">
                            Lorem ipsum dolor sit amet, consectetur aute adipiscing elit, 
                            sed do eiusm enim incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, Duis aute irure dolor 
                            in reprehenderit in volupt. Lorem ipsum dolor enim ad 
                            minim veniam, deiDuis aute irure dolor in reprehenderit 
                            in volupt.
                        </p>
                        <div className="about-image nick container"></div>
                    </div>
                </div>
            </div>
            <ContactFooter />
        </>
    )
}