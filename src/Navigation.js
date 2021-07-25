import {debounce} from './helpers/debounce'
import React, {useState, useEffect} from "react"
import {Navbar, Container} from 'react-bootstrap';
import Logo from './Logo.svg' 

const Navigation = ({setShow}) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const [currentWidth, setCurrentWidth] = useState(0)
    const [showBars, setShowBars] = useState(false)

    const handleWidth = () => {

    }

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10)
        setPrevScrollPos(currentScrollPos)
    }, 100)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos, visible, handleScroll])
    return (
        <Navbar collapseOnSelect sticky="top" expand="sm" variant="dark" className="bg-dark justify-content-between" style={{top: visible ? '0' : '-80px' }} className="navbar">
            <Container>
                <Navbar.Brand style={{height: "65px", display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <img src={Logo} height="70px"/>
                </Navbar.Brand>
            </Container>
            <Container>
                <Navbar.Collapse className="justify-content-end">
                    <button className="navbar-buttons" onClick={() => setShow("home")}>HOME</button>
                    <button className="navbar-buttons" onClick={() => setShow("about")}>ABOUT</button>
                    <button className="navbar-buttons" onClick={() => setShow("projects")}>PROJECTS</button>
                    <button className="navbar-buttons" onClick={() => setShow("resume")}>RESUME</button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default Navigation;