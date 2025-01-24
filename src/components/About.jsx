import ContactFooter from "./ContactFooter";
import NickImage from "./../assets/06_About/Headshot.png";
import "./../styles/about.css";

export default function About() {
  return (
    <>
      <div className="font-face-gm">
        <div className="about-banner about-bg-image"></div>
        <div className="main-headline">
          <div className="container p-4">
            <h2 className="body-headline font-face-gm mb-3">ABOUT US</h2>
            <p>
              The Resilience, Excellence, and Diversity Initiative is a
              501(c)(3) nonprofit organization founded in July 2023. Our mission
              is to connect ambitious college students from underrepresented
              backgrounds with the skills, support, and opportunities to unlock
              their full potential.
            </p>
            <p className="mb-0">
              We are driven by our five core values: Accountability, Community,
              Growth, Leadership, and Trust.
            </p>
          </div>
        </div>
        <div className="body-content pb-5">
          <div className="container p-3">
            <div className="row mt-5">
              <div className="col-lg-4" id="nick-col">
                {/* <div className="about-image nick container"></div> */}
                <div className="container">
                  <div className="body-image">
                    <img
                      className="d-block img-fluid m-auto"
                      id="nick-image"
                      src={NickImage}
                      alt="Body Image 1"
                    />
                  </div>
                  <div className="about-image-name text-center">
                    <h2 className="mb-0 mt-3">Nick Guillen</h2>
                    <p className="mb-3">Founder</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8" id="nick-col">
                <div className="container">
                  <p id="nick-summary">
                    Nick is a first-generation college graduate whose journey
                    has been marked by resilience and determination. Born and
                    raised in The Bronx, Nick navigated the challenges of
                    pursuing higher education with no connections or knowledge
                    of the financial services industry.
                  </p>
                  <p id="nick-summary">
                    In 2020, Nick graduated from CUNY Lehman College, earning a
                    B.S. in Accounting and an M.S. in Human Resources. Along the
                    way, Nick became involved in student organizations,
                    leadership roles, and community service initiatives.
                  </p>
                  <p id="nick-summary">
                    Since graduating, Nick has built his career in campus
                    recruiting within the financial services industry.
                    Additionally, he serves as a 1st Lieutenant in the Army
                    National Guard.
                  </p>
                  <p id="nick-summary">
                    Nick founded RED, believing that underrepresented college
                    students should be challenged more to be the best versions
                    of themselves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactFooter />
    </>
  );
}
