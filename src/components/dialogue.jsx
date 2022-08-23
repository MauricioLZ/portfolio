import { useState, useEffect } from "react";
import dialogueLines from "../data/dialogueLines";

function Dialogue()
{
    const [dialogue, setDialogue] = useState(dialogueLines[0]);
    
    let index = 0;
    let part = "";
    let offset = 0;
    let skips = 0;
    let charTime = 40;
    const dialogueEndSkips = 60;

    useEffect(() =>
    {
        const flickIntervalId = setInterval(function ()
        {
            if (offset <= dialogueLines[index].length)
            {
                part = dialogueLines[index].substr(0, offset);
                if (skips == 0)
                {
                    offset++;
                }
                setDialogue(part);
            }
            else {
                skips++;
                if (skips == dialogueEndSkips)
                {
                    index = (index < dialogueLines.length - 1) ? index + 1 : 0;
                    skips = 0;
                    offset = 0;
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