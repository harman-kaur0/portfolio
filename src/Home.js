import {ReactComponent as Logo} from "./Logo.svg"
const Home = () => {
    return (
        <div className="home-container">
            <div className="home-left">
                <div className="home-text1">Hi, my name is</div>
                <div className="home-text2">Harmandeep Kaur</div>
            </div>
            <div className="home-right">
                <Logo className="home-logo"/>
            </div>
        </div>
    )
}
export default Home;