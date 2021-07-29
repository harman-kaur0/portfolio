import {motion} from "framer-motion"


const svgVariants = {
    hidden: {
        // rotate: -360,
        pathLength: 0
    },
    visible: {
        rotate: 0,
        pathLength: 1,
        transition: {
            duration: 1,
            delay: 1
        }
    }
}

const hVariant = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 2
        }
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
                delay: 0.3*delay,
            }
        }
    }
}

const fillVariant = {
    hidden: {
        fill: "none",
        opacity: 0
    },
    visible: {
        opacity: 1,
        fill: "rgba(201, 202, 245, 0.2)",
        transition: {
            delay: 2.5
        }
    }
}

const Logo = () => {
    return (
        <motion.div style={{height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}> 
            <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300" height="500px">
                <motion.g initial="hidden" animate="visible">
                    <motion.path style={{stroke: "rgb(138, 139, 212)", fill: "none", strokeWidth: "2px"}} variants={svgVariants} class="st0" d="M51.1,151.1c0-56.2,45-101.3,101-101.3c56.1,0,101.3,45.4,101.3,101.8c0,55.9-45.8,101.3-102,101.3
                        C96.2,252.8,51.1,207.1,51.1,151.1z"/>
                    <motion.path variants={fillVariant} class="st0" d="M51.1,151.1c0-56.2,45-101.3,101-101.3c56.1,0,101.3,45.4,101.3,101.8c0,55.9-45.8,101.3-102,101.3
                        C96.2,252.8,51.1,207.1,51.1,151.1z"/>
                    <motion.path style={{stroke: "rgb(138, 139, 212)", fill: "rgb(138, 139, 212)", strokeWidth: "2px"}} variants={hVariant} class="st1" d="M160.1,150.8c-2.4,0-3.9,0-5.3,0c-3.3,0-6.6,0-10.5,0c0,11.7,0,23.1,0,34.9c-3.5,0-6.4,0-9.7,0
                        c0-25.9,0-52,0-78.4c2.9,0,5.8,0,9.2,0c0,11.6,0,23.2,0,35.2c5.4,0,10.3,0,16,0c0-11.6,0-23.3,0-35.2c3.5,0,6.3,0,9.5,0
                        c0,26,0,52,0,78.4c-2.8,0-5.7,0-9.2,0C160.1,174.4,160.1,163,160.1,150.8z"/>
                    <motion.path style={{fill: "rgba(201, 202, 245, 0.2)", stroke: "gold", strokeWidth: "3px"}} variants={cirVariant(0)} class="st3" d="M123.8,198c5.9,0,10.8,4.8,11,10.6c0.2,5.5-5.1,10.9-10.7,10.9c-5.7,0-10.8-5-10.9-10.7
                        C113,203.1,118,198,123.8,198z"/>
                    <motion.path style={{fill: "rgba(201, 202, 245, 0.2)", stroke: "gold", strokeWidth: "3px"}} variants={cirVariant(1)} class="st2" d="M152,198c5.8,0,10.8,4.8,10.9,10.6c0.1,5.8-5.2,11.3-11,11.2c-5.6,0-10.8-5.1-10.9-10.8
                        C140.9,203.1,146,198,152,198z"/>
                    <motion.path style={{fill: "rgba(201, 202, 245, 0.2)", stroke: "gold", strokeWidth: "3px"}} variants={cirVariant(2)} class="st4" d="M190.6,209c-0.1,5.6-5.6,10.8-11.1,10.5c-5.8-0.2-10.7-5.4-10.5-11.1c0.2-5.8,5.3-10.6,11.1-10.5
                        C185.9,198.2,190.8,203.2,190.6,209z"/>
                </motion.g>
            </motion.svg>
        </motion.div>
    )

}

export default Logo