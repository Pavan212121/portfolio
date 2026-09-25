import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import image5 from '../assets/Image5.png';
import profileImg from '../assets/Profile.png';

const services = [
  {
    num: '001',
    title: 'UX Design',
    tagline: 'Understand before designing.',
    desc: 'User research, wireframes, flows that reduce friction and confusion, so your product just makes sense.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#111827" strokeWidth="1.2">
        <circle cx="24" cy="24" r="18" strokeDasharray="2 2" />
        <ellipse cx="24" cy="24" rx="18" ry="8" />
        <ellipse cx="24" cy="24" rx="8" ry="18" />
        <line x1="6" y1="24" x2="42" y2="24" />
        <line x1="24" y1="6" x2="24" y2="42" />
      </svg>
    ),
  },
  {
    num: '002',
    title: 'UI Design',
    tagline: 'Clarity, hierarchy, and detail.',
    desc: 'Interfaces that look sharp and drive action, balancing usability with a personality that fits your brand.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#111827" strokeWidth="1.2">
        <polygon points="24,6 40,15 40,33 24,42 8,33 8,15" />
        <polygon points="24,14 34,20 34,30 24,36 14,30 14,20" />
        <line x1="24" y1="6" x2="24" y2="14" />
        <line x1="40" y1="15" x2="34" y2="20" />
        <line x1="40" y1="33" x2="34" y2="30" />
        <line x1="24" y1="42" x2="24" y2="36" />
        <line x1="8" y1="33" x2="14" y2="30" />
        <line x1="8" y1="15" x2="14" y2="20" />
      </svg>
    ),
  },
  {
    num: '003',
    title: 'Design System',
    tagline: 'Consistency that scales.',
    desc: 'Systems that let your team ship faster and stay aligned as the product grows.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#111827" strokeWidth="1.2">
        <rect x="8" y="10" width="14" height="12" />
        <rect x="26" y="10" width="14" height="12" />
        <rect x="8" y="26" width="32" height="12" />
      </svg>
    ),
  },
  {
    num: '004',
    title: 'Accessibility',
    tagline: 'Design for everyone.',
    desc: 'Inclusive, WCAG-compliant experiences that widen your reach, so no one gets left out.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="#111827" strokeWidth="1.2">
        <path d="M8 36 L16 36 L16 28 L24 28 L24 20 L32 20 L32 12 L40 12" />
        <path d="M8 40 L16 40 L16 32 L24 32 L24 24 L32 24 L32 16 L40 16" strokeDasharray="2 2" />
        <line x1="8" y1="36" x2="8" y2="40" />
        <line x1="16" y1="28" x2="16" y2="32" />
        <line x1="24" y1="20" x2="24" y2="24" />
        <line x1="32" y1="12" x2="32" y2="16" />
        <line x1="40" y1="12" x2="40" y2="16" />
      </svg>
    ),
  },
];

const selectedWorks = [
  {
    title: 'Axiro Pulse',
    subtitle: 'SaaS Platform',
    image: '/my-assets/pulse-project.png',
  },
  {
    title: 'Mahaveer Real Estates',
    subtitle: 'Luxury Property Platform',
    image: '/my-assets/mahaveer-real-estates.png',
  },
  {
    title: 'Karnik Digital Suite',
    subtitle: 'Web & Mobile Ecosystem',
    image: '/my-assets/karnik-mobile-app.png',
  },
];

const clientLogos = [
  "PJ's",
  'Butterfly Designs',
  'Pulse Health',
  'Mahaveer',
  'Karnik',
  'Ibunify',
];

export const AboutPage = ({ onNavigate = () => { } }) => {
  return (
    <div className="about-page-wrapper">
      <div className="about-container">

        {/* 1. Hero Top Split: Headline & Designer Portrait */}
        <section className="about-hero-split-section">
          <div className="about-hero-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="about-hero-headline"
            >
              <span className="text-dark">Designer </span>
              <span className="text-muted">crafting </span>
              <span className="text-muted">digital experiences </span>
              <span className="text-muted">from </span>
              <span className="text-dark">UX to UI </span>
              <span className="text-dark">systems.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="about-hero-subtext"
            >
              Product Designer with 1 years of experience designing digital products end-to-end, helping teams build experiences that work for both users and business goals.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="about-hero-portrait-wrap"
          >
            <img
              src={profileImg}
              alt="Designer Portrait"
              className="about-hero-portrait-img"
            />
          </motion.div>
        </section>

        {/* 2. Full-Width Panoramic Mobile App Showcase Banner */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="about-panoramic-section"
        >
          <div className="about-panoramic-frame">
            <img
              src={image5}
              alt="Digital Product Showcase"
              className="about-panoramic-img"
            />
          </div>
        </motion.section>

        {/* 3. Info Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="about-info-section"
        >
          <div className="info-label-col">
            <span className="section-label-text">Info</span>
          </div>
          <div className="info-content-col">
            <p className="info-main-paragraph">
              I'm Pavan Kumar, a digital product designer based in India with over 1 years of experience designing digital products across startups, agencies and consulting environments.
            </p>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }} className="info-discover-link">
              Discover more
            </a>
          </div>
        </motion.section>

        {/* 4. Services Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="about-services-section"
        >
          <span className="section-label-text services-label">Services</span>

          <div className="services-grid-layout">
            {services.map((srv, idx) => (
              <div key={idx} className="service-card-item">
                <span className="service-card-num">{srv.num}</span>

                <div className="service-card-icon-wrap">
                  {srv.icon}
                </div>

                <div className="service-card-text-wrap">
                  <h3 className="service-card-title">{srv.title}</h3>
                  <p className="service-card-tagline">{srv.tagline}</p>
                  <p className="service-card-desc">{srv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 5. Work Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="about-work-section"
        >
          <div className="work-header-row">
            <span className="section-label-text">Work</span>
            <div className="work-header-right">
              <p className="work-header-desc">
                A selection of projects across product design, interfaces and design systems — built with teams that care about how things look.
              </p>
              <a
                href="#work"
                onClick={(e) => { e.preventDefault(); onNavigate('work'); }}
                className="work-view-all-link"
              >
                View all
              </a>
            </div>
          </div>

          <div className="work-cards-grid">
            {selectedWorks.map((work, idx) => (
              <div key={idx} className="about-work-card">
                <div className="work-card-img-box">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="about-work-img"
                    loading="lazy"
                  />
                </div>
                <div className="work-card-meta">
                  <h4 className="work-card-title">{work.title}</h4>
                  <p className="work-card-subtitle">{work.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* 6. Partner / Client Logos */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-partners-section"
        >
          <div className="partners-logos-row">
            {clientLogos.map((logo, idx) => (
              <span key={idx} className="partner-logo-item">
                {logo}
              </span>
            ))}
          </div>
        </motion.section>

        {/* 7. Connect & Say Hello Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-connect-section"
        >
          <h2 className="connect-title">
            Connect, collaborate,<br />
            or just say hello
          </h2>

          <a
            href="mailto:pavan.dsgn@gmail.com"
            className="connect-huge-email"
          >
            pavan.dsgn@gmail.com
          </a>

          <div className="connect-social-bottom">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="connect-linkedin-link"
            >
              LinkedIn
            </a>
          </div>
        </motion.section>

      </div>

      <style>{`
        .about-page-wrapper {
          min-height: 100vh;
          background-color: #ffffff;
          padding: 120px 48px 100px 48px;
          color: #111827;
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          box-sizing: border-box;
        }

        .about-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }

        /* 1. Hero Top Split */
        .about-hero-split-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(36px, 5vw, 68px);
          align-items: flex-start;
          margin-bottom: clamp(60px, 8vw, 90px);
        }

        .about-hero-left {
          display: flex;
          flex-direction: column;
        }

        .about-hero-headline {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif !important;
          font-size: clamp(2.4rem, 4.8vw, 3.8rem);
          font-weight: 700;
          line-height: 1.08;
          letter-spacing: -0.035em;
          margin: 0 0 24px 0;
        }

        .text-dark {
          color: #111827;
        }

        .text-muted {
          color: #9ca3af;
          font-weight: 400;
        }

        .about-hero-subtext {
          font-size: 14.5px;
          line-height: 1.6;
          color: #4b5563;
          max-width: 440px;
          margin: 0;
        }

        .about-hero-portrait-wrap {
          width: 100%;
          max-width: 700px;
          margin-left: auto;
          aspect-ratio: 3.2 / 4;
          max-height: 700px;
          border-radius: 8px;
          overflow: hidden;
          background: #f4f4f5;
          box-shadow: 0 20px 48px -12px rgba(0, 0, 0, 0.1);
        }

        .about-hero-portrait-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 18%;
          display: block;
        }

        /* 2. Panoramic Banner */
        .about-panoramic-section {
          margin-bottom: clamp(64px, 8vw, 96px);
        }

        .about-panoramic-frame {
          width: 100%;
          border-radius: 0;
          overflow: hidden;
          background: #f3f4f6;
          box-shadow: 0 20px 50px -12px rgba(0, 0, 0, 0.06);
        }

        .about-panoramic-img {
          width: 100%;
          height: auto;
          max-height: 1000px;
          object-fit: cover;
          border-radius: 0;
          display: block;
          transition: transform 0.5s ease;
        }

        .about-panoramic-frame:hover .about-panoramic-img {
          transform: scale(1.015);
        }

        /* Common Section Label */
        .section-label-text {
          font-size: 13.5px;
          font-weight: 700;
          color: #111827;
          display: block;
        }

        /* 3. Info Section */
        .about-info-section {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 32px;
          margin-bottom: clamp(64px, 8vw, 100px);
        }

        .info-main-paragraph {
          font-size: clamp(1.05rem, 1.8vw, 1.25rem);
          line-height: 1.6;
          color: #1f2937;
          max-width: 680px;
          margin: 0 0 16px 0;
          font-weight: 450;
        }

        .info-discover-link {
          font-size: 13.5px;
          font-weight: 600;
          color: #111827;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s ease;
        }

        .info-discover-link:hover {
          color: #64748b;
        }

        /* 4. Services Section */
        .about-services-section {
          margin-bottom: clamp(72px, 9vw, 110px);
        }

        .services-label {
          margin-bottom: 24px;
        }

        .services-grid-layout {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .service-card-item {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          padding: 24px 20px 28px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 320px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .service-card-item:hover {
          border-color: #cbd5e1;
          box-shadow: 0 12px 30px -8px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
        }

        .service-card-num {
          font-size: 11px;
          color: #9ca3af;
          font-weight: 600;
          display: block;
          margin-bottom: 24px;
        }

        .service-card-icon-wrap {
          margin-bottom: auto;
          padding-bottom: 24px;
          display: flex;
          align-items: center;
        }

        .service-card-title {
          font-family: var(--font-body), sans-serif !important;
          font-size: 1.12rem;
          font-weight: 700;
          color: #111827;
          margin: 0 0 6px 0;
        }

        .service-card-tagline {
          font-size: 11.5px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 10px 0;
        }

        .service-card-desc {
          font-size: 11.5px;
          line-height: 1.5;
          color: #64748b;
          margin: 0;
        }

        /* 5. Work Section */
        .about-work-section {
          margin-bottom: clamp(72px, 9vw, 110px);
        }

        .work-header-row {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 32px;
          margin-bottom: 32px;
        }

        .work-header-right {
          max-width: 440px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .work-header-desc {
          font-size: 12.5px;
          line-height: 1.55;
          color: #4b5563;
          margin: 0;
        }

        .work-view-all-link {
          font-size: 12.5px;
          font-weight: 600;
          color: #111827;
          text-decoration: underline;
          text-underline-offset: 3px;
          width: fit-content;
        }

        .work-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1.2fr;
          gap: 24px;
        }

        .about-work-card {
          display: flex;
          flex-direction: column;
        }

        .work-card-img-box {
          width: 100%;
          aspect-ratio: 3.2 / 4;
          border-radius: 10px;
          overflow: hidden;
          background: #f4f4f5;
          margin-bottom: 12px;
        }

        .about-work-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .about-work-card:hover .about-work-img {
          transform: scale(1.025);
        }

        .work-card-title {
          font-size: 13.5px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 2px 0;
        }

        .work-card-subtitle {
          font-size: 11.5px;
          color: #64748b;
          margin: 0;
        }

        /* 6. Partner Logos */
        .about-partners-section {
          padding: 36px 0;
          border-top: 1px solid #f1f5f9;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: clamp(64px, 8vw, 100px);
        }

        .partners-logos-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
        }

        .partner-logo-item {
          font-size: 14px;
          font-weight: 700;
          color: #111827;
          letter-spacing: -0.01em;
          opacity: 0.85;
          transition: opacity 0.2s ease;
        }

        .partner-logo-item:hover {
          opacity: 1;
        }

        /* 7. Connect Section */
        .about-connect-section {
          padding-top: 20px;
        }

        .connect-title {
          font-family: var(--font-body), sans-serif !important;
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 500;
          line-height: 1.15;
          color: #111827;
          letter-spacing: -0.025em;
          margin: 0 0 24px 0;
        }

        .connect-huge-email {
          font-family: var(--font-body), sans-serif;
          font-size: clamp(2.4rem, 5.2vw, 4.4rem);
          font-weight: 400;
          color: #cbd5e1;
          letter-spacing: -0.03em;
          text-decoration: none;
          display: block;
          margin-bottom: clamp(60px, 8vw, 90px);
          transition: color 0.3s ease;
        }

        .connect-huge-email:hover {
          color: #111827;
        }

        .connect-social-bottom {
          display: flex;
        }

        .connect-linkedin-link {
          font-size: 1.4rem;
          font-weight: 400;
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .connect-linkedin-link:hover {
          color: #111827;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .about-hero-split-section {
            grid-template-columns: 1fr;
            gap: 36px;
          }

          .about-info-section {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .services-grid-layout {
            grid-template-columns: repeat(2, 1fr);
          }

          .work-cards-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .about-page-wrapper {
            padding: 100px 20px 80px 20px;
          }

          .about-hero-portrait-wrap {
            margin-left: 0;
            max-width: 100%;
          }

          .services-grid-layout {
            grid-template-columns: 1fr;
          }

          .partners-logos-row {
            justify-content: flex-start;
            gap: 20px 32px;
          }
        }
      `}</style>
    </div>
  );
};

export default AboutPage;
