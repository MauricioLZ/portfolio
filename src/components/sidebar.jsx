import { useState, useEffect } from "react";
import photo from "../img/photoMauricio.jpg";
import cursor from "../img/cursorFF7.png";
import { Link } from "react-router-dom";

function Sidebar(props)
{
    const [page, setPage] = useState(0);
    let age, day1, yearProgression, totalDaysInYear;

    useEffect(resetCursorPosition, [page]);
    useEffect(() => {
        if (document.readyState === "complete") {
            onPageLoad();
        } 
        else {
            window.addEventListener("load", onPageLoad);
            return () => window.removeEventListener("load", onPageLoad);
        }
    }, []);

    setLevelAndXp();

    function onPageLoad() {
        if (props.page !== page) {
            setPage(props.page);
        }
    }

    function setLevelAndXp() {
        const today = new Date();

        const isAfterBirthday = ((today.getMonth() === 0 && today.getUTCDate() >= 30) || today.getMonth() > 0);
        const countLastLeapYear = (today.getMonth() === 0 && today.getUTCDate() < 30 && (today.getFullYear() - 1) % 4 === 0);
        const countThisLeapYear = (isAfterBirthday && (today.getFullYear()) % 4 === 0);
        totalDaysInYear = (countLastLeapYear || countThisLeapYear) ? 366 : 365;

        const start = new Date(today.getFullYear(), 0, 0);
        const daysDiffInMiliseconds = (today - start) + ((start.getTimezoneOffset() - today.getTimezoneOffset()) * 60000);
        const oneDayInMiliseconds = 86400000;
        day1 = Math.floor(daysDiffInMiliseconds / oneDayInMiliseconds) - 30; // January 30
        day1 = (day1 >= 0) ? day1 : (day1 + totalDaysInYear);
        age = today.getFullYear() - 1992;
        age = (isAfterBirthday) ? age : age-1;
        yearProgression = day1 / totalDaysInYear;
    }

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

    const topics = ["Materials", "Status", "References", "Contact"];
    const links = ["portfolio", "about", "references", "contact"];

    return (
        <div className="sidebar">
            <img className="profileImg" src={photo} alt="Profile"/>
            <h5 className="level">LV <span>{age}</span></h5>
            <div className="expGauge">
                <div style={{ width: (yearProgression * 100) + "%"}}></div>
                <p>{day1} / {totalDaysInYear} to birthday</p>
            </div>
            <div className="topicsGrid">
                <div className="cursorContainer">
                    <img id="Cursor" src={cursor} alt="Cursor" />
                </div>
                <div className="topics">
                    {topics.map((topic, index) => {
                        return <Link to={"/" + links[index]}
                            key={index}
                            onMouseDown={() => onTopicClick(index)}
                            onMouseEnter={() => changeCursorPositionToIndex(index)}
                            onMouseLeave={resetCursorPosition}>{topic}</Link>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Sidebar;