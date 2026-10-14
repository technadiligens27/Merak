"use client";

import { useState } from "react";
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header className="merak-navbar">
      <nav className="merak-nav-container">

        {/* LOGO */}
        <Link href="/" className="merak-logo" onClick={closeMenu}>
          <div className="merak-logo-icon">M</div>
          <span className="merak-logo-text">MERAK</span>
        </Link>

        {/* NAVIGATION LINKS */}
        <div
          className={`merak-nav-links ${menuOpen ? "merak-nav-open" : ""}`}
        >
          <Link href="/" className="merak-nav-link active" onClick={closeMenu}>
            Home
          </Link>

          <Link href="/about" className="merak-nav-link" onClick={closeMenu}>
            About
          </Link>

          <Link href="/news-events" className="merak-nav-link" onClick={closeMenu}>
            News/Events
          </Link>

          <Link
            href="/upcoming-events"
            className="merak-nav-link"
            onClick={closeMenu}
          >
            Upcoming Events
          </Link>

          <Link
            href="/sensory-board"
            className="merak-nav-link"
            onClick={closeMenu}
          >
            Sensory Board
          </Link>

          {/* DROPDOWN */}
          <div className="merak-dropdown">
            <button
              type="button"
              className="merak-dropdown-btn"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
            >
              Merak
              <span
                className={`merak-dropdown-arrow ${
                  dropdownOpen ? "rotated" : ""
                }`}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </span>
            </button>

            {dropdownOpen && (
              <div className="merak-dropdown-menu">
                <Link href="/products" onClick={closeMenu}>
                  Products
                </Link>
                <Link href="/services" onClick={closeMenu}>
                  Services
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* CONTACT BUTTON */}
        <Link href="/contact" className="merak-contact-btn">
          Contact Us
        </Link>

        {/* MOBILE MENU */}
        <button
          type="button"
          className={`merak-menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </nav>
    </header>
  );
};

export default Navbar;