import {projectData} from "./projectData"
import {motion} from "framer-motion"
import React, {useState} from "react"
import Project from "./Project"


const Projects = () => {

    return (
        <div className="about-container">
            <div className="about-content">
                <div className="project" style={{overflowY: "scroll"}}>
                    {projectData.map((p, idx) => <Project p={p} key={idx}/>)}
                </div>
            </div>
        </div>
    )
}
export default Projects;