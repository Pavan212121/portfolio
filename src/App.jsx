import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AbstractShowcase } from './components/AbstractShowcase';
import { DesignProcess } from './components/DesignProcess';
import { SkillsToolkit } from './components/SkillsToolkit';
import { Testimonials } from './components/Testimonials';
import { ContactSection } from './components/ContactSection';
import { LandscapeBanner } from './components/LandscapeBanner';
import { Footer } from './components/Footer';
import { CurtainLoader } from './components/CurtainLoader';
import { ProjectsPage } from './components/ProjectsPage';
import { NotFoundPage } from './components/NotFoundPage';
import { AboutPage } from './components/AboutPage';

export function App() {
  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (path === '/404' || hash === '#404') {
        return '404';
      }
      if (path === '/work' || hash === '#work' || hash === '#projects') {
        return 'work';
      }
      if (path === '/about' || hash === '#about') {
        return 'about';
      }
    }
    return 'home';
  });

  useEffect(() => {
    const handlePopState = () => {
      const hash = window.location.hash;
      const path = window.location.pathname;
      if (path === '/404' || hash === '#404') {
        setCurrentView('404');
      } else if (path === '/work' || hash === '#work' || hash === '#projects') {
        setCurrentView('work');
      } else if (path === '/about' || hash === '#about') {
        setCurrentView('about');
      } else {
        setCurrentView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (target) => {
    if (target === '404') {
      setCurrentView('404');
      window.history.pushState(null, '', '#404');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'work') {
      setCurrentView('work');
      window.history.pushState(null, '', '#work');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'about') {
      setCurrentView('about');
      window.history.pushState(null, '', '#about');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (target === 'home') {
      setCurrentView('home');
      window.history.pushState(null, '', '#');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Navigate to home first, then scroll to section
      setCurrentView('home');
      window.history.pushState(null, '', `#${target}`);
      setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: 'var(--bg-main)' }}>
      {/* Framer-Style Curtain Loader Reveal on page load */}
      <CurtainLoader />

      {/* Dynamic Ambient Background */}
      <div className="bg-ambient-grid" />
      <div className="bg-dot-pattern" />

      {/* Main Navigation (Shown on Home, Work, and About views) */}
      {currentView !== '404' && (
        <Navbar currentView={currentView} onNavigate={handleNavigate} />
      )}

      {currentView === '404' ? (
        /* Dedicated 404 Error Page */
        <NotFoundPage
          onNavigateHome={() => handleNavigate('home')}
          onNavigate={handleNavigate}
        />
      ) : currentView === 'work' ? (
        /* Dedicated Full Projects Page (No global footer) */
        <ProjectsPage onNavigateHome={() => handleNavigate('home')} />
      ) : currentView === 'about' ? (
        /* Dedicated About Me Page (No global footer) */
        <AboutPage onNavigate={handleNavigate} />
      ) : (
        /* Full Landing Page (Keeping all existing sections & Footer intact) */
        <>
          {/* Hero Intro */}
          <Hero />

          {/* Abstract Visual Showcase Section */}
          <AbstractShowcase onNavigate={handleNavigate} />

          {/* 5-Step UX Methodology Process */}
          <DesignProcess />

          {/* Skills & Ecosystem Toolkit */}
          <SkillsToolkit />

          {/* Testimonials & Endorsements */}
          <Testimonials />

          {/* Contact Section & Form */}
          <ContactSection />

          {/* Landscape Showcase Banner ("Crafting digital experiences that connect") */}
          <LandscapeBanner />

          {/* Footer (Rendered solely on the landing/home page) */}
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
