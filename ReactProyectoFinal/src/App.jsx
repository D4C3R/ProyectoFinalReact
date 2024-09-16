import React from "react";
import Routing from "./routes/Routing";
import { BrowserRouter as Router } from 'react-router-dom'
import "../src/App.css"
import { ToastContainer } from "react-toastify";

function App() {
  return(
      <div>
        
        <Router>
          <ToastContainer />
          <Routing/>
        </Router>  
      </div>
  )
}

export default App;