import {debounce} from './helpers/debounce'
import React, {useState, useEffect} from "react"
import Logo from './Logo.svg' 
import {motion} from "framer-motion"
import {GoThreeBars} from "react-icons/go"

const variant = (delay) => {
    return {
        hidden: {
            opacity: 0,
            x: 200,
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.15*delay,
                duration: 0.5
            }
        }
    }
}

const logoVariant  = {
    hidden: {
        opacity: 0,
        x: 300,
        y: 300,
    },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 2
        }
    }
}

const divVariant = {
    hidden: {
        opacity: 0,
        x: 700
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        }

    }
}

const Navigation = ({setShow, show}) => {
    const [prevScrollPos, setPrevScrollPos] = useState(0)
    const [visible, setVisible] = useState(true)
    const [showBars, setShowBars] = useState(window.innerWidth < 575)
    const [showNav, setShowNav] = useState(false)

    const handleWidth = debounce(() => {
        const currentWidth = window.innerWidth
        if (currentWidth < 575) {
            setShowBars(true)
        }else {
            setShowBars(false)
            setShowNav(false)
        }
    }, 50)

    useEffect(() => {
        window.addEventListener('resize', handleWidth)
        return() => window.removeEventListener('resize', handleWidth)
    }, [showBars, handleWidth])

    const handleScroll = debounce(() => {
        const currentScrollPos = window.pageYOffset
        setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10)
        setPrevScrollPos(currentScrollPos)
    }, 100)
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevScrollPos, visible, handleScroll])

    const handleClick = e => {
        setShow(e.target.innerText.toLowerCase())
        setShowNav(false)
    }

    const handleDiv = e => {
        if(e.target.className === "overlay") {
            setShowNav(false)
        }
    }

    return (
        <>
            <nav className="navbar" style={{top: visible ? '0' : '-80px'}}>
                <div style={{display: "flex", alignItems: "center", width: "100%"}}>
                    <motion.img initial="hidden" animate="visible" variants={logoVariant} src={Logo} height="60px" style={{alignSelf: "flex-start", marginLeft: "20px"}}/>
                    <div style={{marginLeft: "auto", marginRight: "20px"}}>
                        { showBars ? <div onClick={() => setShowNav(true)} style={{cursor: "pointer"}}><GoThreeBars color="white" size="30px"/></div> :
                        <>
                            <motion.button initial="hidden" animate="visible" variants={variant(0)} className={`navbar-buttons ${show === "home" ? "active" : null}`} onClick={() => setShow("home")}>HOME</motion.button>
                            <motion.button initial="hidden" animate="visible" variants={variant(1)} className={`navbar-buttons ${show === "about" ? "active" : null}`} onClick={() => setShow("about")}>ABOUT</motion.button>
                            <motion.button initial="hidden" animate="visible" variants={variant(2)} className={`navbar-buttons ${show === "projects" ? "active" : null}`} onClick={() => setShow("projects")}>PROJECTS</motion.button>
                            <motion.button initial="hidden" animate="visible" variants={variant(3)} className={`navbar-buttons ${show === "resume" ? "active" : null}`} onClick={() => setShow("resume")}>RESUME</motion.button>
                        </>
                    }
                    </div>
                </div>
            </nav>
            {
                showNav ? 
                <div className="overlay" 
                    onClick={handleDiv}
                    style={{ height: "100vh", width: "100vw", zIndex: "999", position: "absolute", top: "0"}}>
                    <motion.div className="nav-div" initial="hidden" animate="visible" variants={divVariant}>
                        <div style={{top: "0", marginRight: "auto", display: "flex"}}><button onClick={() => setShowNav(false)} style={{color: "rgb(138, 139, 212)", background: "transparent", border: "none"}}>X</button></div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50%"}}> 
                            <motion.button initial="hidden" animate="visible" variants={variant(0)}  onClick={handleClick} className="buttons">HOME</motion.button>
                            <motion.button initial="hidden" animate="visible" variants={variant(1)}  onClick={handleClick} className="buttons">ABOUT</motion.button>
                            <motion.button initial="hidden" animate="visible" variants={variant(2)}  onClick={handleClick} className="buttons">PROJECTS</motion.button>
                            <motion.button initial="hidden" animate="visible" variants={variant(3)}  onClick={handleClick} className="buttons">RESUME</motion.button>
                        </div>
                    </motion.div>
                </div>
                : null
            }
        </>
    )
}


export default Navigation;