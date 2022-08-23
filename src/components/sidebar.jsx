import { useState } from "react";
import photo from "../img/photoMauricio.jpg";
import cursor from "../img/cursorFF7.png";

function Sidebar(props)
{
    const [page, setPage] = useState(0);

    const today = new Date();
    const age = today.getFullYear() - 1992;
    const daysProgression = (today.getMonth() * 100) / 12;

    function changeCursorPositionToIndex(index) {
        const cursorElement = document.getElementById("Cursor");
        cursorElement.style.marginTop = (14 + (index * 40)) + "px";
    }

    function resetCursorPosition() {
        const cursorElement = document.getElementById("Cursor");
        cursorElement.style.marginTop = (14 + (page * 40)) + "px";
    }

    function onTopicClick(index) {
        props.onTopicClick(index);
        setPage(index);
    }

    const topics = ["Materials", "Status", "Reviews", "Contact"]

    return (
        <div className="sidebar">
            <img className="profileImg" src={photo} alt="Mauricio photo"/>
            <h5 className="level">LV <span>{age}</span></h5>
            <div className="expGauge">
                <div style={{width: daysProgression + "%"}}></div>
            </div>
            <div className="topicsGrid">
                <div className="cursorContainer">
                    <img id="Cursor" src={cursor} alt="Cursor" />
                </div>
                <div className="topics">
                    {topics.map((topic, index) => {
                        return <a href="#"
                            key={index}
                            onMouseDown={() => onTopicClick(index)}
                            onMouseEnter={() => changeCursorPositionToIndex(index)}
                            onMouseLeave={resetCursorPosition}>{topic}</a>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;