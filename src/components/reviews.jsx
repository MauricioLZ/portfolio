import reviews from "../data/reviews-data";
import materias from "../img/materias/materias"
import { motion } from "framer-motion"

function Reviews()
{
    const timeStep = 0.3;
    let transitionTime = -timeStep;

    return (
        <section className="reviews">
            <h2>References</h2>
            <div className="reviewsList">
                {reviews.map((review, index) => {

                    transitionTime += timeStep;
                    
                    return <motion.div
                            key={"review" + index}
                            animate={{ 
                                opacity: [0, 1],
                                x: [-50, 0]
                            }}
                            transition={{ 
                                ease: "easeInOut",
                                times: [0, 0.6],
                                delay: transitionTime
                            }}
                            className="reviewEntry">
                                <img src={materias[index]}></img>
                                <h4>{review.author}</h4>
                                <p>"{review.text}"</p>
                            </motion.div>
                })}
            </div>
        </section> 
    );
}

export default Reviews;