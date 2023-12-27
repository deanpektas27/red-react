import {Row, Col, Button} from "react-bootstrap"
import ReactDOM from 'react-dom';
import './../styles/contact.css'
import { useForm } from "react-hook-form"
import validator from "validator";

export default function Contact() {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => {
        event.preventDefault()
        console.log(data)

        ReactDOM.render(
            <>
                <h2>Your response has been recorded. Thanks!</h2>
            </>, 
            document.getElementById('contact-form'))
    }

    console.log(errors)

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
                                    <input {...register("firstName", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} />
                                </label>
                                {errors.firstName?.type === "required" && (
                                    <p role="alert">First name is required</p>
                                )}
                            </div>
                            <div className="col">
                                <label>
                                    Last Name<span id="required-symbol">*</span>
                                    <br />
                                    <input {...register("lastName", { required: true })} aria-invalid={errors.lastName ? "true" : "false"} type="text" />
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
                                    <input {...register("email-checkbox")} type="checkbox" name="" id="email-checkbox" />
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
                                    <input {...register("phone")} pattern="[0-9]*" />
                                </label>
                                
                            </div>
                        </div>
                        <div className="row pt-4">
                            <div className="col">
                                <label>
                                    Leave your message.
                                    <br />
                                </label>
                                <textarea type="text" />
                            </div>
                        </div>

                        <Button size="lg" type="submit" className="contact-btn mt-5">Submit</Button>
                    </form>
                </div>
            </div>
        </>
    )
}