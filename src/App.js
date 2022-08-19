import './style/App.css';
import MainHeader from './components/mainHeader';
import Portfolio from './components/portfolio';
import About from './components/about';
import Reviews from './components/reviews';

function App() {
  return (
    <div className="App">
      <MainHeader></MainHeader>
      <Portfolio></Portfolio>
      <About></About>
      {/* <section id="Timeline"> </section> */}
      <Reviews></Reviews>
    </div>
  );
}

export default App;
