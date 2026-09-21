import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData, projectCategories } from '../data/projects';
import { ArrowUpRight, Sparkles, TrendingUp } from 'lucide-react';

export const CaseStudies = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="section">
      <div className="container">
        
        {/* Header Title */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px auto' }}>
          <span className="section-tag">
            <Sparkles size={14} /> Selected Portfolio Works
          </span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '16px', color: 'var(--text-primary)' }}>
            Featured Case Studies & <span className="gradient-text-purple">UI Solutions</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem' }}>
            A curated showcase of design systems, SaaS platforms, and mobile apps crafted to deliver measurable business impact.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="filter-tabs">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`filter-tab ${activeCategory === cat ? 'active' : ''}`}
            >
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCategoryTab"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '100px',
                    background: 'rgba(124, 58, 237, 0.1)',
                    border: '1.5px solid var(--accent-purple)',
                    zIndex: -1,
                  }}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '32px',
          }}
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => onSelectProject(project)}
                className="glass-card"
                style={{
                  cursor: 'pointer',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 'var(--radius-xl)',
                  backgroundColor: '#ffffff',
                }}
              >
                {/* Image / Graphic Area */}
                <div
                  style={{
                    height: '240px',
                    background: project.imageBg,
                    padding: '24px',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  {/* Category & Year Tags */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span
                      style={{
                        background: 'rgba(0, 0, 0, 0.45)',
                        backdropFilter: 'blur(10px)',
                        padding: '6px 14px',
                        borderRadius: '100px',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: '#ffffff',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      {project.category}
                    </span>
                    <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'rgba(255, 255, 255, 0.9)' }}>
                      {project.year}
                    </span>
                  </div>

                  {/* Impact Highlight Badge */}
                  <div
                    style={{
                      background: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(12px)',
                      padding: '10px 16px',
                      borderRadius: '12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      width: 'fit-content',
                    }}
                  >
                    <TrendingUp size={16} color={project.accentColor} />
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff' }}>
                      {project.impact}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: '0.82rem', color: project.accentColor, fontWeight: 700, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {project.subcategory} • {project.client}
                    </div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3, color: 'var(--text-primary)' }}>
                      {project.title}
                    </h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.94rem', lineHeight: 1.5, marginBottom: '20px' }}>
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Tags & Action */}
                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          style={{
                            background: 'rgba(0, 0, 0, 0.04)',
                            border: '1px solid var(--border-subtle)',
                            padding: '4px 10px',
                            borderRadius: '6px',
                            fontSize: '0.75rem',
                            color: 'var(--text-secondary)',
                            fontWeight: 500,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingTop: '16px',
                        borderTop: '1px solid var(--border-subtle)',
                      }}
                    >
                      <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--accent-purple)' }}>
                        Read Case Study
                      </span>
                      <div
                        style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '50%',
                          background: 'rgba(0, 0, 0, 0.05)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <ArrowUpRight size={16} color="var(--text-primary)" />
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
