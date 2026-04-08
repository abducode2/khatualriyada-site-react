// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import "./App.css";
// import { ThemeProvider } from "./contexts/ThemeContext";
// import Header from "./components/Header";
// import FloatingActions from "./components/FloatingActions";
// import Hero from "./components/Hero";
// import Services from "./components/Services";
// import Projects from "./components/Projects";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";

// function App() {
//   useEffect(() => {
//     AOS.init({
//       duration: 800,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   return (
//     <ThemeProvider>
//       <div className="app">
//         <Header />
//         <main>
//           <Hero />
//           <Services />
//           <Projects />
//           <About />
//           <Contact />
//         </main>
//         <Footer />
//         <FloatingActions />
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;
// src/App.js
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import { ThemeProvider } from "./contexts/ThemeContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import About from "./components/About";
import AboutPage from "./components/AboutPage";
import Contact from "./components/Contact";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Header />
          
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
          <Footer />
          <FloatingActions />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
