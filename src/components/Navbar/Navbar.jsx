import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to={"/"} className="navbar-logo">
          Unit Converter
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to={"/"} className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/about"} className="nav-links">
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
