import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Users,
  Briefcase,
  Layers,
  Sparkles,
  Laptop,
  Smartphone,
  Copy,
  Check,
  Calendar,
} from 'lucide-react';
import { caseStudies } from '../data/caseStudies';

const ALL_PROJECTS = [
  { id: 'Axiro Pulse', title: 'Axiora Pulse — Founder Intelligence Platform', image: '/my-assets/pulse-project.png', tags: ['Founder Platform', 'Validation Framework'] },
  { id: 'mahaveer-real-estates', title: 'Mahaveer Real Estates', image: '/my-assets/mahaveer-real-estates.png', tags: ['Real Estate', 'Web Design'] },
  { id: 'karnik-website', title: 'Karnik — Premium Automotive Care Experience', image: '/my-assets/karnik-website.png', tags: ['Automotive Care', 'Admin Portal'] },
  { id: 'karnik-mobile-app', title: 'Karnik — Premium Automotive Care Experience', image: '/my-assets/karnik-mobile-app.png', tags: ['Automotive Care', 'Mobile App'] },
  { id: 'ibunify-mobile-app', title: 'Ibunify Mobile Experience', image: '/my-assets/ibunify-mobile-app.png', tags: ['Fintech', 'Mobile App'] },
  { id: 'pjs-brand-identity', title: "PJ's Brand Identity", image: '/my-assets/pjs-logo.png', tags: ['Branding', 'Logo'] },
  { id: 'butterfly-designs-logo', title: 'Butterfly Designs', image: '/my-assets/butterfly-designs-logo.png', tags: ['Branding', 'Identity'] },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-20px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
});

export const CaseStudyPage = ({ projectId, onNavigate }) => {
  const [copied, setCopied] = useState(false);
  const normalizedId = decodeURIComponent(projectId || '');
  const cs = caseStudies[projectId] || caseStudies[normalizedId];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [projectId]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('pavan.dsgn@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  if (!cs) {
    const fallback = ALL_PROJECTS.find((p) => p.id === projectId);
    return (
      <div className="cs-fallback-root">
        <div className="cs-fallback-box">
          <h1>{fallback?.title || 'Case Study'}</h1>
          <p>The detailed case study for this project is currently being finalized.</p>
          <button onClick={() => onNavigate('work')} className="cs-back-pill">
            <ArrowLeft size={16} /> Back to Work
          </button>
        </div>
      </div>
    );
  }

  const accent = cs.accentColor || '#6366f1';
  const similarProjects = (cs.similarProjects || [])
    .map((id) => ALL_PROJECTS.find((p) => p.id === id))
    .filter(Boolean);

  const moduleList = cs.corePillars || [
    { name: '1. Problem Viability', color: '#6366f1', role: 'Assumption testing & problem-solution fit' },
    { name: '2. Market Research', color: '#0ea5e9', role: 'Competitive positioning & addressable market' },
    { name: '3. Customer Insights', color: '#10b981', role: 'Survey workflows & sentiment extraction' },
    { name: '4. Go-To-Market Strategy', color: '#f59e0b', role: 'Channel distribution & early launch roadmap' },
    { name: '5. Business Model Viability', color: '#ec4899', role: 'Unit economics, pricing & willingness-to-pay' },
  ];

  return (
    <div className="cs-page-root">
      {/* ══════════════════════════════════════════════════════════
          HERO SECTION — 2 Columns (Text Left, Light Mockup Right)
      ══════════════════════════════════════════════════════════ */}
      <section className="cs-hero-section">
        <div className="cs-max-width">
          {/* Top Breadcrumb & Back Bar */}
          <div className="cs-top-bar">
            <button onClick={() => onNavigate('work')} className="cs-back-link">
              <ArrowLeft size={15} />
              <span>Back to all projects</span>
            </button>
            <div className="cs-breadcrumb">
              <span onClick={() => onNavigate('home')} className="cs-crumb-item">Home</span>
              <span className="cs-crumb-sep">/</span>
              <span onClick={() => onNavigate('work')} className="cs-crumb-item">Work</span>
              <span className="cs-crumb-sep">/</span>
              <span className="cs-crumb-active">{cs.client}</span>
            </div>
          </div>

          <div className="cs-hero-grid">
            {/* Left Content */}
            <motion.div className="cs-hero-left" {...fadeUp(0)}>
              <span className="cs-kicker" style={{ color: accent }}>
                Case Study &bull; {cs.industry}
              </span>

              <h1 className="cs-headline">{cs.heroHeadline}</h1>

              <p className="cs-description">{cs.heroDescription}</p>

              <div className="cs-tags-row">
                {cs.tags?.map((tag) => (
                  <span key={tag} className="cs-tag-pill" style={{ borderColor: `${accent}35`, color: '#334155' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Mockup Showcase (Clean Light Theme) */}
            <motion.div
              className="cs-hero-right"
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            >
              <div className="cs-mockup-stage">
                {/* Laptop/Tablet Base */}
                <div className="cs-laptop-mockup">
                  <div className="cs-laptop-screen">
                    <div className="cs-browser-dots">
                      <span className="dot red" />
                      <span className="dot yellow" />
                      <span className="dot green" />
                    </div>
                    <img src={cs.coverImage} alt={cs.client} className="cs-screen-img" />
                  </div>
                </div>

                {/* Overlapping Phone Mockup */}
                <div className="cs-phone-mockup">
                  <div className="cs-phone-inner">
                    <div className="cs-phone-notch" />
                    <img src={cs.coverImage} alt="Mobile preview" className="cs-phone-img" />
                  </div>
                </div>

                {/* Subtle soft backdrop glow */}
                <div className="cs-mockup-glow" style={{ background: accent }} />
              </div>
            </motion.div>
          </div>

          {/* ── Metadata Strip (5 Columns) ── */}
          <motion.div className="cs-meta-strip" {...fadeUp(0.2)}>
            <div className="cs-meta-item">
              <div className="cs-meta-icon" style={{ background: `${accent}12`, color: accent }}>
                <Briefcase size={17} />
              </div>
              <div className="cs-meta-content">
                <span className="cs-meta-label">Client</span>
                <span className="cs-meta-value">{cs.client}</span>
              </div>
            </div>

            <div className="cs-meta-item">
              <div className="cs-meta-icon" style={{ background: `${accent}12`, color: accent }}>
                <Layers size={17} />
              </div>
              <div className="cs-meta-content">
                <span className="cs-meta-label">Industry</span>
                <span className="cs-meta-value">{cs.industry}</span>
              </div>
            </div>

            <div className="cs-meta-item">
              <div className="cs-meta-icon" style={{ background: `${accent}12`, color: accent }}>
                <Sparkles size={17} />
              </div>
              <div className="cs-meta-content">
                <span className="cs-meta-label">Service</span>
                <span className="cs-meta-value">{cs.services}</span>
              </div>
            </div>

            <div className="cs-meta-item">
              <div className="cs-meta-icon" style={{ background: `${accent}12`, color: accent }}>
                <Users size={17} />
              </div>
              <div className="cs-meta-content">
                <span className="cs-meta-label">Team Setup</span>
                <span className="cs-meta-value">{cs.team}</span>
              </div>
            </div>

            <div className="cs-meta-item">
              <div className="cs-meta-icon" style={{ background: `${accent}12`, color: accent }}>
                <Clock size={17} />
              </div>
              <div className="cs-meta-content">
                <span className="cs-meta-label">Timeline</span>
                <span className="cs-meta-value">{cs.timeline}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          GOAL / CHALLENGE / OUTCOME — Clean Light Editorial
      ══════════════════════════════════════════════════════════ */}
      <section className="cs-gco-section">
        <div className="cs-max-width">
          {/* Goal Row */}
          <motion.div className="cs-gco-row" {...fadeUp(0)}>
            <div className="cs-gco-label-col">
              <h2 className="cs-gco-title">Goal</h2>
            </div>
            <div className="cs-gco-text-col">
              <p className="cs-gco-body">{cs.goal}</p>
            </div>
          </motion.div>

          {/* Challenge Row */}
          <motion.div className="cs-gco-row" {...fadeUp(0.08)}>
            <div className="cs-gco-label-col">
              <h2 className="cs-gco-title">Challenge</h2>
            </div>
            <div className="cs-gco-text-col">
              <p className="cs-gco-body">{cs.challenge}</p>
            </div>
          </motion.div>

          {/* Outcome Row */}
          <motion.div className="cs-gco-row" {...fadeUp(0.12)}>
            <div className="cs-gco-label-col">
              <h2 className="cs-gco-title">Outcome</h2>
            </div>
            <div className="cs-gco-text-col">
              <p className="cs-gco-body">{cs.outcome}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          KEY NUMBERS BANNER (Clean Light Surface, No Dark Block)
      ══════════════════════════════════════════════════════════ */}
      <section className="cs-numbers-banner">
        <div className="cs-max-width">
          <div className="cs-numbers-grid">
            {cs.keyNumbers.map((stat, idx) => (
              <motion.div key={idx} className="cs-number-stat" {...fadeUp(idx * 0.1)}>
                <div className="cs-stat-num" style={{ color: idx === 0 ? accent : '#0f172a' }}>
                  {stat.value}
                </div>
                <div className="cs-stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          PROJECT TIMELINE (Gantt Chart Layout) - (Hidden for now)
      ══════════════════════════════════════════════════════════ */}
      {/*
      <section className="cs-editorial-section cs-bg-light">
        <div className="cs-max-width">
          <div className="cs-editorial-split">
            <motion.div className="cs-split-left" {...fadeUp(0)}>
              <span className="cs-section-badge" style={{ color: accent }}>TIMELINE</span>
              <h2 className="cs-split-heading">Project Timeline</h2>
            </motion.div>

            <motion.div className="cs-split-right" {...fadeUp(0.08)}>
              <div className="cs-gantt-chart">
                <div className="cs-gantt-headers">
                  <span>Month 1</span>
                  <span>Month 2</span>
                  <span>Month 3</span>
                  <span>Month 4</span>
                </div>

                <div className="cs-gantt-bars">
                  {cs.timeline_phases.map((phase, i) => {
                    const widths = ['26%', '34%', '48%', '36%', '28%'];
                    const offsets = ['0%', '20%', '42%', '60%', '72%'];
                    return (
                      <motion.div
                        key={i}
                        className="cs-gantt-bar-row"
                        initial={{ opacity: 0, x: -16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.08 }}
                      >
                        <div className="cs-gantt-bar-track">
                          <div
                            className="cs-gantt-bar-fill"
                            style={{
                              marginLeft: offsets[i % offsets.length],
                              width: widths[i % widths.length],
                              background: i === 0 ? accent : '#0f172a',
                            }}
                          >
                            <span className="cs-gantt-bar-title">{phase.phase}</span>
                            <span className="cs-gantt-bar-dates">{phase.start} &rarr; {phase.end}</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      */}

      {/* ══════════════════════════════════════════════════════════
          SECTION 1 — RESEARCH & DISCOVERY
      ══════════════════════════════════════════════════════════ */}
      <section className="cs-editorial-section">
        <div className="cs-max-width">
          <div className="cs-editorial-split">
            <motion.div className="cs-split-left" {...fadeUp(0)}>
              <span className="cs-section-badge" style={{ color: accent }}>Research</span>
              <h2 className="cs-split-heading">{cs.section1Title || 'Discovery & Research'}</h2>
            </motion.div>

            <motion.div className="cs-split-right" {...fadeUp(0.08)}>
              <p className="cs-body-paragraph">{cs.section1Content}</p>

              <div className="cs-bullet-list">
                {cs.section1Bullets?.map((bullet, i) => (
                  <div key={i} className="cs-bullet-item" style={{ borderLeftColor: accent }}>
                    <p>{bullet}</p>
                  </div>
                ))}
              </div>

              {/* Research Synthesis Card (Clean Light Theme) */}
              <div className="cs-research-card">
                <div className="cs-research-header">
                  <div className="cs-research-badge">Synthesis Matrix</div>
                  <span className="cs-research-sub">Translating user research into product architecture</span>
                </div>
                <div className="cs-sticky-grid">
                  <div className="cs-sticky-col">
                    <span className="cs-col-tag red">Core Challenges</span>
                    <div className="cs-sticky-note">Assessing viability and priority before committing resources</div>
                    <div className="cs-sticky-note">Fragmented tools make turning raw inputs into decisions difficult</div>
                  </div>
                  <div className="cs-sticky-col">
                    <span className="cs-col-tag green">Product Insights</span>
                    <div className="cs-sticky-note">Users need guided milestones rather than open-ended ambiguous forms</div>
                    <div className="cs-sticky-note">Quantitative analysis must be verified with feedback from real users</div>
                  </div>
                  <div className="cs-sticky-col">
                    <span className="cs-col-tag purple">Design Principles</span>
                    <div className="cs-sticky-note">Guided, not overwhelming · Clear momentum</div>
                    <div className="cs-sticky-note">Evidence-led, not score-only · Transparent next actions</div>
                  </div>
                </div>
                <p className="cs-research-caption">{cs.section1WorkshopCaption}</p>
              </div>

              {/* Process Section */}
              <div className="cs-sub-section">
                <h3 className="cs-sub-title">{cs.processTitle || "Process"}</h3>
                <div className="cs-process-grid">
                  {cs.processBullets?.map((proc, i) => (
                    <div key={i} className="cs-process-card">
                      <div className="cs-process-step" style={{ color: accent }}>0{i + 1}</div>
                      <p>{proc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 2 — INFORMATION ARCHITECTURE & INTERACTION DESIGN
      ══════════════════════════════════════════════════════════ */}
      <section className="cs-editorial-section cs-bg-light">
        <div className="cs-max-width">
          <div className="cs-editorial-split">
            <motion.div className="cs-split-left" {...fadeUp(0)}>
              <span className="cs-section-badge" style={{ color: accent }}>Design</span>
              <h2 className="cs-split-heading">{cs.section2Title || 'Information Architecture'}</h2>
            </motion.div>

            <motion.div className="cs-split-right" {...fadeUp(0.08)}>
              <h3 className="cs-sub-title">Information Architecture & Core Modules</h3>
              <p className="cs-body-paragraph">{cs.section2Preparation}</p>

              {/* Core Pillars / Architecture Modules (Clean Light Theme) */}
              <div className="cs-moodboard-grid">
                {moduleList.map((item, i) => (
                  <div key={i} className="cs-moodboard-card">
                    <div className="cs-mb-color-bar" style={{ background: item.color }} />
                    <span className="cs-mb-name">
                      {item.name}
                    </span>
                    <span className="cs-mb-role">
                      {item.role}
                    </span>
                  </div>
                ))}
              </div>

              <h3 className="cs-sub-title" style={{ marginTop: 36 }}>Key Prioritization</h3>
              <p className="cs-body-paragraph">{cs.section2TurningMoodboards}</p>

              <h3 className="cs-sub-title" style={{ marginTop: 36 }}>Core Decisions</h3>
              <div className="cs-bullet-list">
                {cs.section2Finalizing?.map((item, i) => (
                  <div key={i} className="cs-bullet-item" style={{ borderLeftColor: accent }}>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Full-Width Dual Desktop Preview Frame (Clean Light Theme) */}
          <motion.div className="cs-full-screen-showcase" {...fadeUp(0.12)}>
            <div className="cs-screens-outer">
              <div className="cs-desktop-frame">
                <div className="cs-browser-chrome">
                  <div className="cs-browser-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="cs-browser-url">app.{cs.client.toLowerCase().replace(/[^a-z0-9]/g, '')}.com/dashboard</div>
                </div>
                <img src={cs.coverImage} alt="Desktop Platform" className="cs-full-screen-img" />
              </div>

              <div className="cs-desktop-frame cs-frame-secondary">
                <div className="cs-browser-chrome">
                  <div className="cs-browser-dots">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <div className="cs-browser-url">app.{cs.client.toLowerCase().replace(/[^a-z0-9]/g, '')}.com/overview</div>
                </div>
                <img src={cs.coverImage} alt="Secondary View" className="cs-full-screen-img" />
              </div>
            </div>
            <p className="cs-showcase-caption">Primary platform desktop interface — high-density data views & real-time telemetry</p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 3 — MOBILE DESIGN (4 Phones in a Row, Light Theme)
      ══════════════════════════════════════════════════════════ */}
      <section className="cs-editorial-section">
        <div className="cs-max-width">
          <div className="cs-editorial-split">
            <motion.div className="cs-split-left" {...fadeUp(0)}>
              <span className="cs-section-badge" style={{ color: accent }}>Mobile</span>
              <h2 className="cs-split-heading">{cs.section3Title || 'Mobile Design'}</h2>
            </motion.div>

            <motion.div className="cs-split-right" {...fadeUp(0.08)}>
              <p className="cs-body-paragraph">{cs.section3Content}</p>
            </motion.div>
          </div>

          {/* 4 Phone Mockup Showcase Container (Clean Light Theme) */}
          <motion.div className="cs-mobile-showcase-wrap" {...fadeUp(0.14)}>
            <div className="cs-mobile-stage">
              {[0, 1, 2, 3].map((idx) => (
                <div key={idx} className="cs-phone-frame">
                  <div className="cs-phone-bezel">
                    <div className="cs-phone-island" />
                    <div className="cs-phone-display">
                      <img src={cs.coverImage} alt={`Mobile screen ${idx + 1}`} className="cs-phone-screen-img" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="cs-showcase-caption">Responsive touch-optimized mobile screens — thumb-accessible navigation and quick filters</p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 4 — DESIGN SYSTEM & FEATURE DETAILS
      ══════════════════════════════════════════════════════════ */}
      <section className="cs-editorial-section cs-bg-light">
        <div className="cs-max-width">
          <div className="cs-editorial-split">
            <motion.div className="cs-split-left" {...fadeUp(0)}>
              <span className="cs-section-badge" style={{ color: accent }}>Design System</span>
              <h2 className="cs-split-heading">{cs.section4Title || 'Design System'}</h2>
            </motion.div>

            <motion.div className="cs-split-right" {...fadeUp(0.08)}>
              <p className="cs-body-paragraph">{cs.section4Content}</p>

              <div className="cs-bullet-list">
                {cs.section4Bullets?.map((bullet, i) => (
                  <div key={i} className="cs-bullet-item" style={{ borderLeftColor: accent }}>
                    <p>{bullet}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Dual Design System Panels (Clean Light Theme) */}
          <motion.div className="cs-full-screen-showcase" {...fadeUp(0.12)}>
            <div className="cs-ds-duo-stage">
              <div className="cs-ds-card">
                <div className="cs-ds-title">Component Tokens & Variants</div>
                <div className="cs-ds-component-preview">
                  <div className="cs-ds-pill" style={{ background: accent }}>Primary Button</div>
                  <div className="cs-ds-pill-ghost">Ghost Action</div>
                  <div className="cs-ds-badge-demo" style={{ background: `${accent}15`, color: accent }}>
                    Status &bull; Verified &bull; Active
                  </div>
                </div>
              </div>

              <div className="cs-ds-card">
                <div className="cs-ds-title">Typography & Spacing Scale</div>
                <div className="cs-ds-typo-preview">
                  <div className="typo-h1">Display / 48px Semibold</div>
                  <div className="typo-h2">Heading / 28px Medium</div>
                  <div className="typo-body">Body / 15px Regular (150% Line Height)</div>
                </div>
              </div>
            </div>
            <p className="cs-showcase-caption">Atomic component architecture documented in Figma and tokenized for front-end engineers</p>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SECTION 5 — KEY TAKEAWAYS & HANDOVER
      ══════════════════════════════════════════════════════════ */}
      <section className="cs-editorial-section">
        <div className="cs-max-width">
          <div className="cs-editorial-split">
            <motion.div className="cs-split-left" {...fadeUp(0)}>
              <span className="cs-section-badge" style={{ color: accent }}>Delivery</span>
              <h2 className="cs-split-heading">{cs.section5Title || 'Key Takeaways'}</h2>
            </motion.div>

            <motion.div className="cs-split-right" {...fadeUp(0.08)}>
              <p className="cs-body-paragraph" style={{ marginBottom: 24 }}>
                At the end of the project, I prepared structured design specs and tokenized assets for straightforward engineering implementation:
              </p>

              <div className="cs-handover-rows">
                {cs.handoverItems?.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="cs-handover-box"
                    style={{ borderLeftColor: accent }}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                  >
                    <span className="cs-handover-num" style={{ color: accent }}>0{idx + 1}</span>
                    <span className="cs-handover-desc">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="cs-closing-quote-box">
                <p className="cs-quote-text">
                  &ldquo;{cs.handoverClosing}&rdquo;
                </p>
                <div className="cs-quote-author">
                  <div className="cs-author-avatar" style={{ background: accent }}>PK</div>
                  <div>
                    <div className="cs-author-name">Pavan Kumar</div>
                    <div className="cs-author-role">UI/UX Designer</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SIMILAR PROJECTS (2 Cards side-by-side)
      ══════════════════════════════════════════════════════════ */}
      {similarProjects.length > 0 && (
        <section className="cs-editorial-section cs-bg-light">
          <div className="cs-max-width">
            <div className="cs-similar-header">
              <h2 className="cs-similar-title">Similar Projects</h2>
              <button onClick={() => onNavigate('work')} className="cs-view-all-btn">
                All Projects <ArrowUpRight size={15} />
              </button>
            </div>

            <div className="cs-similar-grid">
              {similarProjects.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="cs-similar-card"
                  onClick={() => onNavigate(`project:${item.id}`)}
                >
                  <div className="cs-similar-preview">
                    <img src={item.image} alt={item.title} className="cs-similar-img" />
                    <div className="cs-similar-tag-row">
                      {item.tags?.map((t) => (
                        <span key={t} className="cs-sim-tag">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="cs-similar-info">
                    <h3 className="cs-sim-proj-title">{item.title}</h3>
                    <div className="cs-sim-arrow-circle">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ══════════════════════════════════════════════════════════
          GET IN TOUCH — Clean Light Footer Section (No Dark Cards)
      ══════════════════════════════════════════════════════════ */}
      <footer className="cs-light-footer">
        <div className="cs-max-width cs-footer-center">
          <span className="cs-footer-kicker" style={{ color: accent }}>HAVE A PROJECT IN MIND?</span>
          <h2 className="cs-footer-heading">Get in touch</h2>

          <div className="cs-contact-pill-wrap">
            <button onClick={handleCopyEmail} className="cs-email-pill">
              <span>pavan.dsgn@gmail.com</span>
              {copied ? <Check size={16} color="#10b981" /> : <Copy size={16} />}
            </button>
            {copied && <span className="cs-copied-toast">Email copied to clipboard!</span>}
          </div>

          <div className="cs-footer-actions">
            <button
              onClick={() => onNavigate('contact')}
              className="cs-footer-btn-primary"
              style={{ background: '#0f172a' }}
            >
              Let&apos;s Build Together
            </button>
            <button onClick={() => onNavigate('work')} className="cs-footer-btn-ghost">
              Explore More Case Studies
            </button>
          </div>

          <div className="cs-footer-bottom-bar">
            <div className="cs-footer-brand">
              <span className="brand-dot" />
              <span>Pavan Kumar &bull; UI/UX & Product Designer</span>
            </div>
            <div className="cs-footer-links">
              <span onClick={() => onNavigate('home')}>Home</span>
              <span onClick={() => onNavigate('work')}>Work</span>
              <span onClick={() => onNavigate('about')}>About</span>
              <span onClick={() => onNavigate('contact')}>Contact</span>
            </div>
          </div>
        </div>
      </footer>

      {/* ══════════════════════════════════════════════════════════
          INLINE STYLES — STRICT LIGHT THEME, 48PX PADDING, PLUS JAKARTA SANS
      ══════════════════════════════════════════════════════════ */}
      <style>{`
        .cs-page-root {
          background: #ffffff;
          color: #0f172a;
          font-family: 'Plus Jakarta Sans', var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif !important;
          min-height: 100vh;
          overflow-x: hidden;
          padding-top: 86px;
          box-sizing: border-box;
        }

        .cs-page-root h1,
        .cs-page-root h2,
        .cs-page-root h3,
        .cs-page-root h4,
        .cs-page-root h5,
        .cs-page-root h6,
        .cs-headline,
        .cs-gco-title,
        .cs-split-heading,
        .cs-sub-title,
        .cs-similar-title,
        .cs-sim-proj-title,
        .cs-footer-heading,
        .cs-stat-num,
        .cs-stat-label,
        .cs-kicker,
        .cs-section-badge,
        .cs-fallback-box h1 {
          font-family: 'Plus Jakarta Sans', var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
        }

        .cs-max-width {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          padding-left: 48px;
          padding-right: 48px;
          box-sizing: border-box;
        }

        .cs-fallback-root {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ffffff;
          padding: 120px 48px;
          box-sizing: border-box;
        }

        .cs-fallback-box {
          max-width: 560px;
          text-align: center;
        }

        .cs-back-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 24px;
          padding: 12px 24px;
          border-radius: 100px;
          background: #0f172a;
          color: #ffffff;
          border: none;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
        }

        /* ── Top Bar & Breadcrumb ── */
        .cs-top-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid #f1f5f9;
          margin-bottom: 40px;
        }
        .cs-back-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          padding: 8px 16px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #334155;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .cs-back-link:hover {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
        }
        .cs-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.82rem;
          color: #94a3b8;
        }
        .cs-crumb-item {
          cursor: pointer;
          transition: color 0.2s;
        }
        .cs-crumb-item:hover {
          color: #0f172a;
        }
        .cs-crumb-active {
          color: #0f172a;
          font-weight: 600;
        }

        /* ── Hero Grid ── */
        .cs-hero-section {
          padding-bottom: 48px;
        }
        .cs-hero-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 56px;
          align-items: center;
          margin-bottom: 56px;
        }
        .cs-hero-left {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .cs-kicker {
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.12em;
        }
        .cs-headline {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: clamp(2.1rem, 3.8vw, 3.1rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.035em;
          color: #09090b;
          margin: 0;
        }
        .cs-description {
          font-size: 1.05rem;
          line-height: 1.68;
          color: #475569;
          margin: 0;
        }
        .cs-tags-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 6px;
        }
        .cs-tag-pill {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: none;
          padding: 6px 14px;
          border-radius: 100px;
          border: 1px solid #e2e8f0;
          background: #f8fafc;
        }

        /* ── Light Mockup Stage ── */
        .cs-hero-right {
          position: relative;
        }
        .cs-mockup-stage {
          position: relative;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cs-mockup-glow {
          position: absolute;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.12;
          pointer-events: none;
          z-index: 1;
        }
        .cs-laptop-mockup {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 440px;
          border-radius: 14px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 10px 10px 14px 10px;
          box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.08);
          transform: perspective(1000px) rotateY(-6deg) rotateX(4deg);
          transition: transform 0.4s ease;
        }
        .cs-laptop-mockup:hover {
          transform: perspective(1000px) rotateY(-2deg) rotateX(2deg);
        }
        .cs-laptop-screen {
          border-radius: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          overflow: hidden;
        }
        .cs-browser-dots {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 12px;
          background: #f1f5f9;
          border-bottom: 1px solid #e2e8f0;
        }
        .cs-browser-dots .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }
        .cs-browser-dots .dot.red { background: #ef4444; }
        .cs-browser-dots .dot.yellow { background: #eab308; }
        .cs-browser-dots .dot.green { background: #22c55e; }
        .cs-screen-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
        }

        .cs-phone-mockup {
          position: absolute;
          right: 0;
          bottom: -15px;
          z-index: 3;
          width: 155px;
          border-radius: 26px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 7px;
          box-shadow: 0 16px 36px -6px rgba(15, 23, 42, 0.12);
          transform: perspective(900px) rotateY(-12deg) rotateX(5deg);
        }
        .cs-phone-inner {
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          background: #f8fafc;
        }
        .cs-phone-notch {
          width: 38px;
          height: 8px;
          background: #e2e8f0;
          border-radius: 10px;
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
        }
        .cs-phone-img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          display: block;
        }

        /* ── Meta Strip (5 Columns) ── */
        .cs-meta-strip {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 22px 28px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
        }
        .cs-meta-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .cs-meta-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .cs-meta-content {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .cs-meta-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: none;
          color: #94a3b8;
        }
        .cs-meta-value {
          font-size: 0.88rem;
          font-weight: 600;
          color: #0f172a;
          line-height: 1.35;
        }

        /* ── Goal, Challenge, Outcome (Editorial) ── */
        .cs-gco-section {
          padding-top: 56px;
          padding-bottom: 72px;
          background: #ffffff;
        }
        .cs-gco-row {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 48px;
          padding: 44px 0;
          border-bottom: 1px solid #f1f5f9;
        }
        .cs-gco-row:first-child {
          padding-top: 16px;
        }
        .cs-gco-row:last-child {
          border-bottom: none;
          padding-bottom: 16px;
        }
        .cs-gco-title {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: 1.85rem;
          font-weight: 800;
          color: #0f172a;
          letter-spacing: -0.02em;
          margin: 0;
        }
        .cs-gco-body {
          font-size: 1.08rem;
          line-height: 1.76;
          color: #334155;
          margin: 0;
        }

        /* ── Numbers Banner (Light Theme, No Dark Block) ── */
        .cs-numbers-banner {
          padding: 56px 0;
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          border-bottom: 1px solid #e2e8f0;
        }
        .cs-numbers-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          text-align: center;
        }
        .cs-number-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .cs-stat-num {
          font-size: clamp(3.2rem, 5vw, 4.4rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1;
        }
        .cs-stat-label {
          font-size: 1.02rem;
          font-weight: 600;
          color: #64748b;
          letter-spacing: -0.01em;
        }

        /* ── Editorial Section Styles ── */
        .cs-editorial-section {
          padding: 88px 0;
        }
        .cs-bg-light {
          background: #f8fafc;
        }
        .cs-editorial-split {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 64px;
        }
        .cs-split-left {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .cs-section-badge {
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.14em;
        }
        .cs-split-heading {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: 1.95rem;
          font-weight: 800;
          color: #09090b;
          letter-spacing: -0.03em;
          line-height: 1.22;
          margin: 0;
        }
        .cs-split-right {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .cs-body-paragraph {
          font-size: 1.04rem;
          line-height: 1.76;
          color: #334155;
          margin: 0;
        }
        .cs-sub-title {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.015em;
          margin: 12px 0 0 0;
        }

        /* ── Gantt Chart ── */
        .cs-gantt-chart {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }
        .cs-gantt-headers {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          padding-bottom: 14px;
          border-bottom: 1px solid #f1f5f9;
          font-size: 0.78rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #94a3b8;
          letter-spacing: 0.06em;
          text-align: center;
        }
        .cs-gantt-bars {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 18px;
        }
        .cs-gantt-bar-track {
          background: #f1f5f9;
          border-radius: 100px;
          height: 42px;
          display: flex;
          align-items: center;
          padding: 3px;
        }
        .cs-gantt-bar-fill {
          height: 100%;
          border-radius: 100px;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          font-size: 0.8rem;
          font-weight: 600;
          white-space: nowrap;
          overflow: hidden;
        }
        .cs-gantt-bar-dates {
          font-size: 0.72rem;
          opacity: 0.85;
          font-weight: 500;
        }

        /* ── Bullets ── */
        .cs-bullet-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .cs-bullet-item {
          padding-left: 16px;
          border-left: 3px solid;
          background: #ffffff;
          border-radius: 0 8px 8px 0;
          padding-top: 8px;
          padding-bottom: 8px;
        }
        .cs-bullet-item p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.6;
          color: #334155;
        }

        /* ── Research Synthesis Card (Clean Light Theme) ── */
        .cs-research-card {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 24px;
          color: #0f172a;
          margin-top: 24px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.02);
        }
        .cs-research-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 16px;
          border-bottom: 1px solid #e2e8f0;
          margin-bottom: 18px;
        }
        .cs-research-badge {
          font-size: 0.72rem;
          font-weight: 800;
          letter-spacing: 0.1em;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          padding: 4px 10px;
          border-radius: 6px;
        }
        .cs-research-sub {
          font-size: 0.82rem;
          color: #64748b;
        }
        .cs-sticky-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }
        .cs-col-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: none;
          letter-spacing: 0.08em;
          margin-bottom: 10px;
        }
        .cs-col-tag.red { color: #dc2626; }
        .cs-col-tag.green { color: #059669; }
        .cs-col-tag.purple { color: #7c3aed; }
        .cs-sticky-note {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 12px;
          font-size: 0.82rem;
          line-height: 1.45;
          color: #334155;
          margin-bottom: 10px;
          box-shadow: 0 2px 6px rgba(0,0,0,0.02);
        }
        .cs-research-caption {
          font-size: 0.82rem;
          color: #64748b;
          text-align: center;
          margin-top: 18px;
          margin-bottom: 0;
          font-style: italic;
        }

        /* ── Process 4-step Grid ── */
        .cs-process-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 14px;
        }
        .cs-process-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 18px;
        }
        .cs-process-step {
          font-size: 0.78rem;
          font-weight: 800;
          margin-bottom: 8px;
        }
        .cs-process-card p {
          font-size: 0.9rem;
          line-height: 1.5;
          color: #334155;
          margin: 0;
        }

        /* ── Core Modules / Pillars (Clean Light Cards) ── */
        .cs-moodboard-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 16px;
        }
        .cs-moodboard-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 18px;
          min-height: 70px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }
        .cs-mb-color-bar {
          width: 36px;
          height: 5px;
          border-radius: 10px;
          margin-bottom: 10px;
        }
        .cs-mb-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
        }
        .cs-mb-role {
          font-size: 0.8rem;
          color: #64748b;
          margin-top: 4px;
        }

        /* ── Full-Width Showcase Screens (Clean Light Theme) ── */
        .cs-full-screen-showcase {
          margin-top: 56px;
        }
        .cs-screens-outer {
          border-radius: 20px;
          padding: 36px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          box-shadow: 0 6px 24px rgba(15, 23, 42, 0.03);
        }
        .cs-desktop-frame {
          background: #ffffff;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 24px -4px rgba(15, 23, 42, 0.06);
          border: 1px solid #e2e8f0;
        }
        .cs-browser-chrome {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #f1f5f9;
          border-bottom: 1px solid #e2e8f0;
          padding: 10px 14px;
        }
        .cs-browser-url {
          font-size: 0.72rem;
          color: #475569;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 3px 12px;
          border-radius: 6px;
          font-family: monospace;
        }
        .cs-full-screen-img {
          width: 100%;
          height: 280px;
          object-fit: cover;
          display: block;
        }
        .cs-showcase-caption {
          text-align: center;
          font-size: 0.85rem;
          color: #64748b;
          margin-top: 14px;
        }

        /* ── Mobile 4-Phone Showcase (Clean Light Theme) ── */
        .cs-mobile-showcase-wrap {
          margin-top: 56px;
        }
        .cs-mobile-stage {
          border-radius: 24px;
          padding: 48px 32px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          box-shadow: 0 6px 24px rgba(15, 23, 42, 0.03);
        }
        .cs-phone-frame {
          display: flex;
          justify-content: center;
        }
        .cs-phone-bezel {
          width: 100%;
          max-width: 200px;
          border-radius: 32px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 9px;
          box-shadow: 0 16px 36px -6px rgba(15, 23, 42, 0.08);
          position: relative;
        }
        .cs-phone-island {
          width: 44px;
          height: 10px;
          background: #e2e8f0;
          border-radius: 10px;
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
        }
        .cs-phone-display {
          border-radius: 24px;
          overflow: hidden;
          background: #f8fafc;
        }
        .cs-phone-screen-img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
        }

        /* ── Design System Panels (Clean Light Theme) ── */
        .cs-ds-duo-stage {
          border-radius: 20px;
          padding: 36px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          box-shadow: 0 6px 24px rgba(15, 23, 42, 0.03);
        }
        .cs-ds-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px;
          color: #0f172a;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
        }
        .cs-ds-title {
          font-size: 0.88rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #64748b;
          text-transform: none;
          letter-spacing: 0.06em;
        }
        .cs-ds-component-preview {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
        }
        .cs-ds-pill {
          padding: 10px 20px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #ffffff;
        }
        .cs-ds-pill-ghost {
          padding: 10px 20px;
          border-radius: 100px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #334155;
          background: #ffffff;
          border: 1px solid #cbd5e1;
        }
        .cs-ds-badge-demo {
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 700;
        }
        .cs-ds-typo-preview {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .typo-h1 { font-size: 1.35rem; font-weight: 700; color: #0f172a; }
        .typo-h2 { font-size: 1.05rem; font-weight: 600; color: #334155; }
        .typo-body { font-size: 0.85rem; color: #64748b; }

        /* ── Handover & Takeaways ── */
        .cs-handover-rows {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
        }
        .cs-handover-box {
          display: flex;
          align-items: center;
          gap: 16px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-left: 4px solid;
          border-radius: 0 10px 10px 0;
          padding: 14px 18px;
        }
        .cs-handover-num {
          font-size: 0.9rem;
          font-weight: 800;
        }
        .cs-handover-desc {
          font-size: 0.92rem;
          font-weight: 500;
          color: #1e293b;
        }
        .cs-closing-quote-box {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
        }
        .cs-quote-text {
          font-size: 1.05rem;
          line-height: 1.65;
          font-style: italic;
          color: #334155;
          margin: 0 0 18px 0;
        }
        .cs-quote-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .cs-author-avatar {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .cs-author-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
        }
        .cs-author-role {
          font-size: 0.76rem;
          color: #64748b;
        }

        /* ── Similar Projects ── */
        .cs-similar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 36px;
        }
        .cs-similar-title {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.03em;
          color: #09090b;
          margin: 0;
        }
        .cs-view-all-btn {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          font-size: 0.88rem;
          font-weight: 700;
          color: #0f172a;
          cursor: pointer;
        }
        .cs-similar-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }
        .cs-similar-card {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.02);
        }
        .cs-similar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px -4px rgba(0, 0, 0, 0.08);
        }
        .cs-similar-preview {
          height: 240px;
          background: #f1f5f9;
          position: relative;
          overflow: hidden;
        }
        .cs-similar-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s ease;
        }
        .cs-similar-card:hover .cs-similar-img {
          transform: scale(1.04);
        }
        .cs-similar-tag-row {
          position: absolute;
          bottom: 14px;
          left: 14px;
          display: flex;
          gap: 6px;
        }
        .cs-sim-tag {
          font-size: 0.7rem;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.92);
          backdrop-filter: blur(8px);
          color: #0f172a;
          padding: 4px 10px;
          border-radius: 100px;
          border: 1px solid #e2e8f0;
        }
        .cs-similar-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
        }
        .cs-sim-proj-title {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }
        .cs-sim-arrow-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .cs-similar-card:hover .cs-sim-arrow-circle {
          background: #0f172a;
          color: #ffffff;
        }

        /* ── Clean Light Footer / Get In Touch ── */
        .cs-light-footer {
          background: #f8fafc;
          border-top: 1px solid #e2e8f0;
          color: #0f172a;
          padding: 96px 0 48px 0;
        }
        .cs-footer-center {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .cs-footer-kicker {
          font-size: 0.74rem;
          font-weight: 800;
          letter-spacing: 0.16em;
          margin-bottom: 12px;
        }
        .cs-footer-heading {
          font-family: 'Plus Jakarta Sans', sans-serif !important;
          font-size: clamp(2.8rem, 5vw, 4.2rem);
          font-weight: 800;
          letter-spacing: -0.04em;
          color: #0f172a;
          margin: 0 0 28px 0;
        }
        .cs-contact-pill-wrap {
          position: relative;
          margin-bottom: 32px;
        }
        .cs-email-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          padding: 14px 28px;
          border-radius: 100px;
          font-size: 0.98rem;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
          transition: all 0.2s ease;
        }
        .cs-email-pill:hover {
          background: #f1f5f9;
          border-color: #cbd5e1;
        }
        .cs-copied-toast {
          position: absolute;
          bottom: -24px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.75rem;
          color: #10b981;
          white-space: nowrap;
        }
        .cs-footer-actions {
          display: flex;
          gap: 14px;
          margin-bottom: 72px;
        }
        .cs-footer-btn-primary {
          border: none;
          color: #ffffff;
          padding: 13px 26px;
          border-radius: 100px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s;
        }
        .cs-footer-btn-primary:hover {
          opacity: 0.9;
        }
        .cs-footer-btn-ghost {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #0f172a;
          padding: 13px 26px;
          border-radius: 100px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.2s;
        }
        .cs-footer-btn-ghost:hover {
          background: #f1f5f9;
        }
        .cs-footer-bottom-bar {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 32px;
          border-top: 1px solid #e2e8f0;
          font-size: 0.85rem;
          color: #64748b;
        }
        .cs-footer-brand {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cs-footer-brand .brand-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
        }
        .cs-footer-links {
          display: flex;
          gap: 20px;
        }
        .cs-footer-links span {
          cursor: pointer;
          transition: color 0.2s;
        }
        .cs-footer-links span:hover {
          color: #0f172a;
        }

        /* ── Responsive adjustments ── */
        @media (max-width: 960px) {
          .cs-hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .cs-meta-strip {
            grid-template-columns: repeat(2, 1fr);
          }
          .cs-gco-row {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .cs-numbers-grid {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .cs-editorial-split {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .cs-screens-outer {
            grid-template-columns: 1fr;
          }
          .cs-mobile-stage {
            grid-template-columns: repeat(2, 1fr);
          }
          .cs-ds-duo-stage {
            grid-template-columns: 1fr;
          }
          .cs-similar-grid {
            grid-template-columns: 1fr;
          }
          .cs-footer-bottom-bar {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};
export default CaseStudyPage;
