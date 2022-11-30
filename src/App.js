import { useState } from 'react';
import './style/App.css';
import './style/responsive.css';
import Sidebar from './components/sidebar';
import Portfolio from './components/portfolio';
import About from './components/about';
//import Reviews from './components/reviews';
import Dialogue from './components/dialogue';
import Contact from './components/contact';

function App() 
{
    const [page, setPage] = useState(0);
    const [reloadTrigger, setReload] = useState(false);
    const [fullScreen, setFullScreen] = useState({ 
        isActive: false, 
        element: <div></div> 
    });

    function changePage(index) {
        setPage(index);
        if (index === 0) {
            setReload(!reloadTrigger);
        }
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

    //const url = window.location.href;

    //if (url.toLowerCase().includes("about") && page !== 1) setPage(1);
    //else if (url.toLowerCase().includes("references") && page !== 2) setPage(2);
    //else if (url.toLowerCase().includes("contact") && page !== 2) setPage(3);

    return (
        <div className="App">
            <Sidebar page={page} onTopicClick={(index) => changePage(index)}></Sidebar>
            <Dialogue></Dialogue>
            { page === 0 && <Portfolio showOnFullScreen={showOnFullScreen} reloadTrigger={reloadTrigger}></Portfolio> }
            { page === 1 && <About showOnFullScreen={showOnFullScreen}></About> }
            { /*page === 2 && <Reviews></Reviews>*/ }
            { page === 2 && <Contact></Contact> }
            { fullScreen.isActive && fullScreen.element }
        </div>
    );
}

export default App;
