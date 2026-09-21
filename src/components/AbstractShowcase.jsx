import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const showcaseData = [
  {
    id: 'Axiro Pulse',
    title: 'Axiro Pulse — SaaS Platform',
    image: '/my-assets/pulse-project.png',
    category: 'all',
    type: 'popular',
  },
  {
    id: 'mahaveer-real-estates',
    title: 'Mahaveer Real Estates',
    image: '/my-assets/mahaveer-real-estates.png',
    category: 'all',
    type: 'popular',
  },
  {
    id: 'karnik-website',
    title: 'Karnik Digital Platform',
    image: '/my-assets/karnik-website.png',
    category: 'all',
    type: 'new',
  },
  {
    id: 'karnik-mobile-app',
    title: 'Karnik Mobile App',
    image: '/my-assets/karnik-mobile-app.png',
    category: 'all',
    type: 'popular',
  },
  {
    id: 'ibunify-mobile-app',
    title: 'Ibunify Mobile App',
    image: '/my-assets/ibunify-mobile-app.png',
    category: 'all',
    type: 'new',
  },
  {
    id: 'pjs-logo',
    title: "PJ's LOGO & Brand Identity",
    image: '/my-assets/pjs-logo.png',
    category: 'all',
    type: 'new',
  },
  {
    id: 'butterfly-designs-logo',
    title: 'Butterfly Designs LOGO',
    image: '/my-assets/butterfly-designs-logo.png',
    category: 'all',
    type: 'popular',
  },
];

const categories = ['ALL', 'POPULAR', 'NEW'];

export const AbstractShowcase = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredItems = showcaseData.filter((item) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'POPULAR') return item.type === 'popular';
    if (activeTab === 'NEW') return item.type === 'new';
    return true;
  });

  return (
    <section id="work" style={{ width: '100%', padding: '100px 0 80px 0', backgroundColor: '#ffffff' }}>
      <div className="container">

        {/* Top Header Row */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: '32px',
            marginBottom: '48px',
          }}
        >
          {/* Left Title */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
                fontWeight: 800,
                color: '#000000',
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                margin: 0,
              }}
            >
              Abstract
            </h2>
            <div
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: 'clamp(2.8rem, 6.5vw, 5.2rem)',
                fontWeight: 800,
                color: '#8e8e93',
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                marginTop: '4px',
              }}
            >
              Visual Showcase.
            </div>
          </div>

          {/* Right Description & Link */}
          <div style={{ maxWidth: '340px', paddingBottom: '8px' }}>
            <p
              style={{
                color: '#52525b',
                fontSize: '1.02rem',
                lineHeight: 1.5,
                margin: 0,
                fontWeight: 400,
              }}
            >
              A curated collection of gradients, shapes and visual experiments
            </p>
            <a
              href="#process"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#18181b',
                fontWeight: 600,
                fontSize: '0.96rem',
                textDecoration: 'none',
                marginTop: '16px',
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.gap = '12px')}
              onMouseLeave={(e) => (e.currentTarget.style.gap = '8px')}
            >
              <span>Learn more</span>
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          </div>
        </div>

        {/* Minimalist Filter Navigation Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '28px',
            borderBottom: '1px solid #e4e4e7',
            marginBottom: '36px',
            position: 'relative',
          }}
        >
          {categories.map((cat) => {
            const isActive = activeTab === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '0 0 12px 0',
                  color: isActive ? '#000000' : '#8e8e93',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 600,
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'color 0.2s ease',
                }}
              >
                {cat}
                {isActive && (
                  <motion.div
                    layoutId="activeShowcaseTabUnderline"
                    style={{
                      position: 'absolute',
                      bottom: '-1px',
                      left: 0,
                      right: 0,
                      height: '2.5px',
                      backgroundColor: '#000000',
                    }}
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Showcase Gallery Grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '32px 24px',
          }}
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.06 }}
                onClick={() => onNavigate && onNavigate('work')}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  position: 'relative',
                }}
              >
                {/* Artwork Image Container */}
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '16 / 10',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    backgroundColor: '#f4f4f5',
                    position: 'relative',
                  }}
                >
                  <motion.img
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />

                  {/* Framer Badge on 3rd item / showcase corner */}
                  {index === 2 && (
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '12px',
                        right: '12px',
                        background: '#ffffff',
                        padding: '6px 12px',
                        borderRadius: '6px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                        pointerEvents: 'none',
                      }}
                    >
                      {/* Framer Logo mark */}
                      <svg width="12" height="14" viewBox="0 0 12 18" fill="none">
                        <path d="M0 0H12V6H6L0 0Z" fill="#000000" />
                        <path d="M0 6H12L6 12H0V6Z" fill="#000000" />
                        <path d="M0 12H6V18L0 12Z" fill="#000000" />
                      </svg>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#18181b' }}>
                        Made in Framer
                      </span>
                    </div>
                  )}
                </div>

                {/* Caption Title */}
                <div style={{ marginTop: '12px' }}>
                  <span
                    style={{
                      fontSize: '0.94rem',
                      color: '#27272a',
                      fontWeight: 500,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default AbstractShowcase;
