import { motion } from "framer-motion"
import { useEffect } from "react"

function Project(props)
{
    useEffect(() => {
        window.scrollTo(0, 320);
    }, [])

    function goBack() {
        props.goBack();
    }

    function playDescription() {
        console.log("play");
    }

    function showOnFullScreen(imgSrc) {
        props.showOnFullScreen(<img src={imgSrc} alt="Fullscreen project screenshot"></img>);
    }

    const project = props.project;

    return (
        <motion.section className="project"
            initial={{ x: 80 }}
            animate={{ x: 0 }}>
            <img className="backBtn icon" src="./icons/back.png" alt="icon" onMouseDown={goBack} />
            <h2>{project.title}</h2>
            <div className="projectImgs">
                {project.media.map((media, index) => (
                    <img onMouseDown={() => showOnFullScreen(media)} key={"media-" + index} src={media} alt="Project screenshot"/>
                ))}
            </div>
            <div className="projectDescription">
                <p>{project.description.split("\n").map((paragraph, index) => 
                    <span key={project.title + "-p" + index}>
                        {paragraph}<br/>
                    </span>)}
                </p>
                <div className="projectMediaContainer">
                    { project.website !== "" && 
                        <div className="projectMedia" onMouseDown={() => window.open(project.website)}>
                            <img className="icon" src="./icons/globe.png" alt="icon"/>
                            <p>Website <img className="smallIcon" src="./icons/link.png" alt="icon"/></p>
                        </div> 
                    }
                    { project.video !== "" && 
                        <div className="projectMedia" onMouseDown={() => window.open(project.video)}>
                            <img className="icon" src="./icons/play.png" alt="icon"/>
                            <p>Video <img className="smallIcon" src="./icons/link.png" alt="icon"/></p>
                        </div> 
                    }
                    { project.executable !== "" && 
                        <div className="projectMedia" onMouseDown={() => window.open(project.executable)}>
                            <img className="icon" src="./icons/puzzle-piece.png" alt="icon"/>
                            <p>Executable <img className="smallIcon" src="./icons/link.png" alt="icon"/></p>
                        </div> 
                    }
                    { project.audio !== "" && 
                        <div className="projectMedia" onMouseDown={playDescription}>
                            <img className="icon" src="./icons/audio.png" alt="icon"/>
                            <p>Audio Read</p>
                        </div> 
                    }
                </div>
            </div>
        </motion.section>
    );
}

export default Project;