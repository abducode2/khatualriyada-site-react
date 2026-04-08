// src/components/AboutPage.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AboutPage.css";

const AboutPage = () => {
  useEffect(() => {
    AOS.refresh();
  }, []);

  const teamMembers = [
    {
      name: "مهندس / خالد العتيبي",
      position: "المدير العام والمؤسس",
      desc: "خبرة تزيد عن 25 عاماً في مجال التطوير العقاري والمقاولات.",
      icon: "fas fa-user-tie",
    },
    {
      name: "د. فهد القرني",
      position: "مدير التطوير العقاري",
      desc: "دكتوراه في التخطيط العمراني، قاد أكثر من 50 مشروعاً ناجحاً.",
      icon: "fas fa-chart-line",
    },
    {
      name: "م. عبدالله السبيعي",
      position: "مدير المشاريع الهندسية",
      desc: "خبير في إدارة المشاريع الكبرى وشهادات PMP و LEED.",
      icon: "fas fa-hard-hat",
    },
    {
      name: "أ. نورة الحارثي",
      position: "مديرة التسويق العقاري",
      desc: "خبيرة في استراتيجيات التسويق العقاري وعلاقات المستثمرين.",
      icon: "fas fa-bullhorn",
    },
  ];

  const testimonials = [
    {
      name: "عبدالرحمن السديري",
      position: "رئيس مجلس إدارة مجموعة السديري",
      text: "شركة خط الريادةكانت شريكاً مثالياً في تطوير مجمعنا السكني. الالتزام بالجودة والمواعيد جعلهم الخيار الأمثل.",
      rating: 5,
    },
    {
      name: "لجين الحربي",
      position: "مديرة صندوق الاستثمار العقاري",
      text: "تعاملنا مع خط الريادةفي أكثر من 5 مشاريع، وكانت النتائج دائماً تفوق التوقعات. نوصي بهم بشدة.",
      rating: 5,
    },
    {
      name: "فهد القحطاني",
      position: "رجل أعمال",
      text: "احترافية عالية وتنفيذ متقن. شركة خط الريادةأضافت قيمة حقيقية لاستثماراتنا العقارية.",
      rating: 5,
    },
  ];

  const milestones = [
    {
      year: "1998",
      title: "تأسيس الشركة",
      desc: "انطلاقة خط الريادةفي عالم المقاولات",
    },
    {
      year: "2005",
      title: "أول مشروع ضخم",
      desc: "تنفيذ أول مجمع سكني متكامل",
    },
    {
      year: "2012",
      title: "التوسع الإقليمي",
      desc: "افتتاح فروع في مدن المملكة",
    },
    {
      year: "2018",
      title: "جائزة التميز",
      desc: "الحصول على جائزة أفضل شركة تطوير عقاري",
    },
    { year: "2024", title: "رؤية 2030", desc: "شراكة مع كبرى مشاريع الرؤية" },
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content" data-aos="fade-up">
            <h1>من نحن</h1>
            <div className="hero-divider"></div>
            <p>
              شركة خط الريادةللتطوير العقاري والمقاولات هي إحدى الشركات الرائدة
              في المملكة العربية السعودية، نقدم حلولاً متكاملة في مجال التطوير
              العقاري والمقاولات منذ أكثر من 25 عاماً.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content" data-aos="fade-left">
              <span className="section-tag">قصتنا</span>
              <h2>
                رحلة من التميز <span className="highlight">والعطاء</span>
              </h2>
              <p>
                بدأت قصة شركة خط الريادةفي عام 1998 على يد مجموعة من المهندسين
                ذوي الخبرة، الذين جمعتهم رؤية واحدة: تغيير مفهوم التطوير العقاري
                في المملكة العربية السعودية.
              </p>
              <p>
                من خلال التزامنا بأعلى معايير الجودة والابتكار، استطعنا تنفيذ
                أكثر من 200 مشروع متنوع بين السكني والتجاري والترفيهي، محققين
                ثقة عملائنا وشركائنا.
              </p>
              <p>
                اليوم، ومع رؤية المملكة 2030، نواصل مسيرتنا نحو آفاق أوسع،
                مساهمين في بناء مستقبل أكثر ازدهاراً للأجيال القادمة.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <span className="stat-number">25+</span>
                  <span className="stat-label">عام من التميز</span>
                </div>
                <div className="stat">
                  <span className="stat-number">200+</span>
                  <span className="stat-label">مشروع منجز</span>
                </div>
                <div className="stat">
                  <span className="stat-number">380+</span>
                  <span className="stat-label">عميل سعيد</span>
                </div>
              </div>
            </div>
            <div className="story-image" data-aos="fade-right">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="شركة نمير"
              />
              <div className="experience-badge">
                <span className="years">25</span>
                <span className="text">
                  سنوات
                  <br />
                  خبرة
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="container">
          <div className="vm-grid">
            <div className="vm-card vision" data-aos="fade-up">
              <div className="vm-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>رؤيتنا</h3>
              <p>
                أن نكون رواداً في مجال التطوير العقاري والمقاولات في المنطقة، من
                خلال تقديم مشاريع مبتكرة تلبي تطلعات عملائنا وتساهم في تحقيق
                رؤية المملكة 2030.
              </p>
            </div>
            <div
              className="vm-card mission"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="vm-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>رسالتنا</h3>
              <p>
                تقديم حلول عقارية متكاملة بأعلى معايير الجودة والاحترافية، مع
                الالتزام بالمواعيد والميزانيات المحددة، وبناء شراكات مستدامة مع
                عملائنا وشركائنا.
              </p>
            </div>
            <div
              className="vm-card values"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="vm-icon">
                <i className="fas fa-gem"></i>
              </div>
              <h3>قيمنا</h3>
              <p>
                الجودة، النزاهة، الابتكار، العمل الجماعي، والمسؤولية الاجتماعية
                هي القيم التي نؤمن بها ونعمل وفقها في جميع مشاريعنا.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="milestones-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">محطات مهمة</span>
            <h2>
              مسيرة <span className="highlight">العطاء</span>
            </h2>
            <p>أبرز المحطات في تاريخ شركة نمير</p>
          </div>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div
                className="timeline-item"
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{milestone.year}</div>
                  <h4>{milestone.title}</h4>
                  <p>{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">فريق العمل</span>
            <h2>
              قادة <span className="highlight">النجاح</span>
            </h2>
            <p>نخبة من الخبراء والمتخصصين يقودون مسيرة التميز</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div
                className="team-card"
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="team-icon">
                  <i className={member.icon}></i>
                </div>
                <h4>{member.name}</h4>
                <span className="team-position">{member.position}</span>
                <p>{member.desc}</p>
                <div className="team-social">
                  <a href="https://www.linkedin.com/in/namir-development-and-contracting-company-5b3a1b2c/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/namir-development-and-contracting-company-5b3a1b2c/">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/namir-development-and-contracting-company-5b3a1b2c/">
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">شهادات العملاء</span>
            <h2>
              ماذا يقولون <span className="highlight">عن نمير؟</span>
            </h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                className="testimonial-card"
                key={index}
                data-aos="flip-up"
                data-aos-delay={index * 100}
              >
                <div className="quote-icon">
                  <i className="fas fa-quote-right"></i>
                </div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i className="fas fa-star" key={i}></i>
                  ))}
                </div>
                <h4>{testimonial.name}</h4>
                <span className="testimonial-position">
                  {testimonial.position}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <span className="section-tag">شركاؤنا</span>
            <h2>
              نعمل مع <span className="highlight">أكبر الأسماء</span>
            </h2>
          </div>
          <div className="partners-grid" data-aos="zoom-in">
            <div className="partner-item">
              <i className="fas fa-building"></i>
              <span>مجموعة الراجحي</span>
            </div>
            <div className="partner-item">
              <i className="fas fa-university"></i>
              <span>بنك الرياض</span>
            </div>
            <div className="partner-item">
              <i className="fas fa-city"></i>
              <span>الهيئة الملكية</span>
            </div>
            <div className="partner-item">
              <i className="fas fa-chart-line"></i>
              <span>صندوق الاستثمارات</span>
            </div>
            <div className="partner-item">
              <i className="fas fa-hard-hat"></i>
              <span>أرامكو السعودية</span>
            </div>
            <div className="partner-item">
              <i className="fas fa-dharmachakra"></i>
              <span>سابك</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <div className="cta-content" data-aos="zoom-in">
            <h3>هل لديك مشروع في ذهنك؟</h3>
            <p>تواصل مع فريقنا اليوم للحصول على استشارة مجانية</p>
            <button
              className="btn-primary"
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              تواصل معنا <i className="fas fa-arrow-left"></i>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
