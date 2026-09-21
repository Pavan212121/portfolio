import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: '01',
    number: '01',
    quote: 'We stopped keeping a second copy of everything. One place, one version, and the arguing about specs ended.',
    author: 'Elena Rostova',
    role: 'VP of Product, Zenith Pay',
    company: 'ZENITH',
    avatar: '/avatar.jpg',
    tilt: -2.5,
  },
  {
    id: '04',
    number: '04',
    quote: 'Every brief and every round of notes, in order. I stopped rebuilding context at the start of each week.',
    author: 'Marcus Vance',
    role: 'CTO, Nova AI',
    company: 'NOVA',
    avatar: '/avatar.jpg',
    tilt: 1.8,
  },
  {
    id: '05',
    number: '05',
    quote: 'Six of us doing the work of fifteen, mostly because nothing falls through the cracks any more.',
    author: 'Adaeze Nwankwo',
    role: 'Founder, Tallgrass',
    company: 'TALLGRASS',
    avatar: '/avatar.jpg',
    tilt: 0,
  },
  {
    id: '08',
    number: '08',
    quote: 'Specs, tickets and the decisions behind them finally live together. Code review got noticeably shorter.',
    author: 'Sarah Jenkins',
    role: 'Head of UX, Strata Cloud',
    company: 'STRATA',
    avatar: '/avatar.jpg',
    tilt: -1.6,
  },
  {
    id: '03',
    number: '03',
    quote: 'Handovers used to be a meeting. Now it is one link, and the new person is useful by lunchtime.',
    author: 'David Chen',
    role: 'Design Director, Aether',
    company: 'AETHER',
    avatar: '/avatar.jpg',
    tilt: 2.2,
  },
  {
    id: '06',
    number: '06',
    quote: 'The design system tokens transformed our product release velocity from months to days.',
    author: 'Kiran Patel',
    role: 'Lead Architect, Veloce',
    company: 'VELOCE',
    avatar: '/avatar.jpg',
    tilt: -2.0,
  },
];

// Duplicate for continuous seamless marquee loop
const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

export const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  const current = testimonials[activeIndex];

  return (
    <section
      id="testimonials"
      style={{
        width: '100%',
        padding: '110px 0 90px 0',
        backgroundColor: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">

        {/* Top Header & Pagination Counter */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          <span
            style={{
              fontSize: '0.9rem',
              color: '#71717a',
              fontWeight: 500,
              letterSpacing: '-0.01em',
            }}
          >
            In their words
          </span>
          <span
            style={{
              fontSize: '0.9rem',
              color: '#71717a',
              fontWeight: 600,
              fontVariantNumeric: 'tabular-nums',
            }}
          >
            0{activeIndex + 1} / 0{testimonials.length}
          </span>
        </div>
      </div>

      {/* Full-bleed Clothesline Rope Marquee Container */}
      <div
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        style={{
          position: 'relative',
          width: '100%',
          paddingTop: '20px',
          paddingBottom: '40px',
          overflow: 'hidden',
        }}
      >
        {/* Horizontal Rope Line */}
        <div
          style={{
            position: 'absolute',
            top: '20px',
            left: 0,
            right: 0,
            height: '1px',
            backgroundColor: 'rgba(15, 23, 42, 0.15)',
            zIndex: 2,
          }}
        />

        {/* Continuous Scrolling Marquee Track */}
        <motion.div
          animate={isPaused ? {} : { x: ['0%', '-33.333%'] }}
          transition={{
            ease: 'linear',
            duration: 32,
            repeat: Infinity,
          }}
          style={{
            display: 'flex',
            gap: '32px',
            width: 'max-content',
            paddingLeft: '20px',
          }}
        >
          {infiniteTestimonials.map((item, index) => {
            const originalIndex = index % testimonials.length;
            const isActive = originalIndex === activeIndex;
            return (
              <div
                key={`${item.id}-${index}`}
                onClick={() => setActiveIndex(originalIndex)}
                style={{
                  position: 'relative',
                  paddingTop: '16px',
                  cursor: 'pointer',
                  flexShrink: 0,
                }}
              >
                {/* Hanging Pin Peg on the Rope */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-5px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: isActive ? '#0f172a' : '#cbd5e1',
                    border: '2px solid #ffffff',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                    zIndex: 10,
                    transition: 'background-color 0.3s ease',
                  }}
                />

                {/* Hanging Card with Pendulum Swing Animation */}
                <motion.div
                  animate={{
                    rotate: isActive
                      ? [item.tilt - 0.8, item.tilt + 0.8, item.tilt - 0.8]
                      : [item.tilt - 1.5, item.tilt + 1.5, item.tilt - 1.5],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 4.5 + (index % 4) * 0.4,
                    ease: 'easeInOut',
                  }}
                  whileHover={{ scale: 1.04, y: -4 }}
                  style={{
                    transformOrigin: 'top center',
                    width: '280px',
                    minHeight: '260px',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    border: isActive ? '1.5px solid rgba(15, 23, 42, 0.3)' : '1px solid rgba(0, 0, 0, 0.08)',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    boxShadow: isActive
                      ? '0 16px 36px -8px rgba(0, 0, 0, 0.12), 0 4px 12px rgba(0, 0, 0, 0.04)'
                      : '0 8px 24px -6px rgba(0, 0, 0, 0.05)',
                    transition: 'box-shadow 0.3s ease, border-color 0.3s ease',
                    opacity: isActive ? 1 : 0.88,
                  }}
                >
                  {/* Top Row: Number & 5 Stars */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        fontSize: '0.8rem',
                        color: '#a1a1aa',
                        fontWeight: 600,
                        fontFamily: 'monospace',
                      }}
                    >
                      {item.number}
                    </span>
                    <div style={{ display: 'flex', gap: '2px', color: '#18181b' }}>
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={11} fill="#18181b" color="#18181b" />
                      ))}
                    </div>
                  </div>

                  {/* Middle Quote Content */}
                  <p
                    style={{
                      fontSize: '0.98rem',
                      lineHeight: 1.55,
                      color: '#18181b',
                      fontWeight: 500,
                      margin: '16px 0',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.quote}
                  </p>

                  {/* Bottom Logo / Brand Badge */}
                  <div
                    style={{
                      paddingTop: '16px',
                      borderTop: '1px solid rgba(0, 0, 0, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                    }}
                  >
                    <div
                      style={{
                        width: '16px',
                        height: '16px',
                        borderRadius: '4px',
                        background: '#0f172a',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        fontSize: '0.6rem',
                        fontWeight: 800,
                      }}
                    >
                      ●
                    </div>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 800,
                        letterSpacing: '0.06em',
                        color: '#27272a',
                        textTransform: 'uppercase',
                      }}
                    >
                      {item.company}
                    </span>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom Active Author Details & Navigation Controls */}
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: '16px',
          }}
        >
          {/* Avatar Profile */}
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '50%',
              overflow: 'hidden',
              boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
              border: '2px solid #ffffff',
              marginBottom: '10px',
            }}
          >
            <img
              src={current.avatar}
              alt={current.author}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          {/* Author Name & Role */}
          <h4
            style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: '#0f172a',
              margin: '0 0 2px 0',
            }}
          >
            {current.author}
          </h4>
          <span
            style={{
              fontSize: '0.85rem',
              color: '#64748b',
              fontWeight: 500,
              marginBottom: '20px',
            }}
          >
            {current.role}
          </span>

          {/* Minimalist Carousel Arrow Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={handlePrev}
              style={{
                background: 'none',
                border: 'none',
                color: '#71717a',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#000')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#71717a')}
            >
              <ChevronLeft size={18} />
            </button>

            {/* Horizontal progress indicator lines */}
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {testimonials.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    width: i === activeIndex ? '28px' : '12px',
                    height: '2px',
                    backgroundColor: i === activeIndex ? '#0f172a' : '#d1d5db',
                    borderRadius: '2px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              style={{
                background: 'none',
                border: 'none',
                color: '#71717a',
                cursor: 'pointer',
                padding: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#000')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#71717a')}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
