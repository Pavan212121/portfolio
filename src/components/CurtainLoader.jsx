import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NUM_COLUMNS = 5;

export const CurtainLoader = ({ onComplete, replayKey = 0 }) => {
  const [count, setCount] = useState(0);
  const [isOpening, setIsOpening] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    setCount(0);
    setIsOpening(false);
    setIsFinished(false);

    // Smooth counter animation from 0% to 100%
    const interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsOpening(true);
          }, 300);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(100, prev + step);
      });
    }, 45);

    return () => clearInterval(interval);
  }, [replayKey]);

  useEffect(() => {
    if (isOpening) {
      const timer = setTimeout(() => {
        setIsFinished(true);
        if (onComplete) onComplete();
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [isOpening, onComplete]);

  if (isFinished) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 99999,
        pointerEvents: isOpening ? 'none' : 'auto',
        overflow: 'hidden',
      }}
    >
      {/* 5 Vertical Curtain Columns */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          width: '100vw',
          height: '100vh',
        }}
      >
        {[...Array(NUM_COLUMNS)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: 0 }}
            animate={isOpening ? { y: '-100%' } : { y: 0 }}
            transition={{
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1],
              delay: isOpening ? i * 0.08 : 0,
            }}
            style={{
              flex: 1,
              height: '100%',
              backgroundColor: '#0c0e14',
              borderRight: i < NUM_COLUMNS - 1 ? '1px solid rgba(255, 255, 255, 0.03)' : 'none',
              transformOrigin: 'top',
            }}
          />
        ))}
      </div>

      {/* Center Loader Content (Counter, Brand, Progress) */}
      <AnimatePresence>
        {!isOpening && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'absolute',
              inset: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              zIndex: 10,
              userSelect: 'none',
            }}
          >
            {/* Top Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.45)',
                marginBottom: '16px',
              }}
            >
              Curtain Reveal • Portfolio
            </motion.div>

            {/* Percentage Number Counter */}
            <div
              style={{
                fontFamily: 'var(--font-heading), sans-serif',
                fontSize: 'clamp(4.5rem, 11vw, 8.5rem)',
                fontWeight: 800,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                background: 'linear-gradient(180deg, #ffffff 30%, rgba(255, 255, 255, 0.5) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '20px',
              }}
            >
              {count}%
            </div>

            {/* Minimalist Progress Line */}
            <div
              style={{
                width: '180px',
                height: '2px',
                background: 'rgba(255, 255, 255, 0.12)',
                borderRadius: '4px',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <motion.div
                style={{
                  height: '100%',
                  background: '#ffffff',
                  width: `${count}%`,
                  transition: 'width 0.05s linear',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CurtainLoader;
