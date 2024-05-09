// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import "../Css/Homepage.css"
import backGround from "../assets/Images/homeBack.jpg"

const Homepage = () => {
    return (
        <>
            <Navbar />
            <div className="homepage--window">
                <div className="homepage--image">
                    <img src={backGround} alt="home image" />
                </div>
                <button className="home--btn">
                    <Link to="explore">
                        Explore
                    </Link>
                </button>
            </div >
        </>
    )
}
export default Homepage;