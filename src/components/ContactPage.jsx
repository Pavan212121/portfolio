import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, Send, AlertCircle, ArrowLeft, MapPin, Sparkles } from 'lucide-react';

export const ContactPage = ({ onNavigate = () => {} }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send your message. Please try again.');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', whatsapp: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Contact submission error:', err);
      // Fallback: If API server is unavailable in local dev, allow mailto fallback
      if (err.message && err.message.includes('fetch')) {
        window.location.href = `mailto:pavan.dsgn@gmail.com?subject=Portfolio%20Inquiry%20from%20${encodeURIComponent(formData.name)}&body=${encodeURIComponent(formData.message || 'Hi Pavan, I would like to discuss a project.')}`;
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setErrorMessage(err.message || 'Something went wrong. Please try again or reach out directly.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page-root">
      <div className="contact-page-container">

        {/* Top Navigation Row: Back Button & Breadcrumbs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="contact-page-nav-bar"
        >
          <button
            onClick={() => onNavigate('home')}
            className="contact-page-back-pill"
            aria-label="Back to home"
          >
            <ArrowLeft size={15} />
            <span>Back to home</span>
          </button>

          <div className="contact-page-breadcrumb">
            <span onClick={() => onNavigate('home')} className="cp-crumb-item">Home</span>
            <span className="cp-crumb-sep">/</span>
            <span className="cp-crumb-active">Contact</span>
          </div>
        </motion.div>

        {/* Main 2-Column Split */}
        <div className="contact-main-grid">

          {/* Left Column: Direct Info, Socials, Status */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="contact-left-col"
          >
            <div className="contact-info-top">
              <div className="contact-availability-badge">
                <span className="badge-pulsing-dot" />
                <span>Available for new projects</span>
              </div>

              <h1 className="contact-main-heading">
                Ready?<br />
                Let's talk
              </h1>

              <p className="contact-lead-text">
                Whether you have an upcoming product launch, need to scale your design system, or want to discuss a new collaboration — feel free to drop a message.
              </p>

              {/* Direct Email Row */}
              <div className="contact-channels-row">
                <div className="contact-email-meta">
                  <span className="contact-sub-label">or reach out directly</span>
                  <span className="contact-email-text">
                    to{' '}
                    <a href="mailto:pavan.dsgn@gmail.com" className="contact-email-anchor">
                      pavan.dsgn@gmail.com
                    </a>
                  </span>
                </div>

                <div className="contact-social-pills">
                  {/* Telegram */}
                  <a
                    href="https://t.me"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-circle-btn"
                    aria-label="Telegram"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.6 3.4a1.2 1.2 0 0 0-1.26-.26L2.8 10.3a1.2 1.2 0 0 0 .08 2.25l4.8 1.6 1.8 5.6a1.2 1.2 0 0 0 2.06.43l3.2-3.4 4.6 3.4a1.2 1.2 0 0 0 1.9-.8l3-14.8a1.2 1.2 0 0 0-.64-1.48zm-3.2 3.8-8.2 7.4-.7-2.6 7.4-4.8c.3-.2.1-.6-.2-.4l-9.1 5.6-2.5-.8 14.8-5.8-.5 1.4z" />
                    </svg>
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="contact-circle-btn"
                    aria-label="LinkedIn"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 0 0 1.66-1.63 1.64 1.64 0 0 0-1.66-1.64c-.9 0-1.63.73-1.63 1.64a1.64 1.64 0 0 0 1.63 1.63m1.39 9.74v-8.37H5.07v8.37h2.78z" />
                    </svg>
                  </a>

                  {/* Mail */}
                  <a
                    href="mailto:pavan.dsgn@gmail.com"
                    className="contact-circle-btn"
                    aria-label="Email"
                  >
                    <Mail size={17} strokeWidth={2.2} />
                  </a>
                </div>
              </div>

              {/* Location & Details Card */}
              <div className="contact-meta-card">
                <div className="contact-meta-row">
                  <MapPin size={16} className="contact-meta-icon" />
                  <span>Hyderabad, Telangana, India (IST / UTC+5:30)</span>
                </div>
                <div className="contact-meta-row">
                  <Sparkles size={16} className="contact-meta-icon" />
                  <span>Typically responds within 24 hours</span>
                </div>
              </div>
            </div>

            {/* Bottom Brand Pill */}
            <div className="contact-bottom-badge-row">
              <div className="project-badge-pill">
                <span className="badge-green-dot" />
                <span className="badge-brand-title">Pavan Kumar</span>
                <div className="badge-vertical-divider" />
                <div className="badge-tagline">
                  <span>Ideas that shape</span>
                  <span>tomorrow</span>
                </div>
              </div>

              {/* Pixel Matrix Scatter Pattern */}
              <div className="pixel-scatter-trail" aria-hidden="true">
                <svg width="140" height="34" viewBox="0 0 140 34" fill="none">
                  <rect x="8" y="14" width="8" height="8" fill="#cbd5e1" rx="1" />
                  <rect x="22" y="6" width="9" height="9" fill="#e2e8f0" rx="1" />
                  <rect x="22" y="20" width="8" height="8" fill="#94a3b8" rx="1" />
                  <rect x="36" y="6" width="9" height="9" fill="#cbd5e1" rx="1" />
                  <rect x="50" y="20" width="8" height="8" fill="#cbd5e1" rx="1" />
                  <rect x="64" y="24" width="9" height="9" fill="#94a3b8" rx="1" />
                  <rect x="78" y="20" width="8" height="8" fill="#e2e8f0" rx="1" />
                  <rect x="92" y="20" width="8" height="8" fill="#cbd5e1" rx="1" />
                  <rect x="106" y="24" width="7" height="7" fill="#e2e8f0" rx="1" />
                </svg>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="contact-form-card"
          >
            <h2 className="contact-form-title">
              Send a message<br />
              and I'll get back to you
            </h2>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="contact-success-box"
                >
                  <div className="success-icon-circle">
                    <Check size={26} strokeWidth={2.8} />
                  </div>
                  <h3 className="success-title">Thank You!</h3>
                  <p className="success-desc">
                    Your message has been received. I'll get back to you shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="contact-form-element"
                >
                  <div className="form-field-row">
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name*"
                      value={formData.name}
                      onChange={handleChange}
                      className="contact-line-input"
                    />
                  </div>

                  <div className="form-field-row">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      className="contact-line-input"
                    />
                  </div>

                  <div className="form-field-row">
                    <input
                      type="tel"
                      name="whatsapp"
                      placeholder="Phone or WhatsApp Number"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="contact-line-input"
                    />
                  </div>

                  <div className="form-field-row">
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell me about your project or message..."
                      value={formData.message}
                      onChange={handleChange}
                      className="contact-line-input contact-textarea"
                    />
                  </div>

                  {errorMessage && (
                    <div className="contact-error-banner">
                      <AlertCircle size={16} className="contact-error-icon" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="contact-submit-pill-btn"
                  >
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                    <Send size={16} className="btn-send-icon" />
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

        </div>

      </div>

      <style>{`
        .contact-page-root {
          width: 100%;
          min-height: 100vh;
          background-color: #ffffff;
          padding: 120px 48px 80px 48px;
          color: #111827;
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          box-sizing: border-box;
        }

        .contact-page-container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Top Nav Row */
        .contact-page-nav-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 32px;
          margin-bottom: 24px;
          border-bottom: 1px solid #f1f5f9;
        }

        .contact-page-back-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 100px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .contact-page-back-pill:hover {
          background: #0f172a;
          color: #ffffff;
          border-color: #0f172a;
        }

        .contact-page-breadcrumb {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
        }

        .cp-crumb-item {
          color: #64748b;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .cp-crumb-item:hover {
          color: #0f172a;
        }

        .cp-crumb-sep {
          color: #cbd5e1;
        }

        .cp-crumb-active {
          color: #0f172a;
          font-weight: 600;
        }

        /* Main Grid */
        .contact-main-grid {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: clamp(36px, 5vw, 68px);
          align-items: stretch;
          margin-top: 20px;
        }

        .contact-left-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-right: 8px;
        }

        .contact-availability-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 100px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          color: #166534;
          font-size: 0.78rem;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .badge-pulsing-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.25);
        }

        .contact-main-heading {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif !important;
          font-size: clamp(3.2rem, 5.5vw, 4.6rem);
          font-weight: 500;
          color: #11141a;
          line-height: 1.05;
          letter-spacing: -0.035em;
          margin: 0 0 20px 0;
        }

        .contact-lead-text {
          font-size: 1.05rem;
          line-height: 1.65;
          color: #475569;
          margin: 0 0 36px 0;
          max-width: 520px;
        }

        .contact-channels-row {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 28px;
        }

        .contact-email-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contact-sub-label {
          font-size: 13px;
          color: #64748b;
          font-weight: 400;
        }

        .contact-email-text {
          font-size: 15px;
          color: #657e28;
          font-weight: 500;
        }

        .contact-email-anchor {
          color: #657e28;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-thickness: 1.5px;
          text-decoration-color: #7b9437;
          font-weight: 600;
          transition: color 0.2s ease;
        }

        .contact-email-anchor:hover {
          color: #4d601b;
        }

        .contact-social-pills {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .contact-circle-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #f1f5f9;
          color: #1e293b;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.25s ease;
          border: none;
        }

        .contact-circle-btn:hover {
          background: #e2e8f0;
          transform: translateY(-2px);
          color: #0f172a;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }

        .contact-meta-card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 16px 18px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          margin-bottom: 32px;
          max-width: 460px;
        }

        .contact-meta-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.88rem;
          color: #475569;
        }

        .contact-meta-icon {
          color: #0f172a;
          flex-shrink: 0;
        }

        .contact-bottom-badge-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: auto;
          padding-top: 24px;
        }

        .project-badge-pill {
          background: #f0f2f5;
          padding: 8px 14px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }

        .badge-green-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #65a30d;
          display: inline-block;
        }

        .badge-brand-title {
          font-size: 15px;
          font-weight: 500;
          color: #111827;
          letter-spacing: -0.01em;
        }

        .badge-vertical-divider {
          width: 1px;
          height: 22px;
          background: #d8dbe0;
        }

        .badge-tagline {
          display: flex;
          flex-direction: column;
          font-size: 8px;
          font-weight: 700;
          color: #64748b;
          letter-spacing: 0.05em;
          text-transform: none;
          line-height: 1.25;
        }

        .pixel-scatter-trail {
          display: flex;
          align-items: center;
        }

        /* Right Form Card */
        .contact-form-card {
          border: 1.5px solid #e5e7eb;
          background: #ffffff;
          padding: 44px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 24px -4px rgba(0, 0, 0, 0.04);
          border-radius: 16px;
        }

        .contact-form-title {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif !important;
          font-size: clamp(1.6rem, 2.4vw, 2.1rem);
          font-weight: 500;
          color: #111827;
          line-height: 1.24;
          letter-spacing: -0.025em;
          margin: 0 0 28px 0;
        }

        .contact-form-element {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-field-row {
          width: 100%;
        }

        .contact-line-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #e5e7eb;
          padding: 12px 0;
          font-size: 15px;
          font-family: inherit;
          color: #111827;
          outline: none;
          transition: border-color 0.25s ease;
          box-sizing: border-box;
        }

        .contact-line-input::placeholder {
          color: #94a3b8;
          font-weight: 400;
        }

        .contact-line-input:focus {
          border-bottom-color: #0f172a;
        }

        .contact-textarea {
          resize: vertical;
          min-height: 72px;
        }

        .contact-error-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 14px;
          background-color: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          color: #b91c1c;
          font-size: 13.5px;
          line-height: 1.45;
        }

        .contact-error-icon {
          flex-shrink: 0;
        }

        .contact-submit-pill-btn {
          margin-top: 10px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          background-color: #181a20;
          color: #ffffff;
          padding: 15px 32px;
          border-radius: 100px;
          font-size: 15px;
          font-weight: 600;
          font-family: inherit;
          border: none;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 6px 20px -2px rgba(0, 0, 0, 0.18);
        }

        .contact-submit-pill-btn:hover:not(:disabled) {
          background-color: #000000;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px -2px rgba(0, 0, 0, 0.26);
        }

        .contact-submit-pill-btn:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .btn-send-icon {
          transition: transform 0.2s ease;
        }

        .contact-submit-pill-btn:hover:not(:disabled) .btn-send-icon {
          transform: translateX(3px) translateY(-2px);
        }

        /* Success Box */
        .contact-success-box {
          padding: 48px 24px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }

        .success-icon-circle {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #dcfce7;
          color: #15803d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-title {
          font-size: 1.45rem;
          font-weight: 700;
          color: #0f172a;
          margin: 0;
        }

        .success-desc {
          color: #64748b;
          font-size: 0.95rem;
          line-height: 1.5;
          margin: 0;
          max-width: 340px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 900px) {
          .contact-page-root {
            padding: 100px 24px 60px 24px;
          }
          .contact-main-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .contact-left-col {
            padding-right: 0;
          }
          .contact-form-card {
            padding: 32px 24px;
          }
        }
      `}</style>
    </div>
  );
};

export default ContactPage;
