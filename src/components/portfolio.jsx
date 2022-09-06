import projects from "../data/projects";
import { useState } from "react";
import Project from "./project";

function Portfolio(props)
{
    const [hovered, setHovered] = useState(-1);
    const [projectIndex, setProjectIndex] = useState(-1);

    function showHovered(index) {
        setHovered(index);
    }

    function showProject(event) {
        const target = event.target;
        setProjectIndex(target.id);
    }

    function hideProject() {
        setProjectIndex(-1);
    }

    return (

        projectIndex === -1 ?

        <div className="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolioImgGroup">
                {projects.map((project, index) => (
                    <img
                        key={index}
                        id={index}
                        src={project.coverImg}
                        alt={project.title}
                        loading="lazy"
                        onMouseEnter={() => showHovered(index)}
                        onMouseLeave={() => showHovered(-1)}
                        onMouseDown={showProject}
                    />
                ))}

                <div className="portfolioOverlays">
                    {projects.map((project, index) => (
                        <div key={index} className="portfolioImgOverlay" style={{visibility: (hovered === index)? "visible" : "hidden"}}>
                            <h3 className="portfolioProjectTitle">{project.title}</h3>
                            <div className="line"></div>
                            <div className="portfolioProjectPlatforms">
                                <p>{project.platforms}</p>
                            </div>
                            <h3 className="portfolioProjectEngine">{project.engine}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div> 

        :

        <Project  
            hideProject={hideProject} 
            index={projectIndex}
            showOnFullScreen={props.showOnFullScreen}>
        </Project>
    );
}

export default Portfolio;