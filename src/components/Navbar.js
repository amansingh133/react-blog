import { Link } from "react-router-dom";
import Logo from "./../assets/images/blog.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <Link className="navLogo" to="/">
        <img src={Logo} alt="logo" />
      </Link>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/about">
          About
        </Link>
        <Link className="navLink" to="/blog">
          BLog
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
