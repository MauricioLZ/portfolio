import projects from "../data/projects";
import { useState } from "react";

function Portfolio()
{
    const [hovered, setHovered] = useState(-1);

    function showHovered(index) {
        setHovered(index);
    }

    return (
        <div className="portfolio">
            <h2>Portfolio</h2>
            <div className="portfolioImgGroup">
                {projects.map((project, index) => (
                    <img
                        key={index}
                        src={`${project.img}?w=164&h=164&fit=crop&auto=format`}
                        srcSet={`${project.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt={project.title}
                        loading="lazy"
                        onMouseEnter={() => showHovered(index)}
                    />
                ))}

                <div className="portfolioOverlays">
                    {projects.map((project, index) => (
                        <div className="portfolioImgOverlay" style={{visibility: (hovered === index)? "visible" : "hidden"}}>
                            <h3 className="projectTitle">{project.title}</h3>
                            <div className="line"></div>
                            <div className="projectPlatforms">
                                <p>{project.platforms}</p>
                            </div>
                            <h3 className="projectEngine">{project.engine}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;