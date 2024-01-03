import './../styles/class001.css'
import './../index.css'
import { Card } from 'react-bootstrap';
import Abdul from './../assets/class001/Abdul.png';
import Diogo from './../assets/class001/Diogo.png';
import Edryan from './../assets/class001/Edryan.png';
import Gabriel from './../assets/class001/Gabriel.png';
import Jason from './../assets/class001/Jason.png';
import Jazmin from './../assets/class001/Jazmin.png';
import Juliana from './../assets/class001/Juliana.png';
import Katellyn from './../assets/class001/Katellyn.png';
import Natalia from './../assets/class001/Natalia.png';
import Nick from './../assets/class001/Nick.png';
import Yero from './../assets/class001/Yero.png';

export default function Class001() {
    return (
        <div className="main-headline pb-5">
            <div className="container class-title">
                <h1 className="title">CLASS 001 - "THE ORIGINALS"</h1>
            </div>
            <div className="row" id="row1">
                <div className="col" id="student">
                    <img className="headshot" src={Katellyn} alt="" />
                    <h5 className="">Katellyn Ahuati</h5>
                    <p>CUNY Baruch College</p>
                </div>
                <div className="col" id="student">
                    <img className="headshot" src={Edryan} alt="" />
                    <h5 className="">Edryan Canario</h5>
                    <p>CUNY Baruch College</p>
                </div>
                <div className="col" id="student">
                    <img className="headshot" src={Yero} alt="" />
                    <h5 className="">Yero Diamanka</h5>
                    <p>University of Chicago</p>
                </div>
                <div className="col" id="student">
                    <img className="headshot" src={Natalia} alt="" />
                    <h5 className="">Natalia Diaz Villatoro</h5>
                    <p>Manhattan College</p>
                </div>
            </div>
            <div className="row" id="row2">
                <div className="col" id="student">
                    <img className="headshot" src={Gabriel} alt="" />
                    <h5 className="">Gabriel Fernandez</h5>
                    <p>CUNY Baruch College</p>
                </div>
                <div className="col" id="student">
                    <img className="headshot" src={Abdul} alt="" />
                    <h5 className="">Abdul Ganiyuajani</h5>
                    <p>CUNY City College</p>
                </div>
                <div className="col" id="student">
                    <img className="headshot" src={Juliana} alt="" />
                    <h5 className="">Juliana Martinez</h5>
                    <p>CUNY Hunter College</p>
                </div>
                <div className="col" id="student">
                    <img className="headshot" src={Jason} alt="" />
                    <h5 className="">Jason Maza</h5>
                    <p>CUNY Baruch College</p>
                </div>
            </div>
            <div className="row" id="row3">
                <div className="col" id="student">
                    <img className="headshot" src={Diogo} alt="" />
                    <h5 className="">Diogo Montalvo</h5>
                    <p>New York University</p>
                </div>
                <div className="col" id="student">
                    <img className="headshot" src={Nick} alt="" />
                    <h5 className="">Nick Rodriguez</h5>
                    <p>Swarthmore College</p>
                </div>
                <div className="col" id="student">
                    <img className="headshot" src={Jazmin} alt="" />
                    <h5 className="">Jazmin Solano</h5>
                    <p>CUNY Baruch College</p>
                </div>
            </div>

        </div>
    )
}