import './../styles/class001.css'
import './../index.css'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import Data from './../assets/class001data.json'
import Abdul from './../assets/class001/Abdul-min.png';
import Diogo from './../assets/class001/Diogo-min.png';
import Edryan from './../assets/class001/Edryan-min.png';
import Gabriel from './../assets/class001/Gabriel-min.png';
import Jason from './../assets/class001/Jason-min.png';
import Jazmin from './../assets/class001/Jazmin-min.png';
import Juliana from './../assets/class001/Juliana-min.png';
import Katellyn from './../assets/class001/Katellyn-min.png';
import Natalia from './../assets/class001/Natalia-min.png';
import Nick from './../assets/class001/Nick-min.png';
import Yero from './../assets/class001/Yero-min.png';

export default function Class001() {
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
                                    <img className="headshot" alt="" src={`/assets/${student[0]}-min.png`} />
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
                                    <p id="modal-student-school">{student[3] + student[4]} + {student[5]}</p>
                                    {/* <p id="modal-student-school">{student[4]}</p>
                                    <p id="modal-student-school">{student[5]}</p> */}
                                </div>
                            </div>
                        </div>  
                    </div>
                </Modal.Body>
            </Modal>

            <div className="main-headline pb-5">
                <div className="container class-title">
                    <h1 className="class-title-header">CLASS 001 - "THE ORIGINALS"</h1>
                </div>
                <div className="container" id="student-container">
                    <div className="row" id="row1">
                        <div className="col" id="student">
                            <img className="headshot" src={Katellyn} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="katellyn" />
                            <h4 className="">Katellyn Ahuatl</h4>
                            <p>CUNY Baruch College</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Edryan} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="edryan" />
                            <h4 className="">Edryan Canario</h4>
                            <p>CUNY Baruch College</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Yero} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="yero" />
                            <h4 className="">Yero Diamanka</h4>
                            <p>University of Chicago</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Natalia} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="natalia" />
                            <h4 className="">Natalia Diaz Villatoro</h4>
                            <p>Manhattan College</p>
                        </div>
                    </div>
                    <div className="row" id="row2">
                        <div className="col" id="student">
                            <img className="headshot" src={Gabriel} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="gabriel" />
                            <h4 className="">Gabriel Fernandez</h4>
                            <p>CUNY Baruch College</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Abdul} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="abdul" />
                            <h4 className="">Abdul Ganiyuajani</h4>
                            <p>CUNY City College</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Juliana} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="juliana" />
                            <h4 className="">Juliana Martinez</h4>
                            <p>CUNY Hunter College</p>
                        </div>
                        <div className="col" id="student">
                            <img className="headshot" src={Jason} alt="" onClick={(e) => {
                                changeStudent(e)
                            }} data_id="jason" />
                            <h4 className="">Jason Maza</h4>
                            <p>CUNY Baruch College</p>
                        </div>
                    </div>
                    <div className="row" id="row3">
                        <div className="col" id="student">
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
                        <div className="col empty-student" id="student"></div>
                    </div>
                </div>
            </div>
        </>
    )
}