import Topbar from "./components/topbar/Topbar";
import "./app.scss"
import { BrowserRouter as Router, Routes, R } from "react-router-dom";
import { useState } from "react";

import Fullpage from "./FullPage"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="top">
     <Topbar/>
     <div className="container">
       <Fullpage/>
     </div>
    </div>
  );
}

export default App;
