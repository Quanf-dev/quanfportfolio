import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import { BrowserRouter as Router, Routes, R } from "react-router-dom";


import Fullpage from "./FullPage"
import Preloader from "./components/Preloader/Preloader";
import { useEffect, useState } from "react";

function App() {
  const [isLoading,setIsLoading] = useState(true) ;
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
