import { useEffect, useRef, useState } from 'react';
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
import { motion } from 'motion/react';

// import Test from './Pages/Test';

function App() {
  const containerRef = useRef(null);
  const [IsHide, setIsHide] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIsHide(false)
      console.log("set")
    }, 3000);
  }, [])
  

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
      <motion.div initial={{ width:"100vw" ,  overflow:"hidden" , scale:.7 , borderRadius:20} } animate={{scale:1 }} transition={{duration:3 , ease:[0.25, 1, 0.5, 1]}} ref={containerRef} className= {` ${IsHide ? "h-screen overflow-hidden " : " h-fit overflow-x-hidden"} `}>
       

        <Navbar />
        <Lending  />
        <Marqee />
        <Info />
        <Eyes />
        <Projects />
        <Cards />
        <YellowPage />
     
      
        
      </motion.div>
    </>
  );
}

export default App;
