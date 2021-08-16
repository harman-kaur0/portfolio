import {motion} from "framer-motion"
import React, {useState} from "react"
import {IoIosPlayCircle} from "react-icons/io"
import {Modal} from "react-bootstrap"

const divVariant = {
    hidden: {
        opacity: 0,
        y: 600,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.2,
            duration: 0.5
        }
    }
}

const Project = ({p}) => {

    const [isHover, setHover] = useState(false)
    const [show, setShow] = useState(false)
    return (
        <>
        <motion.div 
            className= "project-div"
            initial= "hidden" animate="visible" variants={divVariant}
            onHoverStart={() => setHover(true)} 
            onHoverEnd={() => setHover(false)}
            onClick = {() => isHover ? setHover(false) : setHover(true)}
            whileHover={{ scale: 1, originX: 0, boxShadow: "0px 0px 8px rgb(255,255,255)"}} 
        >
            <h3 style={{
                        color: "rgb(138, 139, 212)", 
                        fontFamily: "Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif", 
                        marginTop: "5px", 
                        marginLeft: "5px",
                        }}>
                {p.name}
            </h3>

            <p style={{
                color: "gold",
                fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
                width: "70%",
                marginTop: "30px",
                marginLeft: "5px",
                fontSize: "clamp(12px, 2vw, 16px)"
            }}
            >
                {p.description}
            </p>

            { 
                isHover ?
                <div 
                    style={{
                        position: "absolute", 
                        display: "flex", 
                        justifyContent: "center", 
                        alignItems: "center",  
                        width: "100%", 
                        height: "100%", 
                        top: 0,
                        left: 0,
                        background: "rgba(258, 279, 553, 0.5)",
                    }}
                >
                    { p.frontend ?
                    <a href={p.frontend} target="_blank" rel="noopener noreferrer"><button className="pButton"><span>Frontend</span></button></a> : null 
                    }
                    {p.backend ? 
                    <a href={p.backend} target="_blank" rel="noopener noreferrer"><button className="pButton"><span>Backend</span></button></a> : null
                    }
                    {p.source ?
                    <a href={p.source} target="_blank" rel="noopener noreferrer"><button className="pButton"><span>Source</span></button></a> : null
                    }
                    <button className="pButton" onClick={() => setShow(true)}><span><IoIosPlayCircle/></span></button>
                </div> 
                : null
            }
                    <Modal 
                        show={show} 
                        onHide={() => setShow(false)} animation={false} 
                        className="modal"
                    >
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body>
                            <div style={{position: "relative", paddingBottom: "56.25%", height: 0}}><iframe src={p.demo} frameBorder="0" allowFullScreen style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}></iframe></div>
                        </Modal.Body>
                    </Modal>
        </motion.div>
        </>
    )
}

export default Project