import { useState } from 'react';
import './style/App.css';
import Sidebar from './components/sidebar';
import Portfolio from './components/portfolio';
import About from './components/about';
import Reviews from './components/reviews';
import Dialogue from './components/dialogue';
import Contact from './components/contact';

function App() 
{
    const [page, setPage] = useState(0);
    const [fullScreen, setFullScreen] = useState({ 
        isActive: false, 
        element: <div></div> 
    });

    function changePage(index) {
        console.log();
        setPage(index);
    }

    function showOnFullScreen(element) {
        setFullScreen({
            isActive: true,
            element: <div className="fullScreen" onMouseDown={hideFullScreen}><div>{element}</div></div>
        });
    }

    function hideFullScreen() {
        setFullScreen(prev => ({ 
            isActive: false, 
            element: prev.element
        }));
    }

    return (
        <div className="App">
          <Sidebar onTopicClick={(index) => changePage(index)}></Sidebar>
          <Dialogue></Dialogue>
          { page === 0 && 
              <Portfolio showOnFullScreen={showOnFullScreen} hideFullScreen={hideFullScreen}></Portfolio> 
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
          { fullScreen.isActive && fullScreen.element }
        </div>
    );
}

export default App;
