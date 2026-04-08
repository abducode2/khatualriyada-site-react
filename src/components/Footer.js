// src/components/Footer.js
import { useState } from "react";
import logo from "../assets/Namir logo_2.png";
import lightLogo from "../assets/Namir logo-12.png";
import darkLogo from "../assets/Namir logo-11.png";
import "./Footer.css";
import { useTheme } from "../contexts/ThemeContext";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { darkMode } = useTheme();

  const handleLinkClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        {/* Newsletter Section */}
        <div className="newsletter-section">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <i className="fas fa-envelope-open-text"></i>
              <h3>اشترك في النشرة البريدية</h3>
              <p>احصل على أحدث العروض والمشاريع الحصرية</p>
            </div>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">
                <i className="fas fa-paper-plane"></i> اشتراك
              </button>
            </form>
            {subscribed && (
              <div className="subscribe-success">
                <i className="fas fa-check-circle"></i> تم الاشتراك بنجاح!
              </div>
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Column 1: Brand */}
          <div className="footer-column">
            <div className="footer-logo">
              <div className="footer-logo-img">
                {/* <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                  }}
                  src={logo}
                  alt="Namir Logo"
                  className="logo-img-one"
                /> */}
                <p style={{ color: "var(--primary)", fontSize: "1.5rem" }}>
                  خط الريادة للهندسة والتطوير العقاري
                </p>
                {/* <img
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    margin: "0 auto",
                  }}
                  src={darkMode ? darkLogo : lightLogo}
                  alt="Namir Logo"
                  className="logo-img-two"
                /> */}
              </div>
              <div className="logo-divider"></div>
            </div>
            <p className="company-description">
              شركة رائدة في مجال التطوير العقاري والمقاولات، نقدم حلولاً متكاملة
              بأعلى معايير الجودة والاحترافية.
            </p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/namir.realestate.company/"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://twitter.com/namir_realestate"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.instagram.com/namir.realestate.company/"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/namir-real-estate-company/"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UCy_26Q8w5W5W5W5W5W5W5W5"
                aria-label="YouTube"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-column">
            <h4>
              <i className="fas fa-link"></i> روابط سريعة
            </h4>
            <ul className="footer-links">
              <li>
                <a href="#home" onClick={(e) => handleLinkClick(e, "home")}>
                  الرئيسية
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  onClick={(e) => handleLinkClick(e, "services")}
                >
                  خدماتنا
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleLinkClick(e, "projects")}
                >
                  مشاريعنا
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => handleLinkClick(e, "about")}>
                  من نحن
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, "contact")}
                >
                  اتصل بنا
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-column">
            <h4>
              <i className="fas fa-cogs"></i> خدماتنا
            </h4>
            <ul className="footer-links">
              <li>
                <a href="https://www.linkedin.com/in/namir-development-and-contracting-company-5b3a1b2c/">
                  التطوير العقاري
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/namir-development-and-contracting-company-5b3a1b2c/">
                  المقاولات العامة
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/namir-development-and-contracting-company-5b3a1b2c/">
                  التصميم الهندسي
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/namir-development-and-contracting-company-5b3a1b2c/">
                  إدارة المشاريع
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/namir-development-and-contracting-company-5b3a1b2c/">
                  الاستشارات العقارية
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="footer-column">
            <h4>
              <i className="fas fa-address-card"></i> معلومات الاتصال
            </h4>
            <ul className="contact-info-list">
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>المملكة العربية السعودية، الرياض - طريق الملك فهد</span>
              </li>
              <li>
                <i className="fas fa-phone-alt"></i>
                <span>+966 11 456 7890</span>
              </li>
              <li>
                <i className="fas fa-mobile-alt"></i>
                <span>+966 55 123 4567</span>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                <span>info@khatualriyada.sa</span>
              </li>
              <li>
                <i className="fas fa-clock"></i>
                <span>السبت - الخميس: 9ص - 6م</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Working Hours Banner */}
        <div className="working-hours">
          <div className="hours-item">
            <i className="fas fa-headset"></i>
            <div>
              <strong>دعم العملاء 24/7</strong>
              <span>خدمة عملاء على مدار الساعة</span>
            </div>
          </div>
          <div className="hours-item">
            <i className="fas fa-trophy"></i>
            <div>
              <strong>ضمان الجودة</strong>
              <span>أعلى معايير الجودة العالمية</span>
            </div>
          </div>
          <div className="hours-item">
            <i className="fas fa-handshake"></i>
            <div>
              <strong>شركاء النجاح</strong>
              <span>نعمل مع كبرى الشركات</span>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="copyright-bar">
          <div className="copyright-text">
            <p>
              © {new Date().getFullYear()} شركة خط الريادةللتطوير العقاري
              والمقاولات. جميع الحقوق محفوظة.
            </p>
          </div>
          <div className="legal-links">
            <a href="https://www.linkedin.com/in/namir-development-and-contracting-company-5b3a1b2c/">
              سياسة الخصوصية
            </a>
            <span className="separator">|</span>
            <a href="https://www.linkedin.com/in/namir-development-and-contracting-company-5b3a1b2c/">
              شروط الاستخدام
            </a>
            <span className="separator">|</span>
            <a href="https://www.linkedin.com/in/namir-development-and-contracting-company-5b3a1b2c/">
              خريطة الموقع
            </a>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
