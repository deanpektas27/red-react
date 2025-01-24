import './../styles/class001.css'
import './../index.css'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Data from './../assets/class002data.json'
import Nabeel from './../assets/class002/Nabeel_S.png';
import Eric from './../assets/class002/Eric_S.png';
import Frank from './../assets/class002/Frank_S.png';
import Oscar from './../assets/class002/Oscar_S.png';
import Cristofer from './../assets/class002/Cristofer_S.png';
import Jasmin from './../assets/class002/Jasmin_S.png';
import Lizbeth from './../assets/class002/Lizbeth_S.png';
import Aminata from './../assets/class002/Aminata_S.png';
import Melina from './../assets/class002/Melina_S.png';

export default function Class002() {
    const [show, setShow] = useState(false);
    const [student, setStudent] = useState([]);

    const handleClose = () => setShow(false);

    const changeStudent = (data) => {
        setStudent(Data[data.target.attributes[3].value])
        console.log(data.target)
        handleShow()
    }

    const handleShow = () => {
        setShow(true);
        console.log(student)
    }

    return (
        <>
            <Modal
            size="lg"
            show={show}
            onHide={handleClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="container">
                                    <img className="headshot" alt="" src={`/assets/${student[0]}_S.png`} />
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="container">
                                <h3>{student[1]}</h3>
                                    <h5 id="modal-student-school">{student[2]}</h5>
                                </div>

                            </div>
                            <div className="pb-2">
                                <div className="container">
                                    <p id="modal-student-school">{student[3]}</p>
                                    <p id="modal-student-school">{student[4]}</p>
                                    <p id="modal-student-school">{student[5]}</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </Modal.Body>
            </Modal>

            <div className="main-headline pb-5">
                <div className="container class-title">
                    <h1 className="class-title-header">CLASS 002</h1>
                </div>
                <div className="container" id="student-container">
                    <div className="row" id="row1">
                        <div className="col" id="student">
                            <img className="headshot" src={Nabeel} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="nabeel" />
                            <h4 className="">Nabeel Elsanousi</h4>
                            <p>New York University</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Eric} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="eric" />
                            <h4 className="">Eric Gonzalez</h4>
                            <p>Fordham University</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Frank} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="frank" />
                            <h4 className="">Frank Hernandez</h4>
                            <p>CUNY Baruch College</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Oscar} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="oscar" />
                            <h4 className="">Oscar Lopez</h4>
                            <p>University of Minnesota</p>
                        </div>
                    </div>
                    <div className="row" id="row2">
                        <div className="col" id="student">
                            <img className="headshot" src={Cristofer} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="cristofer" />
                            <h4 className="">Cristofer Martinez</h4>
                            <p>CUNY Baruch College</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Jasmin} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="jasmin" />
                            <h4 className="">Jasmin Medina</h4>
                            <p>CUNY Baruch College</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Lizbeth} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="lizbeth" />
                            <h4 className="">Lizbeth Ramirez</h4>
                            <p>Vanderbilt University</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Aminata} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="aminata" />
                            <h4 className="">Aminata Soumare</h4>
                            <p>Haverford College</p>
                        </div>
                    </div>
                    <div className="row" id="row3">
                        <div className="col" id="student">
                            <img className="headshot" src={Melina} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="melina" />
                            <h4 className="">Melina Valencia</h4>
                            <p>College of the Holy Cross</p>
                        </div>
                        {/* <div className="col" id="student">
                            <img className="headshot" src={Diogo} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="diogo" />
                            <h4 className="">Diogo Montalvo</h4>
                            <p>New York University</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Nick} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="nick" />
                            <h4 className="">Nick Rodriguez</h4>
                            <p>Swarthmore College</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Jazmin} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="jazmin" />
                            <h4 className="">Jazmin Solano</h4>
                            <p>CUNY Baruch College</p>
                        </div>
                        <div className="col empty-student" id="student"></div> */}
                    </div>
                </div>
            </div>
        </>
    )
}