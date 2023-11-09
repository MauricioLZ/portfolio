import { useState } from "react";
import emailjs from '@emailjs/browser';
//import { CircularProgress } from "@mui/material";
import { motion } from "framer-motion"
import { useEffect } from "react";

function Contact()
{
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [submitMsg, setSubmitMsg] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [feedbackColorClass, setFeedbackColorClass] = useState("")

    useEffect(() => {
        console.log(process.env.REACT_APP_EMAIL_PUBLIC_KEY);
        emailjs.init(process.env.REACT_APP_EMAIL_PUBLIC_KEY);
    }, []);

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

    function changeSubmitState(active, message, colorClass) {
        setFeedbackColorClass(colorClass);
        setSubmitMsg(message);
        setIsSubmitting(!active);
    }

    function onSubmit(e) {
        e.preventDefault();
        const target = e.target;

        changeSubmitState(false, "Sending...", "colorProgress");

        if (message.length > 0) {
            
            emailjs.sendForm(process.env.REACT_APP_EMAIL_SERVICE_ID, process.env.REACT_APP_EMAIL_TEMPLATE_ID, target)
                .then((result) => changeSubmitState(true, "Thank you, your message has been sent!", "colorOk"),
                    (error) => changeSubmitState(true, "An error occurred, please try again.", "colorError"));
        }
        else {
            changeSubmitState(true, "Please write a message to submit.", "colorError");
        }
    }

    return (
        <section className="contact">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
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
                    <textarea rows="3" name="message" placeholder="Message..." onChange={writeMessage} value={message}></textarea>
                    <div className="contactSubmitContainer">
                        <p className={"contactFeedback " + feedbackColorClass}>{submitMsg}</p>
                        { !isSubmitting && 
                            <button className="submitBtn" type="submit" name="submitBtn">Submit</button> 
                        }
                        {  isSubmitting && 
                            <button className="submitLoad" name="submitLoad" disabled>
                                { //<CircularProgress size="" className="loadSmall"/>
                                }
                            </button> 
                        }
                    </div>
                </form>
            </motion.div>
        </section>
    );
}

export default Contact;