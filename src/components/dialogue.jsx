import { useState, useEffect } from "react";
import dialogueLines from "../data/dialogueLines";

function Dialogue()
{
    const [dialogue, setDialogue] = useState(dialogueLines[0]);
    
    useEffect(() =>
    {
        let index = 0;
        let part = "";
        let offset = 0;
        let skips = 0;
        let charTime = 40;
        const dialogueEndSkips = 60;

        const flickIntervalId = setInterval(function ()
        {
            if (offset <= dialogueLines[index].length)
            {
                part = dialogueLines[index].substr(0, offset);
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
                    index++;
                    skips = 0;
                    offset = 0;

                    const linesEnded = (index === dialogueLines.length);
                    if (linesEnded)
                    {
                        //document.querySelector(".dialogue").style.visibility = "hidden";
                        clearInterval(flickIntervalId);
                    }
                }
            }
        }, charTime);

        return () => clearInterval(flickIntervalId);
    }, []);

    return (
        <div className="dialogue">
            <h1>Mauricio</h1>
            <p>{dialogue}</p>
        </div>
    );
}

export default Dialogue;