import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons/faVolumeUp'
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
            <div className="projectMedia">
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
            </div>
            {/* <div className="projectAudioDescription" onMouseDown={playDescription}>
                <FontAwesomeIcon icon={faVolumeUp} size="2x" />
                <p>Audio Description</p>
            </div> */}
        </motion.section>
    );
}

export default Project;