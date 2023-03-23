import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <h1>Best Blog Posts ever</h1>
      <Link to="/blog">
        <button>Read Now</button>
      </Link>
    </header>
  );
}

export default Header;
