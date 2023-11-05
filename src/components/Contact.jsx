export default function Contact() {
    return (
        <>
            <div>
                <h2>CONTACT US</h2>
                <p>
                    Feel free to reach out to the R.E.D
                    Initiative to connect or receive more
                    information.    
                </p>
            </div>
            <div>
                <form>
                    <h2>Your Information</h2>
                    <label>
                        First Name
                        <input type="text" />
                    </label>
                    <label>
                        Last Name
                        <input type="text" />
                    </label>
                    <label>
                        Email
                        <input type="email" />
                        <label htmlFor="">
                            <input type="checkbox" name="" id="" />
                            It's okay to contact me in the future.
                        </label>
                    </label>
                    <label>
                        Phone Number
                        <input type="phone" />
                    </label>
                    <label>
                        Leave your message.
                        <textarea type="text" />
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}