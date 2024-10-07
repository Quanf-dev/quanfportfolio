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
      
      if (event.key === 'F5') {
        event.preventDefault(); 
        alert('Dont F5 in slidProject.'); 
      }
    };

    
    window.addEventListener('keydown', handleKeyDown);


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
