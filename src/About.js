import {ReactComponent as Logo} from "./Logo.svg"
import {SiJavascript, SiRails, SiBootstrap, SiCss3, SiPostman, SiGithub}  from "react-icons/si"
import {DiSqllite, DiRuby} from "react-icons/di"
import {RiReactjsLine} from "react-icons/ri"
import {TiHtml5} from "react-icons/ti"
import {FaDatabase} from "react-icons/fa"

const About = () => {
    return (
        <div className="about-container">
            <div className="about">
                <div className="about-header">About me</div>
                <div className="about2">
                    <div className="about-text">I am full stack developer</div>
                    <div className="about-img">
                        <img/>
                    </div>
                </div>
                <div className="about-lang">
                    <SiJavascript size="40px" color="F0DB4F"/>
                    <DiSqllite size="40px" color="52A8DB"/>
                    <SiRails size="40px" color="red"/>
                    <SiBootstrap size="40px" color="8514F6"/>
                    <RiReactjsLine size="40px" color="61DBFB"/>
                    <TiHtml5 size="40px" color="E34C26"/>
                    <SiCss3 size="40px" color="264DE4"/>
                    <DiRuby size="40px" color="E31864"/>
                    <SiPostman size="40px" color="EF5B25"/>
                    <SiGithub size="40px" color="black"/>
                    <FaDatabase size="40px" color="silver"/>
                </div>
            </div>
        </div>
    )
}
export default About;