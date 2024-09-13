import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Fullpage from "./FullPage"
import Home  from "./components/Home/Home";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={ <div className="top">
             <Topbar/>
            <div className="container">
            <Fullpage/>
            </div>
            </div>
           } />
       
            
           
      </Routes>
    </Router>
    </div>
  
  );
}

export default App;
