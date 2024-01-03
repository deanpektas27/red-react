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
        <div className="main-headline pt-5">
            <div className="container class-title">
                <h1 className="title">CLASS 001 - "THE ORIGINALS"</h1>
            </div>
            <div className="student">
                <img src={Abdul} alt="" class="headshot" />
            </div>
            <div className="student">
                <img src={Diogo} alt="" class="headshot" />
            </div>

            <img src={Edryan} alt="" class="headshot" />
            <img src={Gabriel} alt="" class="headshot" />

        </div>
    )
}