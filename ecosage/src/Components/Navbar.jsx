// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/ecologo.png"
import "../Css/Navbar.css"
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="navbar-logo">
                    <Link to="/" className="link--expo">
                        <img src={logo} alt="Eco-Sage-LOGO" />
                    </Link>
                </div>
                <ul className="navbar-links">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="weather">
                        <li>Weather</li>
                    </Link>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </>
    )
}
export default Navbar;