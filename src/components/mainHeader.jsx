import Avatar from '@mui/material/Avatar';
import photo from "../img/photoMauricio.jpg";

function MainHeader()
{
    return (
        <header className="App-header">
            <Avatar alt="Mauricio Lopes Zugno" src={photo} sx={{ width: 400, height: 400 }} />
            <h1>Mauricio Lopes Zugno</h1>
            <h3>Developer</h3>
            <div className="sectionsLinks">
                <a href="#Portfolio">Portfolio</a>
                <a href="#About">About</a>
                {/* <a href="#Timeline">Timeline</a> */}
                <a href="#Reviews">Reviews</a>
            </div>
        </header>
    );
}

export default MainHeader;