import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle } from 'lucide-react';

export const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="glass-card"
          style={{
            maxWidth: '840px',
            width: '100%',
            maxHeight: '90vh',
            overflowY: 'auto',
            borderRadius: 'var(--radius-xl)',
            padding: 0,
            position: 'relative',
            backgroundColor: '#ffffff',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.25)',
          }}
        >
          {/* Header Banner */}
          <div
            style={{
              height: '240px',
              background: project.imageBg,
              padding: '32px',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#fff',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <X size={20} />
            </button>

            <div>
              <span
                style={{
                  background: 'rgba(0,0,0,0.5)',
                  padding: '6px 14px',
                  borderRadius: '100px',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#fff',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                {project.category}
              </span>
            </div>

            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#fff', marginBottom: '8px' }}>
                {project.title}
              </h2>
              <div style={{ display: 'flex', gap: '20px', color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
                <span><strong>Role:</strong> {project.role}</span>
                <span>•</span>
                <span><strong>Year:</strong> {project.year}</span>
              </div>
            </div>
          </div>

          {/* Body Content */}
          <div style={{ padding: '36px' }}>
            
            {/* Metrics Row */}
            {project.metrics && (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '16px',
                  marginBottom: '36px',
                }}
              >
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: '#f8fafc',
                      border: '1px solid rgba(0, 0, 0, 0.08)',
                      padding: '20px',
                      borderRadius: 'var(--radius-md)',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{ fontSize: '1.6rem', fontWeight: 800, color: project.accentColor }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginTop: '4px', fontWeight: 600 }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Overview */}
            <div style={{ marginBottom: '36px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '12px', color: 'var(--text-primary)' }}>
                Project Overview
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.02rem', lineHeight: 1.7 }}>
                {project.overview}
              </p>
            </div>

            {/* Deliverables */}
            {project.deliverables && (
              <div style={{ marginBottom: '36px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-primary)' }}>
                  Key Design Deliverables
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px' }}>
                  {project.deliverables.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        background: '#f8fafc',
                        padding: '12px 16px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(0, 0, 0, 0.06)',
                      }}
                    >
                      <CheckCircle size={18} color={project.accentColor} />
                      <span style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Action Footer */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '24px',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {project.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: '#f1f5f9',
                      padding: '4px 10px',
                      borderRadius: '6px',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                      fontWeight: 600,
                    }}
                  >
                    #{t}
                  </span>
                ))}
              </div>
              <button onClick={onClose} className="btn-secondary" style={{ padding: '10px 24px' }}>
                Close Preview
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
