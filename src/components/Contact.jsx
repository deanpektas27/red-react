import React, { useEffect, useState } from 'react'
import {Row, Col, Button} from "react-bootstrap"
import ReactDOM from 'react-dom'
import './../styles/contact.css'
import { useForm } from "react-hook-form"
import validator from "validator"

export default function Contact() {
    const { register, handleSubmit, formState: {errors} } = useForm({ defaultValues: { emailcheckbox: true } } );
    const [ backendData, setBackendData ] = useState([{}]);
    const [inputText, setInputText] = useState("");


    useEffect(() => {
        fetch("/api").then(
            response => response.json()
        ).then(
            data => {
                setBackendData(data)
            }
        )
    },[])

    const checkSpecialChar = (e) => {
        if(!/[0-9a-zA-Z]/.test(e.key)){
         e.preventDefault();
        }
    };

    const handleChange = (e) => {
        setInputText(e.target.value);
    }

    const onSubmit = (formData) => {
        event.preventDefault()
        console.log("MY DATA", formData)

        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => console.log(data))

        ReactDOM.render(
            <>
                <h2>Your response has been recorded. Thanks!</h2>
            </>, 
            document.getElementById('contact-form'))
    }


    return (
        <>
            <div className="contact-banner contact-bg-image"></div>
            <div className="font-face-gm">
                <div className="main-headline">
                    <div className="container">
                        <h2 className="font-face-gm">CONTACT US</h2>
                        <p>
                            Feel free to reach out to the R.E.D
                            Initiative to connect or receive more
                            information.    
                        </p>
                    </div>
                </div>
                <div className="container p-2">
                    <h2 className="body-headline font-face-gm p-5" id="form-headline">Your Information</h2>
                </div>
                <div id="contact-form" className="container contact-form mb-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col">
                                <label>
                                    First Name<span id="required-symbol">*</span>
                                    <br />
                                    <input {...register("firstname", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} />
                                </label>
                                {errors.firstName?.type === "required" && (
                                    <p role="alert">First name is required</p>
                                )}
                            </div>
                            <div className="col">
                                <label>
                                    Last Name<span id="required-symbol">*</span>
                                    <br />
                                    <input {...register("lastname", { required: true })} aria-invalid={errors.lastName ? "true" : "false"} type="text" />
                                </label>
                                {errors.lastName?.type === "required" && (
                                    <p role="alert">Last name is required</p>
                                )}
                            </div>
                        </div>


                        <div className="row pt-4">
                            <div className="col">
                                <label>
                                Email<span id="required-symbol">*</span>
                                <br />
                                <input {...register("mail", { required: true })} aria-invalid={errors.mail ? "true" : "false"} id="email-box" />
                                <br />
                                <label htmlFor="" name="contact_in_future" >
                                    <input {...register("emailcheckbox")} type="checkbox" id="email-checkbox" />
                                        {' '}It's okay to contact me in the future.
                                </label>
                                </label>
                                {errors.mail?.type === "required" && (
                                    <p role="alert">Email is required</p>
                                )}
                            </div>


                        </div>
                        <div className="row pt-4">
                            <div className="col">
                                <label>
                                    Phone Number
                                    <br />
                                    <input {...register("phone")} onKeyDown={(e) => checkSpecialChar(e)} />
                                </label>
                                
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col">
                                <label>
                                    Leave your message.
                                    <br />
                                </label>
                                <textarea {...register("message")} type="text" onChange={handleChange} maxLength="1000" />
                                <span className="charLeft">{1000 - inputText.length}/1000 Characters Left</span>
                            </div>
                        </div>

                        <Button size="lg" type="submit" className="contact-btn mt-5">Submit</Button>
                    </form>
                </div>
            </div>
        </>
    )
}