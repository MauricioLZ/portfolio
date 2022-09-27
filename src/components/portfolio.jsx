import projects from "../data/projects-data";
import { useState, useEffect } from "react";
import Project from "./project";
import $ from "jquery";
import { AnimatePresence, motion } from "framer-motion"
import { useNavigate } from 'react-router-dom';

function Portfolio(props)
{
    const navigate = useNavigate();
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

    function showProject(index) {
        navigate("/portfolio/" + projects[index].title);
        setProjectIndex(index);
    }

    return (

        <AnimatePresence>
            { projectIndex === -1 && 
                <motion.section className="portfolio">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}>
                        <h2>Portfolio</h2>
                        <div className="portfolioImgGroup">
                            {projects.map((project, index) => (
                                <img
                                    key={"project" + index}
                                    src={project.coverImg}
                                    alt={project.title}
                                    loading="lazy"
                                    onLoad={() => { if(index === 0) handleResize() }}
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
                                        onMouseDown={() => showProject(index)}
                                        >
                                            <h3 className="portfolioProjectTitle">{project.title}</h3>
                                            <div className="line"></div>
                                            <div className="portfolioProjectPlatforms">
                                                <p>{project.platforms.map((tag) => 
                                                   <span key={project.title + tag}>{tag}</span>
                                                )}</p>
                                            </div>
                                            <h3 className="portfolioProjectEngine">{project.engine}</h3>
                                        </motion.div>
                                })}
                            </div>
                        </div>
                    </motion.div>
                </motion.section>
            }

            { projectIndex !== -1 && 
                <Project showOnFullScreen={props.showOnFullScreen} /> 
            }
        </AnimatePresence>
    );
}

export default Portfolio;