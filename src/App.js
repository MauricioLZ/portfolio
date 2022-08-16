import './style/App.css';
import Avatar from '@mui/material/Avatar';
import photo from "./img/photoMauricio.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Avatar alt="Mauricio Lopes Zugno" src={photo} sx={{ width: 400, height: 400}}/>
      </header>
    </div>
  );
}

export default App;
