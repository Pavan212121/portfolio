import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#', key: 'home' },
  { name: 'Work', href: '#work', key: 'work' },
  { name: 'About Me', href: '#about', key: 'about' },
  { name: 'Contact', href: '#contact', key: 'contact' },
];

export const Navbar = ({ currentView = 'home', onNavigate = () => {} }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, link) => {
    if (link.key === 'home') {
      e.preventDefault();
      onNavigate('home');
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.key === 'work') {
      e.preventDefault();
      onNavigate('work');
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (link.key === 'about') {
      e.preventDefault();
      onNavigate('about');
      setMobileMenuOpen(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (currentView !== 'home') {
        e.preventDefault();
        onNavigate(link.key);
        setMobileMenuOpen(false);
      } else {
        setMobileMenuOpen(false);
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? '14px 0' : '22px 0',
        transition: 'padding 0.3s ease',
        backgroundColor: 'transparent',
        background: 'transparent',
        borderBottom: 'none',
        boxShadow: 'none',
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        pointerEvents: 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'auto',
          position: 'relative',
        }}
      >
        {/* Desktop Centered Glass Nav Capsule */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            background: 'rgba(255, 255, 255, 0.72)',
            padding: '6px 8px',
            borderRadius: '100px',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(20px) saturate(180%)',
            WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            boxShadow: '0 8px 32px -4px rgba(0, 0, 0, 0.08), inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.95)',
          }}
          className="desktop-nav"
        >
          {navLinks.map((link) => {
            const isWorkActive = link.key === 'work' && currentView === 'work';
            const isHomeActive = link.key === 'home' && currentView === 'home';
            const isAboutActive = link.key === 'about' && currentView === 'about';
            const isActive = isWorkActive || isHomeActive || isAboutActive;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                style={{
                  color: isActive ? '#0f172a' : '#334155',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
                  boxShadow: isActive ? '0 2px 8px rgba(0, 0, 0, 0.06)' : 'none',
                  textDecoration: 'none',
                  padding: '8px 18px',
                  borderRadius: '100px',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#0f172a';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.04)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = '#334155';
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            color: '#0f172a',
            padding: '8px 14px',
            borderRadius: '100px',
            cursor: 'pointer',
            display: 'none',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
            fontSize: '0.88rem',
            fontWeight: 600,
          }}
          className="mobile-toggle"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span>Menu</span>
        </button>
      </div>

      {/* Mobile Nav Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(30px) saturate(190%)',
              WebkitBackdropFilter: 'blur(30px) saturate(190%)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.6)',
              padding: '20px 24px',
              overflow: 'hidden',
              boxShadow: '0 12px 30px rgba(0, 0, 0, 0.08)',
              pointerEvents: 'auto',
              textAlign: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', alignItems: 'center' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link)}
                  style={{
                    color: 'var(--text-primary)',
                    textDecoration: 'none',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    padding: '8px 0',
                    cursor: 'pointer',
                  }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 868px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: inline-flex !important; }
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
