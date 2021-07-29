import R from "./Resume.png"
import PDF from "./Resume.pdf"

const Resume = () => {
    return (
        <div className="resume-container">
                <div className="resume">
                  <a href={PDF} target="_blank" rel="noopener noreferrer"> <img src={R}/> </a>
                </div>
        </div>
    )
}
export default Resume;