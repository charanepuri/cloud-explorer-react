import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";

import "./Navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <NavLink to="/" className="logo" onClick={closeMenu}>
          Cloud Explorer
        </NavLink>

        <nav className={isMenuOpen ? "nav-menu active" : "nav-menu"}>
          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/iaas" onClick={closeMenu}>
            IaaS
          </NavLink>

          <NavLink to="/paas" onClick={closeMenu}>
            PaaS
          </NavLink>

          <NavLink to="/saas" onClick={closeMenu}>
            SaaS
          </NavLink>

          <NavLink to="/comparison" onClick={closeMenu}>
            Comparison
          </NavLink>

          <NavLink to="/quiz" onClick={closeMenu}>
            Quiz
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>
        </nav>

        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <HiOutlineXMark /> : <HiOutlineBars3 />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;