import React from 'react';
import { MapPin } from 'lucide-react';
import CursorRingField from './CursorRingField';

export const Footer = () => {
  return (
    <footer className="daymark-footer-root">
      {/* Interactive Cursor Ring Field Background on White */}
      <div
        className="daymark-footer-canvas-bg"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden',
          pointerEvents: 'none',
        }}
      >
        <CursorRingField
          background="#ffffff"
          speed={20}
          cameraDistance={280}
          colors={["#7189ff", "#3074f9", "#1e293b"]}
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle Soft Glow Accent Layer */}
      <div className="daymark-ambient-glow" aria-hidden="true" />

      <div className="daymark-footer-container">
        {/* Giant Edge-to-Edge Wordmark */}
        <div className="daymark-giant-wordmark-wrap">
          <h1 className="daymark-giant-title">THANKYOU</h1>
        </div>

        {/* 4-Column Navigation & Info Grid */}
        <div className="daymark-columns-grid">
          
          {/* Col 1: About & Socials */}
          <div className="daymark-col daymark-about-col">
            <h3 className="daymark-col-title">About</h3>
            <p className="daymark-about-text">
              We create thoughtful digital experiences that feel simple, human, and easy to love. From the little details to the bigger picture, everything is designed with care to make everyday moments feel a little more effortless.
            </p>

            <div className="daymark-social-icons-row">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="daymark-social-square-btn"
                aria-label="Facebook"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="daymark-social-square-btn"
                aria-label="Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              {/* X / Twitter */}
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="daymark-social-square-btn"
                aria-label="X"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Sitemap */}
          <div className="daymark-col">
            <h3 className="daymark-col-title">Sitemap</h3>
            <div className="daymark-links-list">
              <a href="#">Home</a>
              <a href="#about">Studio</a>
              <a href="#work">Projects</a>
              <a href="#">Blogs</a>
            </div>
          </div>

          {/* Col 3: Legal Pages */}
          <div className="daymark-col">
            <h3 className="daymark-col-title">Legal Pages</h3>
            <div className="daymark-links-list">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Disclaimer</a>
              <a href="#">Cookies</a>
            </div>
          </div>

          {/* Col 4: Contact us */}
          <div className="daymark-col">
            <h3 className="daymark-col-title">Contact us</h3>
            <div className="daymark-links-list">
              <a href="#contact">Book a call</a>
              <a href="mailto:hello@daymark.studio">hello@daymark.studio</a>
              <a href="tel:+12025550147">+1 (202) 555-0147</a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Location Row */}
        <div className="daymark-bottom-bar">
          <span className="daymark-copyright">
            © 2026 Daymark. All Rights Reserved.
          </span>

          <div className="daymark-location-tag">
            <MapPin size={12} className="daymark-pin-icon" />
            <span>Los Angeles, California, USA</span>
          </div>
        </div>
      </div>

      <style>{`
        .daymark-footer-root {
          position: relative;
          background-color: #ffffff;
          color: #000000;
          overflow: hidden;
          padding-top: 24px;
          border-top: 1px solid #e4e4e7;
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        /* Subtle Soft Glow Accent Layer */
        .daymark-ambient-glow {
          position: absolute;
          bottom: -50px;
          left: -80px;
          width: 750px;
          height: 650px;
          background: radial-gradient(circle at 25% 65%, rgba(113, 137, 255, 0.12) 0%, rgba(48, 116, 249, 0.05) 40%, transparent 75%);
          opacity: 0.8;
          filter: blur(80px);
          pointer-events: none;
          z-index: 1;
        }

        .daymark-footer-container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 48px;
          box-sizing: border-box;
        }

        @media (max-width: 640px) {
          .daymark-footer-container {
            padding: 0 20px;
          }
        }

        /* Giant Title */
        .daymark-giant-wordmark-wrap {
          width: 100%;
          overflow: hidden;
          margin-bottom: clamp(48px, 6vw, 76px);
          padding-top: 10px;
        }

        .daymark-giant-title {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: clamp(4.2rem, 16.5vw, 15.5rem);
          font-weight: 850;
          color: #000000;
          letter-spacing: -0.04em;
          line-height: 0.88;
          margin: 0;
          text-transform: uppercase;
          user-select: none;
          display: block;
          width: 100%;
        }

        /* 4 Columns Grid */
        .daymark-columns-grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1.15fr;
          gap: clamp(28px, 4vw, 60px);
          align-items: start;
        }

        .daymark-col-title {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif !important;
          font-size: 14.5px;
          font-weight: 700;
          color: #09090b;
          margin: 0 0 16px 0;
          letter-spacing: -0.01em;
        }

        .daymark-about-text {
          font-size: 12.5px;
          line-height: 1.68;
          color: #52525b;
          margin: 0 0 24px 0;
          max-width: 320px;
          font-weight: 400;
        }

        .daymark-social-icons-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .daymark-social-square-btn {
          width: 34px;
          height: 34px;
          border-radius: 7px;
          background: rgba(0, 0, 0, 0.04);
          border: 1px solid rgba(0, 0, 0, 0.1);
          color: #18181b;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .daymark-social-square-btn:hover {
          background: rgba(0, 0, 0, 0.09);
          border-color: rgba(0, 0, 0, 0.22);
          transform: translateY(-2px);
          color: #000000;
        }

        .daymark-links-list {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .daymark-links-list a {
          color: #52525b;
          text-decoration: none;
          font-size: 12.5px;
          font-weight: 450;
          transition: color 0.2s ease, transform 0.2s ease;
          width: fit-content;
        }

        .daymark-links-list a:hover {
          color: #000000;
          transform: translateX(2px);
        }

        /* Bottom Row */
        .daymark-bottom-bar {
          margin-top: clamp(60px, 8vw, 110px);
          padding-top: 24px;
          padding-bottom: 36px;
          border-top: 1px solid #e4e4e7;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 11.5px;
          color: #71717a;
        }

        .daymark-copyright {
          color: #71717a;
          font-weight: 400;
        }

        .daymark-location-tag {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #71717a;
        }

        .daymark-pin-icon {
          color: #71717a;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .daymark-columns-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }

          .daymark-about-col {
            grid-column: span 2;
          }

          .daymark-about-text {
            max-width: 100%;
          }
        }

        @media (max-width: 540px) {
          .daymark-columns-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }

          .daymark-about-col {
            grid-column: span 1;
          }

          .daymark-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
            gap: 10px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
