import { motion } from "framer-motion"

function Contact()
{
    return (
        <section className="contact">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <h2>Contact</h2>
                <p className="contactDetails">
                    Mauricio Lopes Zugno
                    <br/>Ireland, Cork city
                    <br/>Phone: (+353) 085 172 9759
                    <br/>Email: mauriciolopz@gmail.com
                </p>
            </motion.div>
        </section>
    );
}

export default Contact;