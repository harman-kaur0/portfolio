import R from "./Resume.png"
import PDF from "./Resume.pdf"
import {motion} from "framer-motion"
import React, {useState} from "react"

const Resume = () => {
  const [isHover, setHover] = useState(false)
    return (
        <div className="resume-container">
          <div className="resume" >
            <a href={PDF} target="_blank" rel="noopener noreferrer"> 
              <img src={R} /> 
            </a>
          </div>
        </div>
    )
}
export default Resume;