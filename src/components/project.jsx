import projects from "../data/projects-data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft'
import { faVolumeUp } from '@fortawesome/free-solid-svg-icons/faVolumeUp'
import { motion } from "framer-motion"

function Project(props)
{
    function goBack() {
        props.hideProject();
    }

    function playDescription() {
        console.log("play");
    }

    function showOnFullScreen(imgSrc) {
        props.showOnFullScreen(<img src={imgSrc}></img>);
    }

    const project = projects[props.index];

    return (
        <motion.section className="project"
            initial={{ x: 80 }}
            animate={{ x: 0 }}>
            <FontAwesomeIcon className="backBtn" icon={faArrowLeft} size="2x" onMouseDown={goBack} />
            <h2>{project.title}</h2>
            <div className="projectMedia">
                {project.media.map((media, index) => (
                    <img onMouseDown={() => showOnFullScreen(media)} key={index} src={media}/>
                ))}
            </div>
            <div className="projectDescription">
                <p>{project.description}</p>
            </div>
            <div className="projectAudioDescription" onMouseDown={playDescription}>
                <FontAwesomeIcon icon={faVolumeUp} size="2x" />
                <p>Audio Description</p>
            </div>
        </motion.section>
    );
}

export default Project;