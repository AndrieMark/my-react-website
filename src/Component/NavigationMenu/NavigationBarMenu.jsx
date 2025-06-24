import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../CSS/Navigationbar.css";
import 'primeicons/primeicons.css';
        
        


function NavigationBarMenu() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const applyTheme = (isDark) => {
    document.body.className = isDark ? "dark" : "light";
  };

  useEffect(() => {
    applyTheme(darkMode);
  }, [darkMode]);

  useEffect(() => {
    applyTheme(darkMode);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // const scrollToTop = () => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // };

  const scrollToTop = () => {
      const startY  = window.scrollY;
      const duration = 800;
      const startTime = performance.now();

    const easeOutCubic = (t) => (--t) * t * t + 1;

    const animate = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeOutCubic(progress)
      window.scrollTo(0, startY * (1 - ease));
      if(progress <  1) {
        requestAnimationFrame(animate)
      }
    };

    requestAnimationFrame(animate)

  }


  return (
    <>
      <nav className="navbar">
        <div className="logo">LOGO</div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink
              to="/Home"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Listcar"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={() => setMenuOpen(false)}
            >
              Carlist
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Contact"
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </div>

        <div className="icons">
          <div className="theme-toggle" onClick={toggleTheme}>
            {darkMode ? "🌞" : "🌙"}
          </div>
          <div
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

    {showScrollTop && (
      <button className="scroll-to-top show" onClick={scrollToTop}>
      <span className="pi pi-arrow-up" style={{fontSize : '1rem'}}></span>
      </button>
    )}

    </>
  );
}

export default NavigationBarMenu;
