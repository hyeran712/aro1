import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className="header">
      <div className="header-inner">
        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src={`${process.env.PUBLIC_URL}/images/aro-logo.png`}
            alt="ARO"
          />
        </Link>

        {/* MENU */}
        <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
          <Link to="/about" className={isActive("/about")} onClick={closeMenu}>
            ABOUT
          </Link>

          <Link
            to="/service"
            className={isActive("/service")}
            onClick={closeMenu}
          >
            SERVICES
          </Link>

          <Link to="/menu" className={isActive("/menu")} onClick={closeMenu}>
            MENU
          </Link>

          <Link
            to="/portfolio"
            className={isActive("/portfolio")}
            onClick={closeMenu}
          >
            GALLERY
          </Link>

          <Link
            to="/process"
            className={isActive("/process")}
            onClick={closeMenu}
          >
            PROCESS
          </Link>

          <Link
            to="/journal"
            className={isActive("/journal")}
            onClick={closeMenu}
          >
            JOURNAL
          </Link>
        </nav>

        {/* RIGHT */}
        <div className="header-actions">
          <span className="est">EST. 2026</span>

          <Link to="/contact" className="inquiry-btn" onClick={closeMenu}>
            REQUEST A QUOTE
            <span>→</span>
          </Link>

          {/* MOBILE MENU */}
          <button
            className="menu-toggle"
            type="button"
            aria-label="메뉴 열기"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
