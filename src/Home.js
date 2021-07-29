
import {motion} from "framer-motion"
import {HiOutlineMail} from "react-icons/hi"
import {FiGithub} from "react-icons/fi"
import {AiOutlineLinkedin} from "react-icons/ai"
import emailjs from "emailjs-com"
import {Modal, Button} from "react-bootstrap"
import React, {useState, useEffect} from "react"
import {email} from "./email"

const homeVariant  = {
    hidden: {
        opacity: 0,
        y: 600,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.4,
            duration: 2
        }
    }
}

const divVariant = {
    hidden: {
        opacity: 0,
        y: 700
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7
        }

    }
}

const Home = () => {
    const [show, setShow] = useState(false)
    const [form, setForm] = useState({subject: "", name: "", email: "", message: ""})

    const handleChange = e => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const hideModal = () => {
        setShow(false)
        setForm({subject: "", name: "", email: "", message: ""})
    }

    const sendEmail = e => {
        e.preventDefault();

        emailjs.sendForm('gmail', email.template, e.target, email.userId)
            .then((result) => {
            console.log(result.text);
            hideModal()
        }, (error) => {
            console.log(error.text);
        });
    }

    const handleDiv = e => {
        if(e.target.className === "overlay") {
            setShow(false)
        }
    }


    return (
        <>
            <motion.div className="home-container" initial="hidden" animate="visible" variants={homeVariant}>
                <div className="home-left">
                    <div className="home-text1">Hi, my name is</div>
                    <div className="home-text2">Harmandeep Kaur</div>
                    <div className="home-text3">and I am a full stack developer based in Bay Area.</div>
                    <div className="home-logos">
                        <motion.a whileHover={{scale: 1.3}} onClick={() => setShow(true)}><HiOutlineMail color="red"/></motion.a>
                        <motion.a whileHover={{scale: 1.3}} href="https://github.com/harman-kaur0" target="_blank" rel="noopener noreferrer"><FiGithub color="white"/></motion.a>
                        <motion.a whileHover={{scale: 1.3}} href="https://www.linkedin.com/in/harmandeepks/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin color="006EAB"/></motion.a>
                    </div>
                </div>
            </motion.div>

            {       
                show ? 
                <div 
                    className="overlay" 
                    onClick={handleDiv}
                    style={{ height: "100vh", width: "100vw", zIndex: "999", position: "absolute", top: "0", display: "flex", justifyContent: "center", alignItems: "center"}}
                >
                    <motion.div className="form-show" initial="hidden" animate="visible" variants={divVariant}>
                        <div style={{top: "0", marginRight: "auto", display: "flex"}}><button onClick={() => setShow(false)} style={{color: "snow", background: "transparent", border: "none"}}>X</button></div>
                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}> 
                            <h3 style={{color: "gold", fontFamily: "Verdana, Geneva, Tahoma, sans-serif", fontWeight: "bold", marginBottom: "20px", marginTop: "10px"}}>Connect With Me</h3>
                            <form onSubmit={sendEmail} style={{display: "flex", flexDirection: "column", alignItems: "center"}} className="input-container" autoComplete="off">
                                <input name="subject" value={form.subject} onChange={handleChange} className="name formEntry" placeholder="Subject"/>
                                <input name="name" value={form.name} onChange={handleChange} className="name formEntry" placeholder="Name"/>
                                <input name="email" value={form.email} onChange={handleChange} className="email formEntry" style={{float: "right"}} placeholder="Email"/>
                                <textarea name="message" value={form.message} onChange={handleChange} className="message formEntry" placeholder="Message"/>
                                <Button type="submit" className="navbar-buttons" style={{border: "none", backgroundColor: "black", color: "rgb(138, 139, 212)"}}>SEND</Button>
                            </form>
                        </div>
                    </motion.div>
                </div>
                : null
            }
        </>
    )
}
export default Home;