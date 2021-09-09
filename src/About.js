import {motion} from "framer-motion"
import {SiJavascript, SiRails, SiBootstrap, SiCss3, SiPostman, SiGithub, SiRedux, SiFramer}  from "react-icons/si"
import {DiSqllite, DiRuby} from "react-icons/di"
import {RiReactjsLine} from "react-icons/ri"
import {TiHtml5} from "react-icons/ti"
import {FaDatabase} from "react-icons/fa"

const line = "I am Harman, a full stack developer with a background in pharmacy and biochemistry. Before starting my journey in coding, my passion for helping others drove me towards the pharmacy field. However, my outreach was only limited to my community. I eventually found a new passion in code, which would allow me to make an impact on a larger scale in the lives of others through my applications. I look forward to combining both my passions to seeing how I can transform the healthcare field."

const sentence = {
    hidden: {opacity: 1},
    visible: {
        opacity: 1,
        transition: {
            delay: 0.001,
            staggerChildren: 0.01,
        }
    }
}

const letter = {
    hidden: {opacity: 0, y: 50},
    visible: {
        opacity: 1,
        y: 0,
    }
}

const cirVariant = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.05*delay,
            }
        }
    }
}

const imgVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 1
        }
    }
}

const About = () => {
    return (
        <div className="about-container">
            <div className="about-content">
                <div className="about-lang">
                    <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
                    <motion.div initial="hidden" animate="visible" variants={cirVariant(0)}><SiJavascript color="F0DB4F" /></motion.div>
                    <motion.div initial="hidden" animate="visible" variants={cirVariant(1)}><DiSqllite color="52A8DB" /></motion.div>
                    <motion.div initial="hidden" animate="visible" variants={cirVariant(2)}><SiRails color="red" /></motion.div>
                    <motion.div initial="hidden" animate="visible" variants={cirVariant(3)}><SiBootstrap color="8514F6" /></motion.div>
                    <motion.div initial="hidden" animate="visible" variants={cirVariant(4)}><RiReactjsLine color="61DBFB" /></motion.div>
                    <motion.div initial="hidden" animate="visible" variants={cirVariant(5)}><TiHtml5 color="E34C26" /></motion.div>
                    <motion.div initial="hidden" animate="visible" variants={cirVariant(6)}><SiCss3 color="264DE4" /></motion.div>
                    <motion.div initial="hidden" animate="visible" variants={cirVariant(7)}><DiRuby color="E31864" /></motion.div>
                        <motion.div initial="hidden" animate="visible" variants={cirVariant(8)}><SiPostman color="EF5B25" /></motion.div>
                    <motion.div initial="hidden" animate="visible" variants={cirVariant(9)}><SiGithub color="white" /></motion.div>
                    <motion.div initial="hidden" animate="visible" variants={cirVariant(10)}><FaDatabase color="silver" /></motion.div>
                    </div>
                </div>
                <div className="about">
                    <div className="about2">
                        <div className="about-img" >
                            <motion.img src={require("./photo.png").default} initial="hidden" animate="visible" variants={imgVariant}/>
                        </div>
                        <div className="about-text">
                            <motion.p 
                                className="load-screen--message" 
                                variants={sentence}
                                initial="hidden"
                                animate="visible"
                            > 
                                {
                                    line.split("").map((char, index) => {
                                        return (<motion.span key={char+ "-"+ index} variants={letter}>{char}</motion.span>)
                                    })
                                }
                            </motion.p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;