import Header from './components/Header';
import Hero from './sections/Hero';
import Characters from './sections/Characters';
import Vehicles from './sections/Vehicles';
import Weapons from './sections/Weapons';
import Gallery from './sections/Gallery';
import Community from './sections/Community';
import About from './sections/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Characters/>
      <Vehicles/>
      <Weapons/>
      <Gallery/>
      <Community/>
      <About/>
    </div>
  );
}
export default App;