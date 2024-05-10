// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/Logo/ecologo.png";
import "../static/navbar.css";
const Navbar = () => {
  return (
    <div className='flex items-center px-12 py-6 text-black'>
      <div className='navbar-logo'>
        <Link to='/' className=''>
          <img src={logo} className='w-[40%] h-auto' />
        </Link>
      </div>
      <ul className='navbar-links'>
        <Link to='/'>
          <li>Home</li>
        </Link>

        <Link to='/explore'>
          {" "}
          <li>Explore</li>
        </Link>
      </ul>
    </div>
  );
};
export default Navbar;
