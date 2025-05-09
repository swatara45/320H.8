
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/" className="nav-link">CRYPTO PRICES</Link>
      <Link to="/currencies" className="nav-link">CURRENCIES</Link>
    </div>
  );
}