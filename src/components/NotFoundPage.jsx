import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Disc, Globe } from 'lucide-react';

export const NotFoundPage = ({ onNavigateHome = () => {}, onNavigate = () => {} }) => {
  return (
    <div className="not-found-page-wrapper">
      
      {/* 1. Hero 404 Section */}
      <section className="not-found-hero-section">
        <div className="not-found-hero-bg-layer" />
        <div className="not-found-hero-overlay-glow" />

        <div className="not-found-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="not-found-hero-heading"
          >
            <span className="heading-bold-line">OOPS SORRY</span>
            <span className="heading-light-line">Page not found.</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <button
              onClick={onNavigateHome}
              className="not-found-home-btn"
            >
              Go Back To Home
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. Middle "Let's Grow Together" Card */}
      <section className="grow-together-card-section">
        <div className="grow-together-card-inner">
          <div className="grow-grid-layout">
            
            {/* Left Info Column */}
            <div className="grow-left-col">
              <div className="lets-connect-badge">
                <span className="badge-target-icon">⦿</span>
                <span>Let's Connect</span>
              </div>

              <h2 className="grow-main-heading">
                <span className="grow-dark-text">Let's Grow </span>
                <span className="grow-muted-text">Together</span>
              </h2>

              {/* Service 1: Web Design */}
              <div className="service-pricing-block">
                <div className="service-title-row">
                  <h3 className="service-name">Web Design</h3>
                  <span className="price-tag-pill">Starting from $1,999</span>
                </div>
                <p className="service-description">
                  Showcasing sleek, high-performance designs tailored for impact
                </p>
              </div>

              <div className="service-divider-line" />

              {/* Service 2: Framer Development */}
              <div className="service-pricing-block">
                <div className="service-title-row">
                  <h3 className="service-name">Framer Development</h3>
                  <span className="price-tag-pill">Starting from $4,999</span>
                </div>
                <p className="service-description">
                  Building visually stunning, user-focused websites that elevate brands.
                </p>
              </div>

              {/* CTA Buttons Row */}
              <div className="grow-action-buttons-row">
                <button
                  onClick={() => onNavigate('work')}
                  className="btn-outline-pill"
                >
                  See All Projects
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-solid-dark-pill"
                >
                  Get Started Now
                </button>
              </div>
            </div>

            {/* Right Interactive Mockup Column */}
            <div className="grow-right-col">
              <div className="mockup-browser-frame">
                {/* Mockup Top Header */}
                <div className="mockup-top-nav">
                  <div className="mockup-logo">
                    <span className="mockup-star-icon">✦</span>
                    <span className="mockup-brand-name">Polo</span>
                  </div>
                  <div className="mockup-nav-links">
                    <span>Home</span>
                    <span>Work</span>
                    <span>About</span>
                    <span>Contact</span>
                  </div>
                  <div className="mockup-cta-btn">Let's Talk</div>
                </div>

                {/* Mockup Body Content */}
                <div className="mockup-body-layout">
                  {/* Left Side Content */}
                  <div className="mockup-body-left">
                    <h4 className="mockup-hero-title">
                      The Design Of<br />
                      <span className="mockup-title-dim">Success</span>
                    </h4>
                    <p className="mockup-hero-subtitle">
                      We create digital experiences that help brands grow.
                    </p>
                    <div className="mockup-view-projects-btn">
                      <span>View Projects</span>
                      <ArrowRight size={11} />
                    </div>

                    {/* Pagination slider */}
                    <div className="mockup-pagination-row">
                      <span className="mockup-page-count">01 / 03</span>
                      <div className="mockup-progress-track">
                        <div className="mockup-progress-fill" />
                      </div>
                    </div>
                  </div>

                  {/* Right Side Overlapping Cards Graphic */}
                  <div className="mockup-body-right">
                    <div className="mockup-cards-cluster">
                      {/* Dark Angled Card */}
                      <div className="mini-card-dark">
                        <div className="mini-card-dark-header">
                          <span className="mini-card-dot" />
                          <span className="mini-card-dot" />
                        </div>
                        <p className="mini-card-dark-title">
                          Build<br />Modern<br />Brands
                        </p>
                        <div className="mini-card-dark-btn">Explore</div>
                      </div>

                      {/* White Upright Card */}
                      <div className="mini-card-white">
                        <div className="mini-card-white-badge">✦</div>
                        {/* Ascending Bar Graphic */}
                        <div className="mini-card-chart-bars">
                          <div className="bar bar-1" />
                          <div className="bar bar-2" />
                          <div className="bar bar-3" />
                          <div className="bar bar-4" />
                          <div className="bar bar-5" />
                        </div>
                        <p className="mini-card-white-title">
                          Design<br />Develop<br />Grow
                        </p>
                      </div>
                    </div>

                    {/* Navigation Arrow Buttons */}
                    <div className="mockup-arrows-row">
                      <div className="mockup-arrow-circle">
                        <ArrowLeft size={11} />
                      </div>
                      <div className="mockup-arrow-circle">
                        <ArrowRight size={11} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Bottom Footer Section */}
      <footer className="not-found-footer-section">
        <div className="not-found-footer-container">
          {/* Top Brand & Socials Row */}
          <div className="footer-top-brand-row">
            <div className="footer-logo-brand">
              <span className="footer-logo-star">✦</span>
              <span className="footer-brand-text">Polo</span>
            </div>

            <div className="footer-social-icons-row">
              {/* X / Twitter */}
              <a href="https://x.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="X">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Dribbble / Web */}
              <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="footer-social-link" aria-label="Dribbble">
                <Globe size={16} strokeWidth={2} />
              </a>
            </div>
          </div>

          <div className="footer-horizontal-divider" />

          {/* Quick Links Row */}
          <div className="footer-quick-links-row">
            <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('home'); }}>Services</a>
            <a href="#work" onClick={(e) => { e.preventDefault(); onNavigate('work'); }}>Projects</a>
            <a href="#about" onClick={(e) => { e.preventDefault(); onNavigate('about'); }}>Profile</a>
            <a href="#testimonials" onClick={(e) => { e.preventDefault(); onNavigate('testimonials'); }}>Reviews</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); onNavigate('contact'); }}>Contact</a>
          </div>

          {/* Copyright Row */}
          <div className="footer-bottom-credits-row">
            <span className="footer-copyright-text">© {new Date().getFullYear()} Polo</span>
            <div className="footer-credits-right">
              <span>Made by Pranav</span>
              <span className="credits-dot">·</span>
              <span>Built in Framer</span>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .not-found-page-wrapper {
          min-height: 100vh;
          background-color: #fcfdfd;
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #111827;
          overflow-x: hidden;
        }

        /* 1. Hero 404 Styles */
        .not-found-hero-section {
          position: relative;
          width: 100%;
          min-height: 520px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 100px 24px 80px 24px;
          overflow: hidden;
          background-color: #f8fafc;
        }

        .not-found-hero-bg-layer {
          position: absolute;
          inset: 0;
          background-image: url('/404-bg.jpg');
          background-size: cover;
          background-position: center 35%;
          opacity: 0.95;
          transform: scale(1.02);
        }

        .not-found-hero-overlay-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.88) 75%, #ffffff 100%);
          backdrop-filter: blur(2px);
        }

        .not-found-hero-content {
          position: relative;
          z-index: 5;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .not-found-hero-heading {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif !important;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0 0 28px 0;
          line-height: 1.08;
        }

        .heading-bold-line {
          font-size: clamp(2.6rem, 5.2vw, 4rem);
          font-weight: 700;
          color: #111827;
          letter-spacing: -0.025em;
          text-transform: uppercase;
        }

        .heading-light-line {
          font-size: clamp(2.6rem, 5.2vw, 4rem);
          font-weight: 400;
          color: #94a3b8;
          letter-spacing: -0.025em;
        }

        .not-found-home-btn {
          background: #111827;
          color: #ffffff;
          border: none;
          padding: 13px 32px;
          border-radius: 100px;
          font-size: 14.5px;
          font-weight: 500;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.22);
        }

        .not-found-home-btn:hover {
          background: #000000;
          transform: translateY(-2px);
          box-shadow: 0 14px 30px rgba(0, 0, 0, 0.3);
        }

        /* 2. Middle "Let's Grow Together" Card */
        .grow-together-card-section {
          width: 100%;
          max-width: 100%;
          margin: -36px auto 70px auto;
          padding: 0 48px;
          position: relative;
          z-index: 10;
          box-sizing: border-box;
        }

        @media (max-width: 640px) {
          .grow-together-card-section {
            padding: 0 20px;
          }
        }

        .grow-together-card-inner {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-radius: 36px;
          padding: 56px 56px;
          box-shadow: 0 24px 60px -15px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        .grow-grid-layout {
          display: grid;
          grid-template-columns: 1fr 1.16fr;
          gap: 52px;
          align-items: center;
        }

        /* Left Info */
        .grow-left-col {
          display: flex;
          flex-direction: column;
        }

        .lets-connect-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 5px 14px;
          border-radius: 100px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
          width: fit-content;
          margin-bottom: 24px;
        }

        .badge-target-icon {
          font-size: 11px;
          color: #0f172a;
        }

        .grow-main-heading {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif !important;
          font-size: clamp(2.3rem, 4vw, 3.4rem);
          line-height: 1.1;
          letter-spacing: -0.035em;
          margin: 0 0 32px 0;
        }

        .grow-dark-text {
          font-weight: 700;
          color: #111827;
        }

        .grow-muted-text {
          font-weight: 400;
          color: #9ca3af;
        }

        .service-pricing-block {
          margin-bottom: 6px;
        }

        .service-title-row {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .service-name {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif !important;
          font-size: 1.12rem;
          font-weight: 700;
          color: #111827;
          margin: 0;
        }

        .price-tag-pill {
          background: #f1f5f9;
          color: #475569;
          font-size: 11.5px;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 100px;
        }

        .service-description {
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.45;
          margin: 6px 0 16px 0;
        }

        .service-divider-line {
          height: 1px;
          background: #f1f5f9;
          width: 100%;
          margin-bottom: 20px;
        }

        .grow-action-buttons-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 12px;
          flex-wrap: wrap;
        }

        .btn-outline-pill {
          background: #ffffff;
          border: 1.5px solid #d1d5db;
          color: #111827;
          padding: 12px 24px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .btn-outline-pill:hover {
          background: #f8fafc;
          border-color: #9ca3af;
          transform: translateY(-1px);
        }

        .btn-solid-dark-pill {
          background: #111827;
          border: none;
          color: #ffffff;
          padding: 12px 26px;
          border-radius: 100px;
          font-size: 14px;
          font-weight: 600;
          font-family: inherit;
          cursor: pointer;
          transition: all 0.25s ease;
          box-shadow: 0 6px 18px rgba(17, 24, 39, 0.2);
        }

        .btn-solid-dark-pill:hover {
          background: #000000;
          transform: translateY(-2px);
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.28);
        }

        /* Right Mockup */
        .grow-right-col {
          position: relative;
        }

        .mockup-browser-frame {
          background: #ffffff;
          border: 1.5px solid #e2e8f0;
          border-radius: 24px;
          padding: 24px 26px 20px 26px;
          box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.06);
          position: relative;
        }

        .mockup-top-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 18px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 24px;
        }

        .mockup-logo {
          display: flex;
          align-items: center;
          gap: 5px;
          font-weight: 700;
          font-size: 13.5px;
          color: #0f172a;
        }

        .mockup-star-icon {
          font-size: 13px;
        }

        .mockup-nav-links {
          display: flex;
          gap: 12px;
          font-size: 10.5px;
          color: #64748b;
          font-weight: 500;
        }

        .mockup-cta-btn {
          background: #0f172a;
          color: #ffffff;
          font-size: 9.5px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 100px;
        }

        .mockup-body-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: center;
        }

        .mockup-hero-title {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif !important;
          font-size: 1.35rem;
          font-weight: 700;
          line-height: 1.15;
          color: #111827;
          margin: 0 0 8px 0;
        }

        .mockup-title-dim {
          color: #9ca3af;
          font-weight: 400;
        }

        .mockup-hero-subtitle {
          font-size: 10.5px;
          color: #64748b;
          line-height: 1.4;
          margin: 0 0 14px 0;
        }

        .mockup-view-projects-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #0f172a;
          color: #ffffff;
          font-size: 10px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 100px;
          margin-bottom: 22px;
        }

        .mockup-pagination-row {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .mockup-page-count {
          font-size: 9.5px;
          color: #94a3b8;
          font-weight: 600;
        }

        .mockup-progress-track {
          width: 50px;
          height: 2px;
          background: #e2e8f0;
          border-radius: 2px;
          overflow: hidden;
        }

        .mockup-progress-fill {
          width: 40%;
          height: 100%;
          background: #0f172a;
        }

        /* Right Mini Cards Cluster */
        .mockup-body-right {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 14px;
        }

        .mockup-cards-cluster {
          position: relative;
          width: 170px;
          height: 155px;
        }

        .mini-card-dark {
          position: absolute;
          left: 0;
          top: 10px;
          width: 105px;
          height: 135px;
          background: #111418;
          border-radius: 12px;
          padding: 12px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25);
          transform: rotate(-5deg);
          z-index: 1;
        }

        .mini-card-dark-header {
          display: flex;
          gap: 3px;
        }

        .mini-card-dot {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
        }

        .mini-card-dark-title {
          font-size: 11px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.25;
          margin: 0;
        }

        .mini-card-dark-btn {
          font-size: 8px;
          color: rgba(255, 255, 255, 0.6);
          background: rgba(255, 255, 255, 0.1);
          padding: 2px 6px;
          border-radius: 4px;
          width: fit-content;
        }

        .mini-card-white {
          position: absolute;
          right: 0;
          top: 0;
          width: 95px;
          height: 140px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          z-index: 2;
        }

        .mini-card-white-badge {
          font-size: 10px;
          color: #0f172a;
        }

        .mini-card-chart-bars {
          display: flex;
          align-items: flex-end;
          gap: 3px;
          height: 35px;
          padding-bottom: 4px;
        }

        .bar {
          flex: 1;
          background: #cbd5e1;
          border-radius: 2px;
        }

        .bar-1 { height: 25%; }
        .bar-2 { height: 45%; }
        .bar-3 { height: 70%; background: #94a3b8; }
        .bar-4 { height: 90%; background: #64748b; }
        .bar-5 { height: 100%; background: #0f172a; }

        .mini-card-white-title {
          font-size: 9.5px;
          font-weight: 600;
          color: #475569;
          line-height: 1.2;
          margin: 0;
        }

        .mockup-arrows-row {
          display: flex;
          gap: 6px;
        }

        .mockup-arrow-circle {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0f172a;
          cursor: pointer;
        }

        /* 3. Footer Styles */
        .not-found-footer-section {
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
          padding: 48px 48px 60px 48px;
          box-sizing: border-box;
        }

        .not-found-footer-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }

        @media (max-width: 640px) {
          .not-found-footer-section {
            padding: 48px 20px 60px 20px;
          }
        }

        .footer-top-brand-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .footer-logo-brand {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 1.35rem;
          font-weight: 700;
          color: #0f172a;
        }

        .footer-logo-star {
          font-size: 1.2rem;
        }

        .footer-brand-text {
          font-family: var(--font-body), sans-serif;
          letter-spacing: -0.01em;
        }

        .footer-social-icons-row {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .footer-social-link {
          color: #0f172a;
          transition: color 0.2s ease, transform 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .footer-social-link:hover {
          color: #64748b;
          transform: translateY(-1px);
        }

        .footer-horizontal-divider {
          height: 1px;
          background: #f1f5f9;
          width: 100%;
          margin: 24px 0 28px 0;
        }

        .footer-quick-links-row {
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .footer-quick-links-row a {
          color: #64748b;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .footer-quick-links-row a:hover {
          color: #0f172a;
        }

        .footer-bottom-credits-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 13.5px;
          color: #64748b;
          flex-wrap: wrap;
          gap: 16px;
        }

        .footer-credits-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .credits-dot {
          color: #cbd5e1;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .grow-together-card-inner {
            padding: 40px 28px;
            border-radius: 28px;
          }

          .grow-grid-layout {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .mockup-body-layout {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .mockup-body-right {
            align-items: center;
          }
        }

        @media (max-width: 600px) {
          .heading-bold-line, .heading-light-line {
            font-size: 2.3rem;
          }

          .grow-action-buttons-row {
            flex-direction: column;
            width: 100%;
          }

          .btn-outline-pill, .btn-solid-dark-pill {
            width: 100%;
            text-align: center;
          }

          .footer-top-brand-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .footer-quick-links-row {
            gap: 18px;
          }

          .footer-bottom-credits-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
