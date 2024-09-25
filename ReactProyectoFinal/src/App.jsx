import React from "react";
import Routing from "./routes/Routing";
import { BrowserRouter as Router } from 'react-router-dom'
import "../src/App.css"
import { ToastContainer } from "react-toastify";
import Footer from "./Components/Footer/Footer";

function App() {
  return(
      <div>
        
        <Router>
          <ToastContainer />
          <Routing/>
        </Router>  
        <Footer/>
      </div>
  )
}

export default App;