import { useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Cards from './Pages/Cards';
import Eyes from './Pages/Eyes';
import Info from './Pages/Info';
import Lending from './Pages/Lending';
import Marqee from './Pages/Marqee';
import Projects from './Pages/Projects';
import YellowPage from './Pages/YellowPage';
import LocomotiveScroll from 'locomotive-scroll';
import './lenis.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';

// import Test from './Pages/Test';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    
    // Initialize Locomotive Scroll
    const scroll = new LocomotiveScroll({
      el: containerRef.current, // Target the container
      smooth: true,            // Enable smooth scrolling
    
    } as any);

    // Cleanup Locomotive Scroll on component unmount
    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <>
      <div ref={containerRef} className='  overflow-x-hidden'>
        <Navbar />
        <Lending  />
        <Marqee />
        <Info />
        <Eyes />
        <Projects />
        <Cards />
        <YellowPage />
      
        
      </div>
    </>
  );
}

export default App;
