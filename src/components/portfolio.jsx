import projects from "../data/projects-data";
import { useState, useEffect } from "react";
import Project from "./project";
import $ from "jquery";
import { AnimatePresence, motion } from "framer-motion"

function Portfolio(props)
{
    const [hovered, setHovered] = useState(-1);
    const [projectIndex, setProjectIndex] = useState(-1);
    const [overlayHeight, setOverlayHeight] = useState("");

    useEffect(() =>
    {
        window.addEventListener('resize', handleResize);
        handleResize();
    }, []);

    function handleResize()
    {
        const projectImg = $(".portfolioImgGroup img")[0];
        setOverlayHeight({ height: projectImg.offsetHeight });
    }

    function showHovered(index) {
        
        setHovered(index);
    }

    function showProject(index) {
        setProjectIndex(index);
    }

    function hideProject() {
        setProjectIndex(-1);
    }

    return (

        <AnimatePresence>
            { projectIndex === -1 && 
                <motion.section className="portfolio">
                    <div>
                        <h2>Portfolio</h2>
                        <div className="portfolioImgGroup">
                            {projects.map((project, index) => (
                                <img
                                    key={"project" + index}
                                    src={project.coverImg}
                                    alt={project.title}
                                    loading="lazy"
                                />
                            ))}

                            <div className="portfolioOverlays">
                                {projects.map((project, index) => 
                                {
                                    const style = {...overlayHeight};

                                    return <motion.div 
                                        key={"overlay" + index}
                                        className="portfolioImgOverlay" 
                                        style={style}
                                        onMouseEnter={() => showHovered(index)}
                                        onMouseLeave={() => showHovered(-1)}
                                        onMouseDown={() => showProject(index)}
                                        >
                                            <h3 className="portfolioProjectTitle">{project.title}</h3>
                                            <div className="line"></div>
                                            <div className="portfolioProjectPlatforms">
                                                <p>{project.platforms}</p>
                                            </div>
                                            <h3 className="portfolioProjectEngine">{project.engine}</h3>
                                        </motion.div>
                                })}
                            </div>
                        </div>
                    </div>
                </motion.section>
            }

            { projectIndex !== -1 &&
                <Project
                    hideProject={hideProject}
                    index={projectIndex}
                    showOnFullScreen={props.showOnFullScreen}>
                </Project>
            }
        </AnimatePresence>
    );
}

export default Portfolio;