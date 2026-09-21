import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Check, Send, AlertCircle } from 'lucide-react';

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
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
      setFormData({ name: '', email: '', whatsapp: '' });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      console.error('Contact submission error:', err);
      setErrorMessage(err.message || 'Something went wrong. Please try again or reach out directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact-screen-section">
      <div className="contact-fullscreen-wrapper">
        <div className="contact-inner-container">
          <div className="contact-grid-layout">

            {/* Left Column */}
            <div className="contact-left-col">
              <div className="contact-left-top">
                <h2 className="contact-hero-heading">
                  Ready?<br />
                  Let's talk
                </h2>

                {/* Direct Contact Info & Social Icons */}
                <div className="contact-channels-row">
                  <div className="contact-email-meta">
                    <span className="contact-sub-label">or contact us</span>
                    <span className="contact-email-text">
                      to{' '}
                      <a href="mailto:hi@01project.com" className="contact-email-anchor">
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
                      href="mailto:hi@01project.com"
                      className="contact-circle-btn"
                      aria-label="Email"
                    >
                      <Mail size={17} strokeWidth={2.2} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Badge & Pixel Trail */}
              <div className="contact-bottom-badge-row">
                <div className="project-badge-pill">
                  <span className="badge-green-dot" />
                  <span className="badge-brand-title">01 project</span>
                  <div className="badge-vertical-divider" />
                  <div className="badge-tagline">
                    <span>IDEAS THAT SHAPE</span>
                    <span>TOMORROW</span>
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
            </div>

            {/* Right Column: Contact Card */}
            <div className="contact-form-card">
              <h3 className="contact-form-title">
                Leave your contacts<br />
                and we will contact you
              </h3>

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
                    <h4 className="success-title">Thank You!</h4>
                    <p className="success-desc">
                      We have received your contact details and will get back to you shortly.
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
                        placeholder="WhatsApp Number"
                        value={formData.whatsapp}
                        onChange={handleChange}
                        className="contact-line-input"
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
                      <span>{loading ? 'Submitting...' : 'Submit Form'}</span>
                      <Send size={17} className="btn-send-icon" />
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .contact-screen-section {
          width: 100%;
          min-height: 100vh;
          position: relative;
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0;
          padding: 0;
          border-radius: 0 !important;
          box-sizing: border-box;
        }

        .contact-fullscreen-wrapper {
          width: 100%;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: clamp(48px, 8vh, 96px) 48px;
          background-color: #ffffff;
          border-radius: 0 !important;
          box-sizing: border-box;
        }

        .contact-inner-container {
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          border-radius: 0 !important;
        }

        .contact-grid-layout {
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: clamp(36px, 5vw, 68px);
          align-items: stretch;
          border-radius: 0 !important;
        }

        .contact-left-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding-right: 8px;
          border-radius: 0 !important;
        }

        .contact-left-top {
          border-radius: 0 !important;
        }

        .contact-hero-heading {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif !important;
          font-size: clamp(3.2rem, 5.8vw, 4.8rem);
          font-weight: 500;
          color: #11141a;
          line-height: 1.05;
          letter-spacing: -0.035em;
          margin: 0 0 40px 0;
        }

        .contact-channels-row {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-wrap: wrap;
          margin-bottom: 48px;
        }

        .contact-email-meta {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .contact-sub-label {
          font-size: 13.5px;
          color: #64748b;
          font-weight: 400;
          line-height: 1.3;
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
          transition: color 0.2s ease, text-decoration-color 0.2s ease;
        }

        .contact-email-anchor:hover {
          color: #4d601b;
          text-decoration-color: #4d601b;
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
          background: #ebedf0;
          color: #1e293b;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          border: none;
        }

        .contact-circle-btn:hover {
          background: #dfe2e7;
          transform: translateY(-2px);
          color: #0f172a;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
        }

        .contact-bottom-badge-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: auto;
          padding-top: 28px;
        }

        .project-badge-pill {
          background: #f0f2f5;
          border-radius: 0px !important;
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
          text-transform: uppercase;
          line-height: 1.25;
        }

        .pixel-scatter-trail {
          display: flex;
          align-items: center;
        }

        /* Right Form Card */
        .contact-form-card {
          border: 1.5px solid #e5e7eb;
          border-radius: 0px !important;
          background: #ffffff;
          padding: 48px 44px 40px 44px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.02);
        }

        .contact-form-title {
          font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif !important;
          font-size: clamp(1.75rem, 2.7vw, 2.35rem);
          font-weight: 450;
          color: #111827;
          line-height: 1.22;
          letter-spacing: -0.025em;
          margin: 0 0 34px 0;
        }

        .contact-form-element {
          display: flex;
          flex-direction: column;
          gap: 22px;
          border-radius: 0 !important;
        }

        .form-field-row {
          width: 100%;
          border-radius: 0 !important;
        }

        .contact-line-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #e5e7eb;
          padding: 14px 0;
          font-size: 15px;
          font-family: inherit;
          color: #111827;
          outline: none;
          border-radius: 0 !important;
          transition: border-color 0.25s ease;
        }

        .contact-line-input::placeholder {
          color: #64748b;
          font-weight: 400;
        }

        .contact-line-input:focus {
          border-bottom-color: #111827;
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
          margin-top: 6px;
        }

        .contact-error-icon {
          flex-shrink: 0;
          color: #dc2626;
        }

        .contact-submit-pill-btn {
          width: 100%;
          margin-top: 26px;
          height: 56px;
          background: #111418;
          color: #ffffff;
          border: none;
          border-radius: 9999px;
          font-size: 15.5px;
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
        }

        .contact-submit-pill-btn:hover {
          background: #000000;
          transform: translateY(-2px);
          box-shadow: 0 8px 22px rgba(0, 0, 0, 0.22);
        }

        .contact-submit-pill-btn:active {
          transform: translateY(0);
        }

        .btn-send-icon {
          transform: rotate(10deg);
        }

        /* Success Box */
        .contact-success-box {
          padding: 32px 16px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          border-radius: 0 !important;
        }

        .success-icon-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: rgba(101, 163, 13, 0.12);
          color: #65a30d;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .success-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #111827;
          margin: 0;
        }

        .success-desc {
          font-size: 0.95rem;
          color: #64748b;
          max-width: 280px;
          line-height: 1.5;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 960px) {
          .contact-fullscreen-wrapper {
            padding: 60px 28px;
            min-height: auto;
          }

          .contact-screen-section {
            min-height: auto;
            padding: 60px 0;
          }

          .contact-grid-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }

          .contact-left-col {
            padding-right: 0;
          }

          .contact-bottom-badge-row {
            margin-top: 40px;
            flex-wrap: wrap;
          }

          .contact-form-card {
            padding: 36px 28px;
          }
        }

        @media (max-width: 600px) {
          .contact-fullscreen-wrapper {
            padding: 40px 18px;
          }

          .contact-hero-heading {
            font-size: 2.8rem;
          }

          .contact-channels-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }

          .pixel-scatter-trail {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
