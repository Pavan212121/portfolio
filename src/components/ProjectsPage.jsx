import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fullProjectsData = [
  {
    id: 'pulse-project',
    title: 'Pulse Project — Health & Analytics',
    description: 'User-centric analytics and digital tracking platform with intuitive data visualization.',
    image: '/my-assets/pulse-project.png',
    tags: ['WEB DESIGN', 'UI/UX'],
    categories: ['Web design'],
  },
  {
    id: 'mahaveer-real-estates',
    title: 'Mahaveer Real Estates',
    description: 'High-converting luxury real estate platform featuring immersive property showcases.',
    image: '/my-assets/mahaveer-real-estates.png',
    tags: ['WEB DESIGN', 'UI/UX'],
    categories: ['Web design'],
  },
  {
    id: 'karnik-website',
    title: 'Karnik Digital Platform',
    description: 'Modern corporate web experience built with seamless UX architecture and performance.',
    image: '/my-assets/karnik-website.png',
    tags: ['WEB DESIGN', 'UI/UX'],
    categories: ['Web design'],
  },
  {
    id: 'karnik-mobile-app',
    title: 'Karnik Mobile Experience',
    description: 'Intuitive iOS & Android application designed for streamlined user engagement.',
    image: '/my-assets/karnik-mobile-app.png',
    tags: ['MOBILE APP', 'UI/UX'],
    categories: ['Mobile application'],
    hasFramerBadge: true,
  },
  {
    id: 'ibunify-mobile-app',
    title: 'Ibunify Mobile Application',
    description: 'Next-generation mobile interface delivering fluid micro-interactions and clean usability.',
    image: '/my-assets/ibunify-mobile-app.png',
    tags: ['MOBILE APP', 'UI/UX'],
    categories: ['Mobile application'],
  },
  {
    id: 'pjs-brand-identity',
    title: "PJ's Brand Identity & Logo",
    description: 'Custom visual identity, logo mark, and typography guidelines crafted for timeless recognition.',
    image: "/my-assets/pjs-logo.png",
    tags: ['BRANDING', 'LOGO DESIGN'],
    categories: ['Branding'],
  },
  {
    id: 'butterfly-designs-logo',
    title: 'Butterfly Designs — Visual Identity',
    description: 'Creative brand mark and emblem system embodying elegance and organic motion.',
    image: '/my-assets/butterfly-designs-logo.png',
    tags: ['BRANDING', 'LOGO DESIGN'],
    categories: ['Branding'],
  },
];

const categories = ['All', 'Web design', 'Branding', 'Mobile application'];

export const ProjectsPage = ({ onNavigateHome }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? fullProjectsData
    : fullProjectsData.filter((p) => p.categories.includes(activeCategory));

  return (
    <div className="projects-page-wrapper">
      <div className="projects-container">
        
        {/* Page Top Header */}
        <div className="projects-header-row">
          <h1 className="projects-main-title">Projects</h1>
          <p className="projects-header-subtitle">
            Every project we deliver is a reflection of our commitment to quality, designed to inspire and drive success.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="projects-tabs-nav-bar">
          <div className="projects-tabs-list">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`projects-tab-btn ${activeCategory === cat ? 'is-active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Projects Grid */}
        <motion.div layout className="projects-grid-layout">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="project-card-item"
              >
                {/* Image Container */}
                <div className="project-image-box">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img-elem"
                    loading="lazy"
                  />

                  {/* Top Right Corner Arrow Indicator */}
                  <div className="project-corner-arrow" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path
                        d="M2 2H10V10"
                        stroke="#f43f5e"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Optional Made in Framer Badge */}
                  {project.hasFramerBadge && (
                    <div className="made-in-framer-badge">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
                      </svg>
                      <span>Made in Framer</span>
                    </div>
                  )}
                </div>

                {/* Project Metadata Content */}
                <div className="project-info-box">
                  <h2 className="project-item-title">{project.title}</h2>
                  <p className="project-item-desc">{project.description}</p>
                  
                  {/* Category Tags Pills */}
                  <div className="project-tags-row">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="project-tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      <style>{`
        .projects-page-wrapper {
          min-height: 100vh;
          background-color: #ffffff;
          padding: 130px 48px 120px 48px;
          color: #111827;
          box-sizing: border-box;
        }

        .projects-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
        }

        /* Top Header Row */
        .projects-header-row {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 32px;
          margin-bottom: 48px;
        }

        .projects-main-title {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          font-size: clamp(3.4rem, 6.5vw, 4.8rem);
          font-weight: 750;
          color: #0f172a;
          line-height: 1.02;
          letter-spacing: -0.04em;
          margin: 0;
        }

        .projects-header-subtitle {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.95rem;
          color: #4b5563;
          line-height: 1.5;
          max-width: 360px;
          margin: 0;
          font-weight: 400;
        }

        /* Tabs Navigation Bar */
        .projects-tabs-nav-bar {
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 16px;
          margin-bottom: 48px;
        }

        .projects-tabs-list {
          display: flex;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .projects-tab-btn {
          background: transparent;
          border: none;
          padding: 0;
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 1.05rem;
          font-weight: 600;
          color: #9ca3af;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .projects-tab-btn:hover {
          color: #111827;
        }

        .projects-tab-btn.is-active {
          color: #111827;
          font-weight: 750;
        }

        /* 2-Column Projects Grid */
        .projects-grid-layout {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 56px 44px;
        }

        .project-card-item {
          display: flex;
          flex-direction: column;
        }

        /* Image Box */
        .project-image-box {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 10.2;
          background: #f4f4f5;
          border-radius: 4px;
          overflow: hidden;
        }

        .project-img-elem {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-image-box:hover .project-img-elem {
          transform: scale(1.025);
        }

        /* Corner Arrow Indicator */
        .project-corner-arrow {
          position: absolute;
          top: 14px;
          right: 14px;
          z-index: 2;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Made in Framer Badge */
        .made-in-framer-badge {
          position: absolute;
          top: 16px;
          right: 14px;
          z-index: 3;
          background: #ffffff;
          border-radius: 100px;
          padding: 4px 10px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.72rem;
          font-weight: 700;
          color: #0f172a;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.06);
        }

        /* Info Content */
        .project-info-box {
          margin-top: 18px;
        }

        .project-item-title {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif !important;
          font-size: 1.18rem;
          font-weight: 750;
          color: #111827;
          line-height: 1.3;
          letter-spacing: -0.015em;
          margin: 0 0 6px 0;
        }

        .project-item-desc {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 0.88rem;
          color: #4b5563;
          line-height: 1.45;
          margin: 0 0 14px 0;
        }

        /* Tags Row */
        .project-tags-row {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .project-tag-pill {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif;
          font-size: 9.5px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #18181b;
          border: 1px solid #e4e4e7;
          padding: 2.5px 8px;
          border-radius: 100px;
          background: transparent;
        }

        /* Responsive */
        @media (max-width: 840px) {
          .projects-page-wrapper {
            padding: 100px 20px 80px 20px;
          }

          .projects-header-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .projects-grid-layout {
            grid-template-columns: 1fr;
            gap: 44px;
          }

          .projects-tabs-list {
            gap: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
