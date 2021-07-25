
import './App.css';
import React, { useState } from 'react';
import Navigation from "./Navigation";
import Home from "./Home"
import About from "./About"
import Resume from "./Resume"
import Projects from "./Projects"
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const [show, setShow] = useState("home")
  return (
    <div>
      <Navigation setShow={setShow}/>
      {show === "home" ? <Home/> : null}
      {show === "about" ? <About/> : null}
      {show === "projects" ? <Projects/> : null}
      {show === "resume" ? <Resume/> : null}
    </div>
  )
}

export default App;
