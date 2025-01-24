import { Accordion } from "react-bootstrap";
import Class001 from "./Class001";
import Class002 from "./Class002";
import "./../styles/stories.css";

export default function Stories() {
  return (
    <div style={{ backgroundColor: "#cc2323" }}>
      <div
        className="container"
        style={{ backgroundColor: "#cc2323", minHeight: "100vh" }}
      >
        {/* <div className="container"> */}
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>CLASS 001 - "THE ORIGINALS"</Accordion.Header>
            <Accordion.Body>
              <Class001 />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>CLASS 002</Accordion.Header>
            <Accordion.Body>
              <Class002 />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        {/* </div> */}
      </div>
    </div>
  );
}
