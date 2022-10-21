
import './App.css';
import About from './components/about/about';
import ColorSwitcher from './components/color-switcher/color-switcher';
import Contact from './components/contact/contact';
import Experience from './components/experiences/experience';
import Header from './components/header/header';
import Nav from './components/nav/nav';

function App() {
  return (
    <div className="App">
      <ColorSwitcher />
      <Header />

      <Experience />
      <Contact />
      <Nav />

    </div>
  );
}

export default App;
