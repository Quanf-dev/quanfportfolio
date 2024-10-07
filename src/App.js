import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import { BrowserRouter as Router, Routes, R } from "react-router-dom";


import Fullpage from "./FullPage"
import Preloader from "./components/Preloader/Preloader";
import { useEffect, useState } from "react";

function App() {
  const [isLoading,setIsLoading] = useState(false) ;
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if the F5 key was pressed
      if (event.key === 'F5') {
        event.preventDefault(); // Prevent page refresh
        alert('F5 is disabled.'); // Optional: provide user feedback
      }
    };

    // Add event listener for keydown
    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  useEffect(() => {
    setIsLoading(true) ;
    setTimeout(()=>{
      setIsLoading(false) ; 
    },4500) 
  },[])

  return (
    <>
       {isLoading ? <Preloader/> : <Fullpage/>}
       </>
  );
}

export default App;
