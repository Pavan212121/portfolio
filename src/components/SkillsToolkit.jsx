import React from 'react';
import { motion } from 'framer-motion';
import {
  Layers,
  Sparkles,
  Layout,
  Smartphone,
  Video,
  Play,
  Palette,
  Eye,
  Search,
  CheckSquare,
  BarChart3,
  Code2,
  Cpu,
  Boxes,
  FileText,
  MousePointer2,
  Box,
  Compass,
  Zap,
  Component,
  Sliders,
  Frame,
} from 'lucide-react';

const tools = [
  { name: 'Figma', category: 'Interface Design & Tokens', icon: Component },
  { name: 'FigJam', category: 'Collaborative Whiteboarding', icon: Compass },
  { name: 'Sketch', category: 'UI & Vector Design', icon: Layers },
  { name: 'Adobe XD', category: 'Interaction & Wireframes', icon: Layout },
  { name: 'Miro', category: 'Mind Mapping & User Flows', icon: Boxes },
  { name: 'Maze', category: 'Unmoderated Usability Testing', icon: Search },
  { name: 'Framer', category: 'Motion & Web Publishing', icon: Zap },
  { name: 'ProtoPie', category: 'Advanced Sensor Prototyping', icon: Smartphone },
  { name: 'Photoshop', category: 'Visual Assets & Retouching', icon: Eye },
  { name: 'Illustrator', category: 'Vector Icons & Illustration', icon: Palette },
  { name: 'After Effects', category: 'Motion Graphics & UI Keyframing', icon: Video },
  { name: 'Canva', category: 'Visual Design & Brand Assets', icon: Frame },
  { name: 'Jira', category: 'Agile Sprint & Issue Management', icon: CheckSquare },
];

export const SkillsToolkit = () => {
  return (
    <section
      id="skills"
      style={{
        width: '100%',
        padding: '120px 0',
        backgroundColor: '#ffffff',
        borderTop: '1px solid rgba(0, 0, 0, 0.06)',
        position: 'relative',
      }}
    >
      <div className="container">

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '360px 1fr',
            gap: '56px',
            alignItems: 'start',
            position: 'relative',
          }}
          className="sticky-skills-wrapper"
        >
          {/* Left Column: Sticky Side Header */}
          <div
            style={{
              position: 'sticky',
              top: '120px',
              alignSelf: 'flex-start',
              paddingRight: '12px',
            }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)',
                fontWeight: 800,
                color: '#0f172a',
                lineHeight: 1.12,
                letterSpacing: '-0.035em',
                marginBottom: '20px',
              }}
            >
              Tools & software I design with
            </h2>
            <p
              style={{
                color: '#64748b',
                fontSize: '1.05rem',
                lineHeight: 1.6,
                marginBottom: '32px',
              }}
            >
              The everyday software, prototyping tools, and handoff platforms I use to take ideas from rough concepts to production-ready design.
            </p>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 18px',
                borderRadius: '100px',
                background: 'rgba(15, 23, 42, 0.05)',
                border: '1px solid rgba(15, 23, 42, 0.08)',
                color: '#0f172a',
                fontSize: '0.85rem',
                fontWeight: 700,
              }}
            >
              <span>{tools.length} Industry Tools</span>
            </div>
          </div>

          {/* Right Column: 2-Column Grid of Tech Stack Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
            }}
            className="tools-grid-columns"
          >
            {tools.map((tool, idx) => {
              const IconComp = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.4, delay: (idx % 2) * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  style={{
                    backgroundColor: '#12141a',
                    borderRadius: '16px',
                    minHeight: '140px',
                    padding: '24px 20px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    boxShadow: '0 8px 30px -6px rgba(0, 0, 0, 0.25)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.boxShadow = '0 12px 35px -5px rgba(0, 0, 0, 0.35)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.boxShadow = '0 8px 30px -6px rgba(0, 0, 0, 0.25)';
                  }}
                >
                  {/* Icon mark */}
                  <div
                    style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '10px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#ffffff',
                    }}
                  >
                    <IconComp size={20} strokeWidth={2} />
                  </div>

                  {/* Tool Name */}
                  <div style={{ textAlign: 'center' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-body), sans-serif',
                        fontSize: '1.08rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        letterSpacing: '-0.01em',
                        display: 'block',
                      }}
                    >
                      {tool.name}
                    </span>
                    <span
                      style={{
                        fontSize: '0.74rem',
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontWeight: 500,
                        marginTop: '2px',
                        display: 'block',
                      }}
                    >
                      {tool.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .sticky-skills-wrapper {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .sticky-skills-wrapper > div:first-child {
            position: relative !important;
            top: 0 !important;
          }
        }
        @media (max-width: 560px) {
          .tools-grid-columns {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsToolkit;
