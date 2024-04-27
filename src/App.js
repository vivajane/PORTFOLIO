
import './App.css';
import AOS from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  
  return (
    <div className='container'>
      <Navbar/>
      <Home/> 
      <Projects/>
      <Experience/>
      <Contact/>


    </div>
  );
}

export default App;
