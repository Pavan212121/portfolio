import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Edit3, Sparkles, Laptop } from 'lucide-react';

const stages = [
  {
    id: 1,
    title: 'Research',
    subtitle: 'Discovery',
    sprint: '1 sprint',
    icon: Lightbulb,
    height: 130, // height of vertical line in px
  },
  {
    id: 2,
    title: 'UX Stage',
    subtitle: 'Define',
    sprint: '2 sprints',
    icon: Edit3,
    height: 220,
  },
  {
    id: 3,
    title: 'UI Design',
    subtitle: 'Develop',
    sprint: '4 sprints',
    icon: Sparkles,
    height: 310,
  },
  {
    id: 4,
    title: 'Prototype',
    subtitle: 'Deliver',
    sprint: '1 sprint',
    icon: Laptop,
    height: 400,
  },
];

export const DesignProcess = () => {
  return (
    <section
      id="process"
      style={{
        width: '100%',
        padding: '120px 0 100px 0',
        backgroundColor: '#ffffff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container">
        {/* Main Ascending Staircase Stage Chart */}
        <div
          style={{
            position: 'relative',
            minHeight: '520px',
            width: '100%',
            maxWidth: '1080px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            paddingBottom: '32px',
          }}
          className="roadmap-stage-container"
        >
          {/* 4 Ascending Stage Columns */}
          {stages.map((stage, index) => {
            const IconComponent = stage.icon;
            return (
              <motion.div
                key={stage.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  flex: 1,
                  position: 'relative',
                  zIndex: 10,
                }}
              >
                {/* Title & Subtitle Header */}
                <div style={{ textAlign: 'center', marginBottom: '8px' }}>
                  <h3
                    style={{
                      fontFamily: 'var(--font-body), sans-serif',
                      fontSize: 'clamp(1.2rem, 2vw, 1.55rem)',
                      fontWeight: 700,
                      color: '#0f172a',
                      letterSpacing: '-0.02em',
                      margin: 0,
                    }}
                  >
                    {stage.title}
                  </h3>
                  <div
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 500,
                      color: '#64748b',
                      marginTop: '4px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {stage.subtitle}
                  </div>
                </div>

                {/* Hollow Pin Dot */}
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    border: '1.5px solid #0f172a',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 0 0 2px rgba(15, 23, 42, 0.06)',
                    marginBottom: '0px',
                    zIndex: 2,
                  }}
                />

                {/* Vertical Guide Line */}
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: `${stage.height}px` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 + 0.2, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    width: '1px',
                    background: 'linear-gradient(180deg, rgba(15, 23, 42, 0.35) 0%, rgba(15, 23, 42, 0.12) 100%)',
                    marginBottom: '0px',
                  }}
                />

                {/* Bottom Sprint Node Pill Badge */}
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    backgroundColor: '#181a20',
                    borderRadius: '100px',
                    padding: '3px 3px 3px 14px',
                    gap: '10px',
                    boxShadow: '0 8px 24px -4px rgba(0, 0, 0, 0.18)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    marginTop: '-16px',
                    zIndex: 20,
                  }}
                >
                  <span
                    style={{
                      color: '#f8fafc',
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      letterSpacing: '0.01em',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {stage.sprint}
                  </span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#0f172a',
                    }}
                  >
                    <IconComponent size={14} strokeWidth={2.4} />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Bottom Dotted Ruler Bar Track spanning horizontally */}
          <div
            style={{
              position: 'absolute',
              bottom: '48px',
              left: '5%',
              right: '5%',
              height: '14px',
              zIndex: 1,
              background: 'repeating-linear-gradient(90deg, rgba(15, 23, 42, 0.18) 0px, rgba(15, 23, 42, 0.18) 2px, transparent 2px, transparent 7px)',
              WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%)',
              maskImage: 'linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 8%, rgba(0,0,0,1) 92%, transparent 100%)',
              opacity: 0.8,
            }}
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .roadmap-stage-container {
            flex-direction: column !important;
            align-items: center !important;
            min-height: auto !important;
            gap: 40px !important;
          }
          .roadmap-stage-container > div {
            width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default DesignProcess;
