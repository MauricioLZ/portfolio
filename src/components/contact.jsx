import { useState } from "react";

function Contact()
{
    const [message, setMessage] = useState("");
    const [sentMsg, setSentMsg] = useState(false);

    function writeMessage(e) {
        const target = e.target;
        setMessage(target.value);
    }

    function onSubmit(e) {
        setSentMsg(true);
        e.preventDefault();
    }

    return (
        <div className="contact">
            <h2>Contact</h2>
            <p className="contactDetails">
                Mauricio Lopes Zugno
                <br/>Ireland, Cork city
                <br/>(+353) 085 172 9759
                <br/>mauriciolopz@gmail.com
            </p>
            <p className="contactInstructions">Get in touch by sending me a message through here:</p>
            <form onSubmit={onSubmit}>
                <textarea rows="6" name="message" onChange={writeMessage} value={message}></textarea>
                <div className="contactSubmitContainer">
                    { sentMsg && <p className="contactFeedback">Thank you, your message has been sent!</p> }
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;