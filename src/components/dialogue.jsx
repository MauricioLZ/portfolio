import { useState, useEffect } from "react";
import dialogueLines from "../data/dialogueLines";

function Dialogue()
{
    const [dialogue, setDialogue] = useState(dialogueLines[0]);
    const [isPaused, setIsPaused] = useState(false);
    const [index, setIndex] = useState(0);
    
    useEffect(() =>
    {
        let part = "";
        let offset = 0;
        let skips = 0;
        let charTime = 40;
        const dialogueEndSkips = 60;

        const flickIntervalId = setInterval(function ()
        {
            if (!isPaused) {
                if (index < dialogueLines.length && offset <= dialogueLines[index].length)
                {
                    part = dialogueLines[index].substring(0, offset);
                    if (skips === 0)
                    {
                        offset++;
                    }
                    setDialogue(part);
                }
                else {
                    skips++;
                    if (skips === dialogueEndSkips)
                    {
                        setIndex(i => i + 1);
                        skips = 0;
                        offset = 0;
    
                        const linesEnded = (index === dialogueLines.length);
                        if (linesEnded)
                        {
                            setIsPaused(true);
                            //document.querySelector(".dialogue").style.visibility = "hidden";
                        }
                    }
                }
            }
        }, charTime);

        return () => clearInterval(flickIntervalId);
    }, [index, isPaused]);

    function replay() {
        setIndex(0);
        setIsPaused(false);
    }

    return (
        <div className="dialogue">
            <h1>Mauricio</h1>
            <p>{dialogue}</p>
            <div className="dialogueReplay" onClick={replay}>
                <img src="./icons/redo.png" alt="icon"/>
            </div>
        </div>
    );
}

export default Dialogue;