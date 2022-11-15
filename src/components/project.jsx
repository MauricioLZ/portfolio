import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faArrowLeft, faVolumeUp, faPuzzlePiece, faPlay, faGlobe } from '@fortawesome/free-solid-svg-icons'
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
            <FontAwesomeIcon className="backBtn" icon={faArrowLeft} size="2x" onMouseDown={goBack} />
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
                            <FontAwesomeIcon icon={faGlobe} size="2x" />
                            <p>Website <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></p>
                        </div> 
                    }
                    { project.video !== "" && 
                        <div className="projectMedia" onMouseDown={() => window.open(project.video)}>
                            <FontAwesomeIcon icon={faPlay} size="2x" />
                            <p>Video <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></p>
                        </div> 
                    }
                    { project.executable !== "" && 
                        <div className="projectMedia" onMouseDown={() => window.open(project.executable)}>
                            <FontAwesomeIcon icon={faPuzzlePiece} size="2x" />
                            <p>Executable <FontAwesomeIcon icon={faArrowUpRightFromSquare}/></p>
                        </div> 
                    }
                    { project.audio !== "" && 
                        <div className="projectMedia" onMouseDown={playDescription}>
                            <FontAwesomeIcon icon={faVolumeUp} size="2x" />
                            <p>Audio Read</p>
                        </div> 
                    }
                </div>
            </div>
        </motion.section>
    );
}

export default Project;