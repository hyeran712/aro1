import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

function Header({ homeHero = false }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };

  return (
    <header className={`header${homeHero ? " header-home" : ""}`}>
      <div className="header-inner">
        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            src={`${process.env.PUBLIC_URL}/images/aro-logo.png`}
            alt="ARO"
          />
        </Link>

        {/* MENU */}
        <nav className="nav">
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
            to="/gallery"
            className={isActive("/gallery")}
            onClick={closeMenu}
          >
            GALLERY
          </Link>

          <Link
            to="/journal"
            className={isActive("/journal")}
            onClick={closeMenu}
          >
            JOURNAL
          </Link>
          <Link to="/contact" className={isActive("/contact")} onClick={closeMenu}>
            CONTACT
          </Link>
        </nav>

        {/* RIGHT */}
        <div className="header-actions">
          <span className="est">EST. 2026</span>

          {/* MOBILE MENU */}
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-navigation"
        aria-label="모바일 메뉴"
        hidden={!menuOpen}
        onKeyDown={(event) => {
          if (event.key === "Escape") {
            closeMenu();
            event.currentTarget.parentElement.querySelector('.menu-toggle').focus();
          }
        }}
      >
        {[
          ['/about', 'ABOUT'],
          ['/service', 'SERVICES'],
          ['/menu', 'MENU'],
          ['/gallery', 'GALLERY'],
          ['/journal', 'JOURNAL'],
          ['/contact', 'CONTACT'],
        ].map(([path, label]) => (
          <Link key={path} to={path} className={isActive(path)} onClick={closeMenu}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export default Header;
