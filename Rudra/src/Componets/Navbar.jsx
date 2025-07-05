import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import React, { useRef, useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const headerRef = useRef();

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  useGSAP(() => {
    gsap.from(headerRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    try {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (storedUser) setUser(storedUser);
    } catch (err) {
      console.error("User parse error", err);
      setUser(null);
    }
  }, []);

  const menuItems = [
    { label: "HOME", path: "/" },
    { label: "CATEGORY", path: "/category" },
    { label: "FASHION", path: "/fashion" },
    { label: "FAVORITE", path: "/favorite" },
    { label: "CONTACT US", path: "/contactus" },
  ];

  return (
    <>
      <header
        ref={headerRef}
        className="z-30 sticky top-0 bg-amber-50 border-b border-red-500 px-4 py-4 flex justify-between items-center shadow-md"
      >
        <h1 className="text-2xl font-extrabold lg:text-4xl text-amber-800">FASHION</h1>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6">
          {menuItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              className="text-sm font-semibold hover:text-amber-600 transition"
            >
              {label}
            </Link>
          ))}
          {user ? (
            <Link
              to="/profile"
              className="flex items-center gap-2 text-sm font-bold bg-amber-700 text-white rounded-full px-4 py-2"
            >
              <CgProfile />
              <span>Profile</span>
            </Link>
          ) : (
            <Link
              to="/login"
              className="flex items-center gap-2 text-sm font-bold bg-amber-700 text-white rounded-full px-4 py-2"
            >
              <SiGnuprivacyguard />
              <span>Login</span>
            </Link>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          onClick={toggleMenu}
          className="text-2xl lg:hidden text-amber-700"
          aria-label="Toggle menu"
        >
          <FaBars />
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute z-20 w-full bg-amber-100 transition-all duration-300 origin-top ${
          isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        } transform`}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          {menuItems.map(({ label, path }) => (
            <Link
              key={label}
              to={path}
              onClick={closeMenu}
              className="text-sm font-bold text-amber-800"
            >
              {label}
            </Link>
          ))}
          {user ? (
            <Link
              to="/profile"
              onClick={closeMenu}
              className="flex items-center gap-2 text-sm font-bold bg-amber-700 text-white rounded-full px-4 py-2"
            >
              <CgProfile />
              <span>Profile</span>
            </Link>
          ) : (
            <Link
              to="/login"
              onClick={closeMenu}
              className="flex items-center gap-2 text-sm font-bold bg-amber-700 text-white rounded-full px-4 py-2"
            >
              <SiGnuprivacyguard />
              <span>Login</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
