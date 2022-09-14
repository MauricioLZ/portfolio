import { useState } from 'react';
import './style/App.css';
import Sidebar from './components/sidebar';
import Portfolio from './components/portfolio';
import About from './components/about';
import Reviews from './components/reviews';
import Dialogue from './components/dialogue';
import Contact from './components/contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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

    const url = window.location.href;

    if (url.includes("about") && page !== 1) setPage(1);
    else if (url.includes("references") && page !== 2) setPage(2);
    else if (url.includes("contact") && page !== 3) setPage(3);

    return (
        <BrowserRouter>
            <div className="App">
                <Sidebar page={page} onTopicClick={(index) => changePage(index)}></Sidebar>
                <Dialogue></Dialogue>
                { page === 0 && <Portfolio showOnFullScreen={showOnFullScreen} hideFullScreen={hideFullScreen}></Portfolio> }
                { page === 1 && <About></About> }
                { page === 2 && <Reviews></Reviews> }
                { page === 3 && <Contact></Contact> }
                { fullScreen.isActive && fullScreen.element }
            </div>

            <Routes>
                <Route path="/" element={<Portfolio showOnFullScreen={showOnFullScreen} hideFullScreen={hideFullScreen} />} />
                <Route path="/portfolio" element={<Portfolio showOnFullScreen={showOnFullScreen} hideFullScreen={hideFullScreen} />} />
                <Route path="/about" element={<About />} />
                <Route path="/references" element={<Reviews />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
