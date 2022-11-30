import { motion } from "framer-motion";
import infj from "../img/infj.png"
import lelouch from "../img/lelouch-round.png"

function About()
{
    return (
        <section className="about">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}>
                <h2>About</h2>
                <img className="infjImg" src={infj} loading="eager" alt="INFJ characteristics"></img>
                <p>Born in Brazil I studied Game Development at Unisinos in Porto Alegre. My good grades granted me the opportunity of a 1 year scholarship for an exchange in Computer Science in Canada at Wilfrid Laurier in 2015. Since then I lived and worked in Brazil, France and Ireland, where I am based now.
                    <br/><br/>I am quite adaptive and open to new experiences and I enjoy learning new skills and solving logical challenges. What motivates me most in projects is either having a nice team or a meaningful goal. Environmental care and social equity are fundamental to me, so if I can work towards these objectives either within a company or as a service it would be the best for me.
                    <br/><br/>If you know what INFJ means than you may already know a good deal about me. If you don't, it the result of a psychological test known as Myers-Briggs that categorizes people in 16 major personalities. Of course I don’t match everything INFJ, but many things are surprisingly accurate for me.
                    <br/><br/>My gamer tag is usually Demirus and I frequently use Lelouch from Code Geass as my avatar image.</p>
                <img className="lelouchImg" src={lelouch} loading="eager" alt="Discord avatar"></img>
            </motion.div>
        </section>
    );
}

export default About;