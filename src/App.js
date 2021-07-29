
import './App.css';
import React, { useEffect, useState } from 'react';
import Navigation from "./Navigation";
import Logo from "./Logo"
import Home from "./Home"
import About from "./About"
import Resume from "./Resume"
import Projects from "./Projects"
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const [show, setShow] = useState("home")
  const [loading, setLoading] = useState(true)

  const fakePromise = () => new Promise(res => setTimeout(() => res(), 3200))

  useEffect(() => {
    fakePromise().then(() => setLoading(false))
  }, [])

 

  return (
    <div>
      {
        loading ? <Logo/> :
        <>
          <Navigation setShow={setShow} show={show}/>
          {show === "home" ? <Home/> : null}
          {show === "about" ? <About/> : null}
          {show === "projects" ? <Projects/> : null}
          {show === "resume" ? <Resume/> : null}
        </>
      }
    </div>
  )
}

export default App;
