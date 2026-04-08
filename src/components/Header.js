// import { useState, useEffect } from "react";
// import logo from "../assets/Namir logo_2.png";
// import logo2 from "../assets/Namir logo_3.png";
// import { useTheme } from "../contexts/ThemeContext";
// import "./Header.css";

// const Header = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("home");
//   const { darkMode, toggleDarkMode } = useTheme();

//   useEffect(() => {
//     const sections = document.querySelectorAll("section[id]");
//     const observerOptions = {
//       root: null,
//       rootMargin: "-20% 0px -70% 0px",
//       threshold: 0,
//     };

//     const observerCallback = (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions,
//     );
//     sections.forEach((section) => observer.observe(section));

//     return () => observer.disconnect();
//   }, []);

//   const handleLinkClick = (e, id) => {
//     e.preventDefault();
//     const element = document.getElementById(id);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="navbar">
//       <div className="nav-container">
//         <div className="logo">
//           <img src={logo} alt="Namir Logo" className="logo-img" />
//           <div className="logo-text">
//             <img src={logo2} alt="Namir Logo" className="logo-img" />
//           </div>
//         </div>

//         <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
//           <li>
//             <a
//               href="#home"
//               className={activeSection === "home" ? "active" : ""}
//               onClick={(e) => handleLinkClick(e, "home")}
//             >
//               الرئيسية
//             </a>
//           </li>
//           <li>
//             <a
//               href="#services"
//               className={activeSection === "services" ? "active" : ""}
//               onClick={(e) => handleLinkClick(e, "services")}
//             >
//               خدمات فاخرة
//             </a>
//           </li>
//           <li>
//             <a
//               href="#projects"
//               className={activeSection === "projects" ? "active" : ""}
//               onClick={(e) => handleLinkClick(e, "projects")}
//             >
//               إنجازاتنا
//             </a>
//           </li>
//           <li>
//             <a
//               href="#about"
//               className={activeSection === "about" ? "active" : ""}
//               onClick={(e) => handleLinkClick(e, "about")}
//             >
//               قصة التميز
//             </a>
//           </li>
//           <li>
//             <a
//               href="#contact"
//               className={activeSection === "contact" ? "active" : ""}
//               onClick={(e) => handleLinkClick(e, "contact")}
//             >
//               تواصل معنا
//             </a>
//           </li>
//         </ul>

//         <div className="nav-actions">
//           <button className="dark-toggle" onClick={toggleDarkMode}>
//             <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
//           </button>
//           <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
//             <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Header;
// src/components/Header.js (تحديث الروابط)
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import "./Header.css";
import lightLogo from "../assets/Namir logo-12.png";
import darkLogo from "../assets/Namir logo-11.png";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleLinkClick = (e, id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      e.preventDefault();
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMenuOpen(false);
  };

  const handleAboutClick = () => {
    navigate("/about");
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div
          className="logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          <div className="logo">
            <h2 style={{ color: "var(--primary)", fontSize: "1.5rem" }}>
              شركة خط الريادة
            </h2>
            {/* <div className="logo-text">
              <img
                src={darkMode ? darkLogo : lightLogo}
                alt="Namir Logo"
                className="logo-img"
              />
            </div> */}
          </div>
        </div>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              الرئيسية
            </Link>
          </li>
          <li>
            <a href="#services" onClick={(e) => handleLinkClick(e, "services")}>
              خدمات فاخرة
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => handleLinkClick(e, "projects")}>
              إنجازاتنا
            </a>
          </li>
          <li>
            <button className="nav-link-btn" onClick={handleAboutClick}>
              من نحن
            </button>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleLinkClick(e, "contact")}>
              تواصل معنا
            </a>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="dark-toggle" onClick={toggleDarkMode}>
            <i className={darkMode ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
          <div className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)}>
            <i className="fas fa-gem"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
