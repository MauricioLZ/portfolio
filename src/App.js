import { useState } from 'react';
import './style/App.css';
import Sidebar from './components/sidebar';
import Portfolio from './components/portfolio';
import About from './components/about';
import Reviews from './components/reviews';
import Dialogue from './components/dialogue';
import Contact from './components/contact';

function App() {
  const [page, setPage] = useState(0);

  function changePage(index) {
    setPage(index);
  }

  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Dialogue></Dialogue>
      { page === 0 && 
        <Portfolio></Portfolio> 
      }
      {page === 1 &&
        <About></About>
      }
      {page === 2 &&
        <Reviews></Reviews>
      }
      {page === 3 &&
        <Contact></Contact>
      }
    </div>
  );
}

export default App;
