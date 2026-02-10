import { useTheme } from "../hooks/useTheme";
import "./Navbar.css";
import Searchbar from "./Searchbar";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { color } = useTheme();
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>Foodeato</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
