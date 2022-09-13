import { useState } from "react";
import $ from 'jquery';
import emailjs from '@emailjs/browser';

function Contact()
{
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitMsg, setSubmitMsg] = useState("");

    function writeMessage(e) {
        const target = e.target;
        setMessage(target.value);
    }

    function writeName(e) {
        const target = e.target;
        setName(target.value);
    }

    function writeEmail(e) {
        const target = e.target;
        setEmail(target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        const feedbackMsg = $(".contactFeedback")[0];
        const target = e.target;
        emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, target, process.env.REACT_APP_EMAIL_PUBLIC_KEY)
            .then((result) =>
            {
                feedbackMsg.className = "contactFeedback colorOk";
                setSubmitMsg("Thank you, your message has been sent!");
            },
            (error) =>
            {
                feedbackMsg.className = "contactFeedback colorError";
                setSubmitMsg("An error occurred, please try again.");
            });
    }

    return (
        <section className="contact">
            <h2>Contact</h2>
            <p className="contactDetails">
                Mauricio Lopes Zugno
                <br/>Ireland, Cork city
                <br/>(+353) 085 172 9759
                <br/>mauriciolopz@gmail.com
            </p>
            <p className="contactInstructions">Get in touch by sending me a message through the box below. If you want to be contacted back please write your name and email as well.</p>
            <form onSubmit={onSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={writeName} value={name}></input>
                <input type="email" name="email" placeholder="Email" onChange={writeEmail} value={email}></input>
                <textarea rows="6" name="message" placeholder="Message..." onChange={writeMessage} value={message}></textarea>
                <div className="contactSubmitContainer">
                    <p className="contactFeedback">{submitMsg}</p>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </section>
    );
}

export default Contact;