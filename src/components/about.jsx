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
                    <br/><br/>I am quite adaptive and open to new experiences and I enjoy learning new skills and having challenges along the way. What may put me off in a challenge though is if it comes accompanied with too much pressure.
                    <br/><br/><br/>If you know what INFJ means than you may already know a good deal about me. Of course I don’t match everything INFJ, but many things are surprisingly accurate for me.
                    <br/><br/>My game tag is usually Demirus and I frequently use Lelouch from Code Geass as my avatar image.</p>
                <img className="lelouchImg" src={lelouch} loading="eager" alt="Discord avatar"></img>
            </motion.div>
        </section>
    );
}

export default About;